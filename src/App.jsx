import React from "react";
import { Component } from "react";

import Header from "./header";
import Page1 from "./page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Footer from "./Footer";

export default class Main extends Component{
    render(){
        return(
            <main>
                <Header></Header>
                <Page1></Page1>
                <Page2></Page2>
                <Page3></Page3>
                <Page4></Page4>
                <Page5></Page5>
                <Footer></Footer>
            </main>
        )
    }
}