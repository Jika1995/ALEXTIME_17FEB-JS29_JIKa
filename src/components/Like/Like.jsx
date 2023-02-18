import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { postsContext } from '../../PostContext';

const Like = ({item}) => {

  const { putLikedPost, getPosts } = useContext(postsContext);

  useEffect(() => {
    getPosts();
  }, []);

  const [like, setLike] = useState({liked: item.isLike});

function changeIsLike (e) {

    e.preventDefault();
    item.isLike = !item.isLike;
    putLikedPost(item.id, item.isLike);
    like.liked = item.isLike;
    
  };

  return item ? (
    <>
      <a href='#' className="mx-2" style={{textDecoration: 'none'}} onClick={ changeIsLike}>
      {like.liked ? '❤️' : '🤍'}
      </a>
    </>
  ) : (<h1>Loading</h1>)
};

export default Like