import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { BASE_URL } from '../../constants/url';
import useProtectedPage from '../../hooks/useProtectedPage';
import {CardPost, UserName, TextArea, LikeArea, NewPost, Content, TextPostArea, TitlePost} from "./styles"; 
import useForm from '../../hooks/useForm';

const FeedPage = () => {
    useProtectedPage()
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/posts`, {
            headers: {
            Authorization: localStorage.getItem("token")
          }})
        .then((res) => {
            setPosts(res.data)
            console.log(posts)
        })
        .catch((err) =>{
            console.log(err)
        })
    }, [])

    const onSubmitPost = (event) => {
        event.preventDefault()

        axios.post(`${BASE_URL}/posts`, form, {
            headers: {
              Authorization: localStorage.getItem("token")
            }
          })
        .then((res)=>{
            clear()
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const [form, onChange, clear] = useForm({ title: "", body: "" })

    return (
        <Content>
            <NewPost onSubmit={onSubmitPost}>
                <TitlePost 
                placeholder='titulo'
                name={"title"}
                value={form.title}
                onChange={onChange}
                />
                <TextPostArea 
                placeholder='Conteudo'
                name={"body"}
                value={form.body}
                onChange={onChange}
                />
                <button>Postar</button>
            </NewPost>
            {posts.map(post => {
        return (<CardPost key={post.id}>TextPostArea
            <UserName>{post.username}</UserName>
            <TextArea>
            <h3>{post.title}</h3>
            <p>{post.body}</p>    
            </TextArea>
            <LikeArea/>
            </CardPost>)
      })}
        </Content>
    )
}

export default FeedPage
