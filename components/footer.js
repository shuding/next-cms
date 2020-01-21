import styles from '../styles/main.module.css'

export default function Footer () {
  return <footer className={styles.footer}>
    <a href="https://zeit.co" target="_blank" rel="noopener noreferrer" aria-label="Made by ZEIT">
      <svg xmlns="http://www.w3.org/2000/svg" width="230" height="24" viewBox="0 0 230 46">
        <defs>
          <linearGradient id="a" x1="114.721%" x2="39.54%" y1="181.283%" y2="100%">
            <stop offset="0%" stopColor="#FFF"/>
            <stop offset="100%"/>
          </linearGradient>
        </defs>
        <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" transform="translate(-235 -177) translate(235 177)">
          <path fill="url(#a)" d="M25.49162 0L50.98324 45.226415 0 45.226415z"/>
          <path fill="#333" d="M85.75 34h20.45v-3.55H90.85l15.1-21.55V5.8H86v3.55h14.85L85.75 30.9V34zm41.85 0h18.35v-3.55h-14.2V21.4h12.35v-3.55h-12.35v-8.5h14.2V5.8H127.6V34zm40.45 0h17.9v-3.55h-6.85V9.35h6.85V5.8h-17.9v3.55h6.9v21.1h-6.9V34zm47.35 0h4.15V9.35h9.6V5.8H205.9v3.55h9.5V34z"/>
        </g>
      </svg>
    </a>
  </footer>
}
