import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter(post =>
          post.id !== action.payload)
      }
    case 'ADD_POST':
      return {
        ...state,
        posts: [action.payload,
        ...state.posts]
      }
    case 'UPDATE_POST':
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload.id ? (post = action.payload) : post
        )
      }
    default:
      return state;
  }
}

export class Provider extends Component {

  componentDidMount() {
    var url = 'http://localhost:2000/api/v1/posts/';

    if (process.env.REACT_APP_ACE === 'production') {
      url = 'https://hidden-ocean-16005.herokuapp.com/api/v1/posts/'
    }

    fetch(url, {
      method: 'GET',
    }
    ).then(response => response.json()
    ).then(data => {
      console.log("-------")
      console.log(data)
      this.setState({ posts: data })
    })
  }

  //State
  state = {
    posts: [
    ],
    //Methods

    dispatch: action => this.setState(state => reducer(state, action))
  }

  //Ho you have access to the methods
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;