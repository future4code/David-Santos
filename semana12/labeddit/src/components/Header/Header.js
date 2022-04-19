import React from 'react';
import { goToLogin, goToSignUp } from '../../Routes/Coordinator';
import { Logo, Nav, ToolBar } from './styles';
import { useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory()
    return (
        <div>
            <ToolBar>
                <Logo>Labeddit</Logo>
                <Nav>
                <button onClick={() => goToLogin(history)}>Login</button>
                <button onClick={() => goToSignUp(history)}>Cadastro</button>
                </Nav>
            </ToolBar>
        </div>
    )
}

export default Header
