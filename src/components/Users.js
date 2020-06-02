import React, { Component } from 'react';
import { connect } from 'react-redux'; 

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.userCount} Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {this.props.users.map((user, index) => <li key={index}>{user.username}</li>)}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

// add mapStateToProps here
// each key in the returned object will become a prop in your component
const mapStateToProps = (state) => {
  return {
    users: state.users, 
    userCount: state.users.length 
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
