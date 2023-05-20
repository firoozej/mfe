import React, { Suspense, lazy } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "./components/Header"
const MarketingLazy = lazy(() => import("./components/MarketingApp"))
const AuthLazy = lazy(() => import("./components/AuthApp"))
//const DashboardLazy = lazy(() => import('./components/DashboardApp'));

export default () => {
    return (
        <BrowserRouter>
            <Header />
            <Suspense fallback="...loading">
                <Switch>
                    <Route path="/auth" component={AuthLazy} />
                    <Route path="/" component={MarketingLazy} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}
