import styled from "styled-components";

export const ToolBar = styled.header`
    width: 100%;
    height: 50px;
    display: flex;
`

export const Logo = styled.div`
    width: 65%;
    height: 50px;
    font-size: 40px;
    font-style: Arial, Helvetica, sans-serif;
    display: flex;
`

export const Nav = styled.div`
    width: 35%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    button{
        width: 100px;
        height: 35px;
        margin-left: 5px;
        border-radius: 30px;
        background-color: white;
        border-color: #0079D3;
        color: #0079D3;
    }
`
