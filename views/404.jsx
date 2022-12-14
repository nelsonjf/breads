const React = require('react')
const Default = require('./layouts/Default')

function Error () {
    return (
        <Default>
            <h1>404: This page does not exist!</h1>
        </Default>
    )
}

module.exports = Error