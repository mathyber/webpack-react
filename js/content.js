const React = require('react')
const ReactDOM = require('react-dom')
const ima = require(__dirname + '/../img/esc2020logo.png')

class Content extends React.Component {

    render() {
        return (
            <div>
                <div className='b'>
                    TUPO TEXT
                </div>
                <img src={ima} height="100px"/>
            </div>

        )
    }
}

module.exports = Content