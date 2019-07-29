import React from 'react'
import { getVisibleTodos } from '../utils'
import { VisibilityFilters } from '../../../store/todosFilter/actions'

describe('utils', () => {
  const todos = [
    { name: 'bla bla 1', isDone: true },
    { name: 'test', isDone: true },
    { name: 'lorem Ipsum', isDone: false },
    { name: 'Selleo', isDone: true },
    { name: 'Dawid', isDone: false },
  ]
  test('should return initial state todos', () => {
    const initialState = {
      todos,
      filter: { byName: '', byStatus: VisibilityFilters.SHOW_ALL },
    }
    expect(getVisibleTodos(initialState.todos, initialState.filter)).toStrictEqual(
      initialState.todos,
    )
  })
  test('should return done todos', () => {
    const initialState = {
      todos,
      filter: { byName: '', byStatus: VisibilityFilters.SHOW_COMPLETED },
    }
    expect(getVisibleTodos(initialState.todos, initialState.filter)).toHaveLength(3)
  })
  test('should return undone todos', () => {
    const initialState = {
      todos,
      filter: { byName: '', byStatus: VisibilityFilters.SHOW_ACTIVE },
    }
    expect(getVisibleTodos(initialState.todos, initialState.filter)).toHaveLength(2)
  })
  test('should return done todos', () => {
    const initialState = {
      todos,
      filter: { byName: '', byStatus: VisibilityFilters.SHOW_COMPLETED },
    }
    expect(getVisibleTodos(initialState.todos, initialState.filter)).toHaveLength(3)
  })
  test('should return todos with "a" in name', () => {
    const initialState = {
      todos,
      filter: { byName: 'a', byStatus: VisibilityFilters.SHOW_ALL },
    }
    expect(getVisibleTodos(initialState.todos, initialState.filter)).toHaveLength(2)
  })
  test('should return done todos with "a" in name', () => {
    const initialState = {
      todos,
      filter: { byName: 'a', byStatus: VisibilityFilters.SHOW_COMPLETED },
    }
    expect(getVisibleTodos(initialState.todos, initialState.filter)).toHaveLength(1)
  })
})
