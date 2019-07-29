import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import ThemeSelector from './ThemeSelector'
import Button from 'reactstrap/es/Button'
import { ThemeContext } from '../../contexts/Theme'

const Details = ({ profile }) => {
  const theme = useContext(ThemeContext)
  const age = profile.birthday
    ? Math.floor((Date.now() - Date.parse(profile.birthday)) / 31557600000)
    : undefined
  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      theme.setTheme(values.theme)
      setSubmitting(false)
    }, 500)
  }
  return (
    <React.Fragment>
      <Row className="justify-content-center mt-3">
        <Col md="6" xs="12">
          <div className="profile">
            <img
              alt="profile"
              className="rounded-circle img-fluid"
              src={
                profile.url ||
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc9VCf49a2QF71f1yK5qNkH4yEdU02IJpErZdnx3BnfO6q5dWk'
              }
            />
            <h1>Name: {profile.firstName}</h1>
            {age && <h2>Age: {age}</h2>}
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            onClick={() => {
              theme.toggleTheme()
            }}
          >
            Toggle theme
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <ThemeSelector onSubmit={onSubmit} />
        </Col>
      </Row>
    </React.Fragment>
  )
}
Details.propTypes = {
  profile: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    url: PropTypes.string,
    password: PropTypes.string,
  }),
}
const mapStateToProps = ({ profile }) => ({
  profile: profile,
})
export default connect(
  mapStateToProps,
  null,
)(Details)
