import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { filterPosts, OrderTypes } from '../../store/blog/actions'
import { Field, Form, Formik } from 'formik'
import SelectInput from '../../components/Form/SelectInput'
import { Alert, Button, FormGroup, Label, Input, Spinner } from 'reactstrap'
import { connect } from 'react-redux'
import debounce from 'lodash/debounce'

export const options = [
  { value: OrderTypes.DATE_ASC, label: 'Date - ascending' },
  { value: OrderTypes.DATE_DESC, label: 'Date - descending' },
  { value: OrderTypes.TITLE_ASC, label: 'Title - ascending' },
  { value: OrderTypes.TITLE_DESC, label: 'Title - descending' },
]

const FilterAndSort = props => {
  const [isLoading, setLoading] = useState(false)

  const testOnce = debounce(searchQuery => {
    props.filterPosts(searchQuery)
    setLoading(false)
  }, 500)
  const debounceFilter = ({ target: { value } }) => {
    setLoading(true)
    testOnce(value)
  }

  return (
    <div className="filter-sort-posts">
      <FormGroup>
        <Label>
          Search
          <Input
            data-cy="search-posts-input"
            name="email"
            onChange={debounceFilter}
            placeholder="search"
          />
        </Label>
        {isLoading && <Spinner color="info" />}
      </FormGroup>
      <Formik initialValues={{ orderBy: props.orderBy }} onSubmit={props.sortPosts}>
        {({ isSubmitting, errors }) => {
          return (
            <Form>
              <Field
                component={SelectInput}
                dataCy="orderby-picker"
                label="Order by"
                name="orderBy"
                options={options}
              />
              {errors.orderBy ? <Alert color="danger">{errors.orderBy}</Alert> : null}

              <Button
                block
                color="info"
                data-cy="select-order-button"
                disabled={isSubmitting}
                type="submit"
              >
                Sort
              </Button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}
FilterAndSort.propTypes = {
  sortPosts: PropTypes.func.isRequired,
  orderBy: PropTypes.string,
  filter: PropTypes.string,
}
const mapDispatchToProps = {
  filterPosts,
}
const mapStateToProps = ({ blog: { orderBy, filter } }) => ({ orderBy, filter })

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterAndSort)
