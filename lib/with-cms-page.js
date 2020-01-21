import { useContext, createContext } from 'react'

export const CMSContext = createContext({})

export default Component => props => {
  if (props.__next_ssg_error) {
    // render error page
    return <h1>{props.__next_ssg_error} Error</h1>
  }

  return <CMSContext.Provider value={props.__next_ssg_data || {}}>
    <Component {...props} />
  </CMSContext.Provider>
}
