import React from 'react';
import "./Message.scss";
import { Link, useParams } from 'react-router-dom';
import newRequest from '../../utils/newRequest';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const Message = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ['messages', id], // Include 'id' in the queryKey to make it dynamic
    queryFn: () => newRequest.get(`/messages/${id}`).then(res => res.data),
  });

  const mutation = useMutation({
    mutationFn: (message) => newRequest.post(`/messages/`, message),
    onSuccess: () => {
      queryClient.invalidateQueries(['messages', id]) // Invalidate the specific query for this 'id'
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault()

    const messageText = e.target[0].value;

    if (messageText.trim() !== '') {
      mutation.mutate({
        ConversationId: id,
        desc: messageText,
      });

      e.target[0].value = ''
    }
  }

  return (
    <div className='message'>
      <div className="container">
        <span className="breadcrumbs">
          <Link to='/messages'>Messages</Link>&gt; John Doe &gt;
        </span>
        { 
          isLoading ? ('Loading...') : error ? ('No messages yet!') :
          (<div className="messages">
            {data.map(m => (
              <div className="item" key={m._id}>
                <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <p>{m.desc}</p>
              </div>
            ))}
          </div>)
        }
        <hr />
        <form className="write" onSubmit={handleSubmit}>
          <textarea name="" placeholder='Type a message...' id="" cols="30" rows="10"></textarea>
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Message;
 