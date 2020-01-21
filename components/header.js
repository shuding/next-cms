import Head from 'next/head'
import Link from 'next/link'

import CMS from '../lib/cms'
import styles from '../styles/main.module.css'

export default function Header () {
  return <CMS endpoint="/wp-json?_fields=name,description">{({ name, description }) =>
    <div className={styles.header}>
      <h1><Link href="/"><a>{name}</a></Link></h1>
      <a href="https://github.com/quietshu/next-cms" target="_blank" className={styles.tip}>What is this?</a>
      <i>{description}</i>
      <Head><title>{name}</title></Head>
    </div>
  }</CMS>
}
