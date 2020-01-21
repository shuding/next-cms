export default async (Page, extraProps) => {
  const WP_URL = process.env.WP_URL || 'https://demo.wp-api.org'
  const ReactDOMServer = require('react-dom/server')
  const fetch = require('node-fetch')

  const props = { __next_ssg_data: {}, ...extraProps }

  while (true) {
    global.__next_ssg_requests = []
    ReactDOMServer.renderToStaticMarkup(<Page  {...props} />)

    // all data dependencies resolved
    if (!global.__next_ssg_requests.length) break

    // dedupe requests
    const endpoints = Array.from(new Set(global.__next_ssg_requests))

    try {
      // fetch data and set the data, render again
      await Promise.all(endpoints.map((endpoint) => {
        return fetch(WP_URL + endpoint)
          .then(res => {
            if (!res.ok) {
              throw res.status
            }
            return res.json()
          })
          .then(data => {
            props.__next_ssg_data[endpoint] = data
          })
      }))
    } catch (err) {
      // errored when fetching data
      // return the error page
      return { __next_ssg_error: err }
    }
  }

  return props
}
