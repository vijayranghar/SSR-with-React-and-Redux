import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'

class UserList extends Component { 
  componentDidMount() {
    this.props.fetchUsers()
  }
  renderUsers() {
    return this.props.users.map((user, index) => {
      return <li key={index}>{user.name}</li>
    })
  }
  render() {
    return (
      <div>
        A list of users
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users
})

export function loadData(store) {
  return store.dispatch(fetchUsers())
}

export default {
  component: connect(mapStateToProps, { fetchUsers })(UserList),
  loadData,
} 