import styled from "styled-components";

export const Content = styled.div`
    width: 100%;
    height: 100%;
    background-color: bisque;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const NewPost = styled.form`
    width: 80%;
    background-color: red;
    height: 100px;
    display: flex;
    flex-direction: column;

    button{
        width: 100%;
    }
`

export const CardPost = styled.div`
    margin-top: 10px;
    width: 80%;
    background-color: red;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
`

export const UserName = styled.div`
    height: 20px;
    background-color: aqua;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    font-style: inherit;
`

export const TextArea = styled.div`
    height: 140px;
    background-color: yellow;
    border: 1px solid black;
    font-style: inherit;
`
export const TextPostArea = styled.textarea`
    height: 140px;
    background-color: yellow;
    border: 1px solid black;
    font-style: inherit;
`

export const TitlePost = styled.textarea`
    height: 40px;
    background-color: yellow;
    border: 1px solid black;
    font-style: inherit;
`

export const LikeArea = styled.div`
    height: 20px;
    background-color: pink;
    border: 1px solid black;
`