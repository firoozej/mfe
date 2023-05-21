import React, { Suspense, lazy, useState } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "./components/Header"
const MarketingLazy = lazy(() => import("./components/MarketingApp"))
const AuthLazy = lazy(() => import("./components/AuthApp"))
//const DashboardLazy = lazy(() => import('./components/DashboardApp'));

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false)
    return (
        <BrowserRouter>
            <Header isSignedIn={isSignedIn} />
            <Suspense fallback="...loading">
                <Switch>
                    <Route path="/auth">
                        <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                    </Route>
                    <Route path="/">
                        <MarketingLazy isSignedIn={isSignedIn} />
                    </Route>
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}
