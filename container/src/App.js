import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import MarketingApp from "./components/MarketingApp"
import Header from "./components/Header"

export default () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" component={MarketingApp} />
            </Switch>
        </BrowserRouter>
    )
}
