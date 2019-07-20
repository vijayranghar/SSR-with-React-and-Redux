import React from 'react'
//import { Route } from 'react-router-dom'
import Homepage from './pages/HomePage'
import UsersListPage from './pages/UsersListPage'

export default [
  {
    ...Homepage,
    path: '/',
    exact: true,
  },
  {
    ...UsersListPage,
    path: '/users',
  }
]