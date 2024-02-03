import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import React from "react"
import { Link, useParams } from "react-router-dom"
import newRequest from "../../utils/newRequest.js"
import "./Message.scss"

const Message = () => {
  const { id } = useParams();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient()

  const { isLoading, error, data } = useQuery(["messages", id], () =>
    newRequest.get(`/messages/${id}`)
    .then((res) => res.data)
  )

  const mutation = useMutation((message) =>
    newRequest.post(`/messages`, message),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["messages", id])
      },
    }
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
    })
    e.target[0].value = ""
  }

  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">Messages</Link> &gt; {currentUser.username} &gt;
        </span>
        {isLoading ? (
          "loading messages..."
        ) : error ? (
          "error"
        ) : (
          <div className="messages">
            {data.map((m) => (
              <div className={m.userId === currentUser._id ? "owner item" : "item"} key={m._id}>
                <img
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        )}
        <hr />
        <form className="write" onSubmit={handleSubmit}>
          <textarea type="text" placeholder="write a message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Message