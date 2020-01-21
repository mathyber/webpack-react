import React from "react";
import ReactDOM from "react-dom";
import '../../style/style.scss'
import Content from "../../component/Content";
import Header from "../../component/Header";
import Footer from "../../component/Footer";

ReactDOM.render(
    <div>
        <Header />
        <Content />
        <Footer />
    </div>,
    document.querySelector("body")
)