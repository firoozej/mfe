import React from 'react'
import ReactDOM from 'react-dom'

const mount = (el) => {
    ReactDOM.render(<div>auth</div>, el)
}

if(process.env.NODE_ENV === 'development') {
    mount(document.querySelector('#_auth-dev-root'))
}

export { mount }