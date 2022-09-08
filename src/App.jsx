import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Ewerton Vasconcelos"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quaerat eveniet iure, eos qui recusandae. Nulla magnam cum repellendus officia. Maiores porro aliquid magnam accusantium explicabo illo rerum natus suscipit!"
          />

          <Post author="Eduardo Barbosa" content="eae carai kkkkkkk" />
        </main>
      </div>
    </div>
  )
}
