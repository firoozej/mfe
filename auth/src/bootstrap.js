import React from "react"
import ReactDOM from "react-dom"
import { createMemoryHistory, createBrowserHistory } from "history"
import App from "./App"

const mount = (el, { onNavigate, defaultHistory, initialPath } = {}) => {
    const history =
        defaultHistory ||
        createMemoryHistory({
            initialEntries: [initialPath],
        })

    if (onNavigate) {
        /**
         * whenever memoryHistory changes history.listen calls the callback (onNavigate)
         * as a result container will notice the navigation occured
         */
        history.listen(onNavigate)
    }

    ReactDOM.render(<App history={history} />, el)

    return {
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname } = history.location

            if (pathname !== nextPathname) {
                history.push(nextPathname)
            }
        },
    }
}

/**
 * if this mfe is running in isolation (without container)
 */
if (process.env.NODE_ENV === "development") {
    const devRoot = document.querySelector("#_auth-dev-root")

    if (devRoot) {
        /**
         * if mfe is running in isolation(without container), then use browser history
         */
        mount(devRoot, { defaultHistory: createBrowserHistory() })
    }
}

export { mount }
