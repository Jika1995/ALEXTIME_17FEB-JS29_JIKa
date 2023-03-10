import React from 'react';
import {Card} from 'react-bootstrap';
import { useContext, useEffect } from 'react';
import { postsContext } from '../../PostContext';
import { useParams } from 'react-router-dom';

const Details = () => {

  const {onePost, getOnePost} = useContext(postsContext);
  const { id } = useParams();

  useEffect(() => {
    getOnePost(id)
  }, []) //при загрузке в начале - при рождении компонента

  return (
    <div>
      <h1>Details about this post</h1>
      {onePost ? (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={onePost.image} />
        <Card.Body>
          <Card.Title>{onePost.author}</Card.Title>
          <Card.Text>
            {onePost.id}
          </Card.Text>
          <Card.Text>
            {onePost.content}
          </Card.Text>
        </Card.Body>
      </Card>
      ) : (
        <h1>Loading...</h1>
      )
      }
    </div>
  )
}

export default Details