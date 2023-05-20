import React, { useRef, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { mount } from "auth/AuthApp"

export default () => {
    const ref = useRef(null)
    const history = useHistory()

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            /**
             * onNavigate will be called whenever the marketing memory history changes
             */
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location

                if (pathname !== nextPathname) {
                    history.push(nextPathname)
                }
            },
        })
        /**
         * onParentNavigate will be called whenever the container browser history changes
         */
        history.listen(onParentNavigate)
    }, [])

    return <div ref={ref} />
}
