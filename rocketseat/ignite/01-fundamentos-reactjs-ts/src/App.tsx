import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from  './components/Post'

import './global.css';
import styles from './App.module.css';

/*
    author: { avatar_url: "", name: "", role: "" }
    publishedAt: Date
    content: string
*/

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/brunogalvao.png',
      name: 'Bruno Balvao',
      role: 'Web Developer / UX/UI',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa Dev 👋 '},
      
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 '},
      
      {type: 'link', content: 'jane.design/doctorcare123'},
                
    ],
    publishedAt: new Date('2022-08-03 10:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandez',
      role: 'CTO Rocketseat',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋 '},
      
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa 🚀 .'},
      
      {type: 'link', content: 'jane.design/doctorcare'},
                
    ],
    publishedAt: new Date('2022-08-01 12:30:00'),
  },
]

export function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>

          {posts.map(post => {
            return (

              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />

            )
          })}

        </main>

      </div>

    </div>
  )
}