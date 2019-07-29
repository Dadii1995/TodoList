import React from 'react'
import { Switch, Route } from 'react-router-dom'
import List from './List'
import Details from './Todo/Details'

export const Todos = () => {
  return (
    <Switch>
      <Route component={Details} path="/todo/:id" />
      <Route component={List} exact path="/" />
    </Switch>
  )
}
export default Todos()
