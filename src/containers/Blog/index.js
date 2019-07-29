import React from 'react'
import { Switch, Route } from 'react-router-dom'
import List from './List'
import ReadArticle from './ReadArticle'

const Blog = () => {
  return (
    <Switch>
      <Route component={ReadArticle} path="/blog/:id" />
      <Route component={List} path="/blog/" />
    </Switch>
  )
}
export default Blog
