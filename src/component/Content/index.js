import React from "react";
import ima from '../../img/esc2020logo.png'

class Index extends React.Component {

    render() {
        return (
            <div>
                <div className='text'>
                    Подключен шрифт из файла, стили из .scss и изображение
                </div>

                <img className='img' src={ima}/>
            </div>

        )
    }
}

export default Index;