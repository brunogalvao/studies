import Comment from './Comment';
import styles from './Post.module.css';

export default function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>

                    <img
                        className={styles.avatar}
                        src="https://github.com/brunogalvao.png" />

                    <div className={styles.authorInfo}>
                        <strong>Bruno Galvão</strong>
                        <span>Web Developer</span>
                    </div>

                </div>

                <time
                    title='26 de Julho às 16:43'
                    dateTime="2022-26-07 16:43:00">Publicado hà 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋 </p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉  <a href="#"> jane.design/doctorcare</a></p>

                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a>
                </p>
            </div>

            <form className={styles.comentForm}>
                <strong>Deixe seu Feedback</strong>

                <textarea
                    placeholder='Deixe seu comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.comentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}