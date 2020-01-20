import React from "react";
import ima from '../../img/esc2020logo.png'
import './Content.scss'

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

export default Content;