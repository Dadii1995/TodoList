import React from 'react'
import EditForm from './EditForm'
import { editProfile } from '../../../store/profile/actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Edit = props => {
  const saveProfile = (values, { setSubmitting }) => {
    setTimeout(() => {
      props.editProfile(values)
      props.history.push('/profile')
      setSubmitting(false)
    }, 500)
  }
  return <EditForm saveProfile={saveProfile} />
}
const mapDispatchToProps = {
  editProfile,
}

Edit.propTypes = {
  editProfile: PropTypes.func,
  history: PropTypes.object,
}

export default connect(
  undefined,
  mapDispatchToProps,
)(Edit)
