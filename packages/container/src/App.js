import React, { Suspense, lazy, useEffect, useState } from "react"
import { Router, Switch, Route, Redirect } from "react-router-dom"
import { createBrowserHistory } from "history"
import { createGenerateClassName, StylesProvider } from "@firoozej/styleguide"
import Header from "./components/Header"
const MarketingLazy = lazy(() => import("./components/MarketingApp"))
const AuthLazy = lazy(() => import("./components/AuthApp"))
//const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: "co",
})

const history = createBrowserHistory()

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false)

    useEffect(() => {
        if (isSignedIn) {
            history.push("/dashboard")
        }
    }, [isSignedIn])

    return (
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Header isSignedIn={isSignedIn} />
                <Suspense fallback="...loading">
                    <Switch>
                        <Route path="/auth">
                            <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                        </Route>
                        <Route path="/dashboard">
                            {!isSignedIn && <Redirect to="/" />}
                            <>hey dashboard!</>
                        </Route>
                        <Route path="/">
                            <MarketingLazy isSignedIn={isSignedIn} />
                        </Route>
                    </Switch>
                </Suspense>
            </Router>
        </StylesProvider>
    )
}
