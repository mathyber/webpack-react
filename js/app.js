const React = require('react')
const ReactDOM = require ('react-dom')
const Content = require('./content.js')
const st = require(__dirname + '/../style/style.scss')

ReactDOM.render(
    <Content />,
    document.querySelector("#root")
)