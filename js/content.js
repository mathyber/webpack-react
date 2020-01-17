const React = require('react')
const ReactDOM = require('react-dom')
const ima = require(__dirname + '/../img/esc2020logo.png').default

class Content extends React.Component {

    render() {
        return (
            <div>
                <div className='title'>
                    Демонстрационная страница
                </div>

                <div className='text'>
                    Подключен шрифт из файла, стили из .scss и изображение
                </div>

                <img className='img' src={ima}/>
            </div>

        )
    }
}

module.exports = Content