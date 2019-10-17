import React, { Component } from 'react'
import Post from './Post'
import { Consumer } from '../context'
import AddPost from './AddPost'

class Posts extends Component {

  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div>{value.posts.map(post =>
              <Post message={post.message} id={post.id} key={post.id} />
            )}
            <AddPost />
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Posts
