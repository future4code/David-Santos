import React from 'react';
import { Content } from './styles';
import useForm from '../../hooks/useForm';
import { TextField } from '@material-ui/core';
import { goToFeedPage, goToLogin } from '../../Routes/Coordinator';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../constants/url';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

const SignUpPage = () => {

    //useUnprotectedPage()
    
    const history = useHistory()

    const [form, onChange, clear] = useForm({ email: "", password: "", username: "" })

    const onSubtmitLogin = (event) => {
        event.preventDefault()

        axios.post(`${BASE_URL}/users/signup`, form)
            .then((res)=>{
                localStorage.getItem('token', res.data.token)
                clear()
                goToFeedPage(history)
            }).catch((err)=>{
                console.log(err)
            })
    }

    return (
        <Content>
            <form onSubmit={onSubtmitLogin}>
                <TextField
                    name={"username"}
                    value={form.username}
                    onChange={onChange}
                    label={"Nome"}
                    variant={"filled"}
                    fullWidth
                    margin={"normal"}
                    required
                />
                <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"Email"}
                    variant={"filled"}
                    margin={"normal"}
                    fullWidth
                    required
                />
                <TextField
                    type="password"
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    variant={"filled"}
                    fullWidth
                    margin={"normal"}
                    required
                />
                <button>cadastre-se</button>
            </form>
            <span>Já possui conta?</span>
            <button onClick={() => goToLogin(history)}>Entre</button>
        </Content>
    )
}

export default SignUpPage
