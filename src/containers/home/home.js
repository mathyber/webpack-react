import React from "react";
import ReactDOM from "react-dom";
import '../../style/style.scss'
import Content from "../../component/Content";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
// import { createStore } from 'redux'
//
// const initialState = {
//     name: "Alexander",
//     secondName: "Kontularin"
// };
//
// function reducer(state = initialState, action) {
//     switch (action.type) {
//         case "CHANGE_NAME":
//             return { ...state, name: action.payload };
//         case "CHANGE_SECOND_NAME":
//             return { ...state, secondName: action.payload };
//     }
//
//     return state;
// }
//
// const store = createStore(reducer);
//
// console.log(store.getState());
//
// const changeName = {
//     type: "CHANGE_NAME",
//     payload: "Georgi"
// };
//
// const changeSecondName = {
//     type: "CHANGE_SECOND_NAME",
//     payload: "Tapocki"
// };
// store.dispatch(changeName)
//
// console.log(store.getState());
//
// store.dispatch(changeSecondName)
// console.log(store.getState());

ReactDOM.render(
    <div>
        <Header />
        <Content />
        <Footer />
    </div>,
    document.querySelector("body")
)