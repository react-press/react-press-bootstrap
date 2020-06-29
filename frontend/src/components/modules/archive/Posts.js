import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

class Posts extends React.Component {

  constructor(props){
    super(props);
    
  }

  render() { 
    const { posts, isLoaded, imgUrl, author } = this.props

    if(isLoaded) {
      return (
            <div>
              { posts.map(post => (
                
                <Post key={post.id} 
                      post={post} 
                      imgUrl={imgUrl} 
                      author={author} />
              )) }
            </div>
        )
      }
      return <h3>Loading...</h3>
  }
}

export default Posts;
