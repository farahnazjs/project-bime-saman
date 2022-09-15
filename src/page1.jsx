import { Component } from "react";
import './asset/css/Page1.css'


export default class Page1 extends Component{
    render(){


        return(
            <section className="container-fluid d-flex sec-1 justify-content-end border">
                <div className="row d-flex  align-content-center mr-2">
                <h2 className="col-12 d-flex  justify-content-end">سفر را سامان لازم است</h2>
                <div className="col-12 d-flex justify-content-end"><span>بیمه مسافرتی سامان</span></div>
                <button className="col-4">خرید بیمه مسافرتی  &#x2708; </button>
                </div>
            </section>
        )
    }
}