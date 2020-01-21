import CMS from '../lib/cms'

import Comments from './comments'

import styles from '../styles/post.module.css'

export default function Post ({ id }) {
  return <CMS endpoint={`/wp-json/wp/v2/posts/${id}?_fields=id,title,date,content`}>{
    post => <div className={styles.post}>
      <h2>{post.title.rendered}</h2>
      <small>{post.date}</small>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      <br />
      <Comments id={post.id}/>
    </div>
  }</CMS>
}
