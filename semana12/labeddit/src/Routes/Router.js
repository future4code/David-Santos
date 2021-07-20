import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import SignUpPage from "../pages/SingUpPage/SignUpPage";

const router = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route>
                        <LoginPage exact path="/"/>
                    </Route>
                    <Route>
                        <SignUpPage exact path="/cadastro"/>
                    </Route>
                    <Route>
                        <FeedPage exact path="/postagens"/>
                    </Route>
                    <Route>
                        <PostPage exact path="/postagens/:id"/>
                    </Route>
                    <Route>
                        <div>TÁ errado irmão</div>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default router
