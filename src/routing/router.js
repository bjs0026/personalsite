/**
 * A component that chooses the correct router based on the build context.
 *
 * The short story is that this file will most likely not be needed
 * for your application and you'll simply use `BrowserRouter`.
 *
 * // app.js
 * import { BrowserRouter as Router } from "react-router-dom"
 *
 * The long story can be found in ./src/routing/README.md
 */

import React from "react"
import {BrowserRouter, HashRouter} from "react-router-dom"

const Router = props =>
    React.createElement(
        process.env.REACT_APP_HASH_ROUTING ? HashRouter : BrowserRouter,
        props
    )

export default Router