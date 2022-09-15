import { Component } from "react";
import './asset/css/Page4.css'
import Pic4 from './asset/css/img/pic4.jpg'


export default class Page4 extends Component{
     render(){


        return(
            <section className="container-fluid  main-4">
                <div className="row">
                    <div className="col-6  d-flex flex-wrap color-4 justify-content-end">
                        <h2 className="d-flex justify-content-start ">ما به شما  <span >تعهد میدهیم</span></h2>
                        <ul className="d-flex flex-wrap ">
                            <li>جبران هزینه های فوریت های پزشکی و دندان پزشکی</li>
                            <li>پرداخت هزینه های ناشی از مفقودی چمدان</li>
                            <li>بیمه سرقت و حوادث منزل در طول سفر</li>
                            <li>جبران هزینه های ناشی از کنسلی رویداد های تجاری، ورزشی و آموزشی رزرو شده.</li>
                        </ul>
                        <button>اطلاعات بیشتر</button>
                    </div>
                    <div className="col-6 ">
                        <img src={Pic4} alt="" />
                    </div>
                </div>
                <section className="row main-5 ">
                    <h2 className="d-flex justify-content-center align-items-center">در هر نقطه دنیا که باشید در کنار شما هستیم</h2>
                    <p className="d-flex justify-content-center">در هر نقطه از دنیا شرکت کمک‌رسان (Mideast) اقدامات لازم را برای پیگیری حادثه شما را انجام می‌دهد</p>
                </section>
            </section>
        )
     }
}