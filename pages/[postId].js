import getCMSStaticProps from '../lib/get-cms-static-props'
import withCMSPage from '../lib/with-cms-page'
import CMS from '../lib/cms'

import Header from '../components/header'
import Post from '../components/post'

import styles from '../styles/main.module.css'

const Page = withCMSPage(({ postId }) => {
  return (
    <div className={styles.container}>
      <Header/>
      <Post id={postId}/>
    </div>
  )
})

export default Page

export async function unstable_getStaticPaths() {
  const fetch = require('node-fetch')
  const WP_URL = process.env.WP_URL || 'https://demo.wp-api.org'

  const posts = await fetch(WP_URL + '/wp-json/wp/v2/posts?_fields=id').then(res => res.json())
  return posts.map(post => {
    return { params: { postId: String(post.id) } }
  })
}

export async function unstable_getStaticProps({ params }) {
  const props = await getCMSStaticProps(Page, { postId: params.postId })
  return { props, revalidate: 5 }
}
