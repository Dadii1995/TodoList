import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ChangePassword from './ChangePassword'

import Details from './Details'
import { Container } from 'reactstrap'
import Edit from './Edit'

const Profile = () => {
  return (
    <Container>
      <Switch>
        <Route component={Edit} path="/profile/edit" />
        <Route component={ChangePassword} path="/profile/changepassword" />
        <Route component={Details} path="/profile" />
      </Switch>
    </Container>
  )
}

export default Profile
