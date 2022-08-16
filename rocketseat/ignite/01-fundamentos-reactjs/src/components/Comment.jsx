import { set } from 'date-fns';
import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import Avatar from './Avatar';

import styles from './Comment.module.css';

export default function Comment({content, onDeleteComment}) {

    const [ likeCount, setLikeCount ] = useState(0);

    function handleDeleteComment() {
        // console.log('delete comment')

        onDeleteComment(content);
    }

    function handleLikeComment () {
        setLikeCount((state) => {
            return state + 1;
        });
    }

    return (
        <div className={styles.comment}>

            <Avatar
                hasBorder={false}
                src="https://github.com/diego3g.png"
                text="Imagem de Avatar"
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Bruno Galvão</strong>
                            <time
                                title='26 de Julho às 16:43'
                                dateTime="2022-26-07 16:43:00">Cerca de 1h atrás</time>
                        </div>

                        <button
                            onClick={handleDeleteComment}
                            title='Deletar Comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                    
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}