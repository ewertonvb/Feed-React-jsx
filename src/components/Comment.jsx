import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment() {
  return (
  <div className={styles.comment}>
    <Avatar hasBorder={false} src="https://github.com/TheAlgy.png"/>

    <div className={styles.commentBox}>
      <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>The Algy</strong>
            <time title="07 de setembro às 00:10" dateTime="2022-09-07 00:10:30">
              Cerca de 1h atrás
            </time>
          </div>
          <button title="Deletar comentário">
            <Trash size={24} />
          </button>
        </header>

        <p>Muito bom Devon, parabéns!! 👏👏</p>
      </div>

      <footer>
        <button>
          <ThumbsUp />
          Aplaudir <span>03</span>
        </button>
      </footer>
    </div>
  </div>
  )
}