import React, { useEffect, useState } from 'react';
import Hero from '../../main/Hero';


const CustomPost = ({post, source_url}) => {
  

    return (
      <React.Fragment>
          <Hero
            title={post.title.rendered}
            source_url={source_url}
          />
      </React.Fragment>  
    )
    
}

export default CustomPost;