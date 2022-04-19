import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from 'react'
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SingUpPage/SignUpPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import PostPage from "../pages/PostPage/PostPage";
import Header from "../components/Header/Header";

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <LoginPage/>
                    </Route>
                    <Route exact path="/cadastro">
                        <SignUpPage/>
                    </Route>
                    <Route exact path="/postagens">
                        <FeedPage/>
                    </Route>
                    <Route>
                        <PostPage/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router
