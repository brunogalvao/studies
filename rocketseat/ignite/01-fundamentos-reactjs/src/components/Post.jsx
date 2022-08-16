import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';
import Avatar from './Avatar';
import Comment from './Comment';
import styles from './Post.module.css';

export default function Post({author, publishedAt, content}) {

    const [comments, setComments] = useState([
        "Post Muito Bacana...",  
    ]);

    const [ newCommentText, setNewCommentText ] = useState('');

    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreatNewComment() {

        event.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText('');

    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
        event.target.setCustomValidity('');
    }

    function deleteComment(commentToDelete) {
        
        /*
            imutabilidade -> as coisas não sofrem mutação,
            nós criamos um novo valor (um novo espaço na memoria)
        */
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        setComments(commentsWithoutDeleteOne);


        // console.log(`Deletar comentário ${comment}`);

    }

    function handleNewCommentInvalid() {
        console.log(event)
        event.target.setCustomValidity('Esse campo e obrigatório');
    }
    
    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>

                    <Avatar
                        src={ author.avatarUrl } />

                    <div className={styles.authorInfo}>
                        <strong>{ author.name }</strong>
                        <span> { author.role } </span>
                    </div>

                </div>

                <time
                    title={publishedDateFormated}
                    dateTime={ publishedAt.toISOString() }> { publishedDateRelativeToNow } </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {

                    if (line.type === 'paragraph') {
                        
                        return (
                            <p key={line.content}>
                                {line.content}
                            </p>
                        );

                    } else if (line.type === 'link') {
                        
                        return (
                            <p key={line.content}>
                                <a href="#">{line.content}</a>
                            </p>
                        );

                    }

                })}
            </div>

            <form onSubmit={handleCreatNewComment} className={styles.comentForm}>
                <strong>Deixe seu Feedback</strong>

                <textarea
                    name="comment"
                    value={newCommentText}
                    placeholder='Deixe seu comentário'
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button
                        type='submit'
                        disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.comentList}>
                {comments.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}