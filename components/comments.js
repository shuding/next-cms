import CMS from '../lib/cms'

import styles from '../styles/post.module.css'

export default function Comments ({ id }) {
  return <>
    <h3>Comments</h3>
    <CMS endpoint={"/wp-json/wp/v2/comments?post=" + id}>{comments =>
      comments.length ? comments.map(comment =>
        <div key={comment.id} className={styles.comment}>
          <img src={comment.author_avatar_urls['48']} />
          <div>
            <h4>{comment.author_name}</h4>
            <small>{comment.date}</small>
            <div dangerouslySetInnerHTML={{ __html: comment.content.rendered }} />
          </div>
        </div>
      ) : <small>No comments.</small>
    }</CMS>
  </>
}
