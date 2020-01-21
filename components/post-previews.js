import Link from 'next/link'
import cn from 'classnames'

import CMS from '../lib/cms'

import styles from '../styles/post.module.css'

export default function PostPreviews() {
  return <CMS endpoint="/wp-json/wp/v2/posts?_fields=id,excerpt,title,date">{
    posts =>
      posts.map(p =>
        <div className={cn(styles.post, styles.excerpt)} key={p.id}>
          <h2><Link href="/[postId]" as={'/' + p.id}><a>{p.title.rendered}</a></Link></h2>
          <small>{p.date}</small>
          <div dangerouslySetInnerHTML={{ __html: p.excerpt.rendered }} />
        </div>
      )
  }</CMS>
}
