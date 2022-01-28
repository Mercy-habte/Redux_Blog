import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import first from '../imgs/first.jpeg'

import { connect } from 'react-redux'

class Home extends Component {
  render(){
    const { posts } = this.props
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div class ='flex border-r-2 font-Asap pt-6 border-b-2 min-w-sm rounded overflow-hidden shadow-lg px-10 py-10 mb-3 pr-10 jusutify-evenly ml-20' key={post.id}>
            <img class="w-full" src={first} alt="a man"/>
            <div className="px-6 py-4">
              <Link to={'/' + post.id}>
                <span class='text-xl text-primary'>{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
        
          </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container home">
          <h4 class="text-primary font-bold text-3xl min-w-sm  text-center mt-5">Blogs</h4>
          {postList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)