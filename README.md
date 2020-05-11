# Next-CMS

[nextjs-wordpress.now.sh](https://nextjs-wordpress.now.sh)

Next-CMS is an example showing how you can do [Next.js SSG](https://github.com/zeit/next.js/issues/9524) using WordPress as the backend API.

- **Blazing Fast**: each page is built and pushed to the CDN edge
- **Always Available**: serves the cache even the API is down
- **Flexible**: you can switch to any CMS backend (e.g.: XML-RPC calls)

Similar to our **Next.js + Notion** example: [Notion based blog with Next.js](https://github.com/ijjk/notion-blog), this example has all the benefits of **Next.js SSG**, but also includes a new **CMS component** for data fetching:

## CMS Component

This snippet shows how to get data from a RESTful API:

```js
function Header () {
  return (
    <CMS endpoint="/wp-json">{
      data => <div>
        <h1>{data.name}</h1>
        <h2>{data.description}</h2>
      </div>
    }</CMS>
  )
}
```

And you can use or extend the [`<CMS/>` component](https://github.com/quietshu/next-cms/blob/master/lib/cms.js) to load data in the way you like. 

### Data Fetching Only Happens in Server Side

No client runtime. So you don't need to include an isomorphic fetch library anymore.  
The code above will generate the following markup directly:

```html
<div>
  <h1>Hello Next.js</h1>
  <h2>Another WordPress Site</h2>
</div>
```

### Automatically Generated `getStaticProps`

You can use `<CMS/>` anywhere deep down the component tree, or combine them.

The benefit is that you don't need to write your data fetching code inside `getStaticProps` (and pass the data via `props` to the child components).  
With `<CMS/>`, the data needed will be **analyzed and fetched** automatically, and in parallel. 

Here's an example:

```js
<div>
  <CMS endpoint="/wp-json">{
    blog => <h1>{blog.name}</h1>
  }</CMS>
  <CMS endpoint={"/wp-json/wp/v2/posts/" + id}>{
    post => <div>
      <h1>{post.title.rendered}</h1>
      <CMS endpoint={"/wp-json/wp/v2/users/" + post.author}>{
        author => <h2>By {author.name}</h2>
      }</CMS>
    </div>
  }</CMS>
</div>
```

Note that the CMS components will not cause waterfalls, and duplicate requests will be deduped.

## Deploy

Deploy this example with Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/shuding/next-cms)

...or deploy your own project via [vercel.com/import](https://vercel.com/import).

## Development

Install dependencies using `yarn` or `npm i`. Then run:

```bash
yarn dev
```

By default the demo uses [demo.wp-api.org](https://demo.wp-api.org) as the API. You can use your own WordPress site by providing an environment variable too:

```bash
WP_URL=https://my-wordpress-site.com yarn dev
```

## Authors

- Shu Ding ([@shuding_](https://twitter.com/shuding_)) – [Vercel](https://vercel.com)
- Guillermo Rauch ([@rauchg](https://twitter.com/rauchg)) – [Vercel](https://vercel.com)

Follow Vercel on [Twitter](https://twitter.com/vercel).

Released under the MIT license.

<br/>
<br/>

<a href="vercel.com" target="_blank">
  <img width="200" alt="Vercel, Inc" src="https://assets.vercel.com/image/upload/v1585434008/front/assets/design/vercel.svg" />
</a>
