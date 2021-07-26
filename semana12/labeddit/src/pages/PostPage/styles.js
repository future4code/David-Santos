import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 60px;
    background-color: green;
`

export const NewPost = styled.div`
    width: 300px;
    background-color: red;
    height: 100px;
    display: flex;
    flex-direction: column;

    button{
        width: 100%;
    }
`

export const CardPost = styled.div`
    width: 300px;
    background-color: red;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
`

export const UserName = styled.div`
    width: 300px;
    height: 20px;
    background-color: aqua;
    border: 1px solid black;
    align-items: center;
`

export const TextArea = styled.div`
    width: 300px;
    height: 140px;
    background-color: yellow;
    border: 1px solid black;
`

export const AreaDeBaixo = styled.div`
    width: 300px;
    height: 20px;
    background-color: pink;
    border: 1px solid black;
`