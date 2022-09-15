import { Component } from "react";
import './asset/css/Page5.css'
import Img1 from './asset/css/img/img1.jpg'
import Img2 from './asset/css/img/img2.jpg'
import Img3 from './asset/css/img/img3.jpg'
import Img4 from './asset/css/img/img4.jpg'




export default class Page5 extends Component{

    render(){

        return(
            <section className="container-fluid p-5  ">
                <h2 className="col-12  d-flex justify-content-center">هنگام وقوع خسارت، روی ما حساب کنید</h2>
                <p className="col-12  d-flex  justify-content-center">در زمان بروز خسارت چگونه عمل کنیم؟</p>
                <div className="row font ">
                    <div className="col-3 d-flex justify-content-center flex-wrap ">
                        <img  src={Img1} alt="" />
                        <h3 className="col-12 pt-3">خسارت شما پراداخت می شود</h3>
                        <p>پس از پیگیری، هزینه خسارت به حساب بیمه گزار یا ارگان مربوطه (دادگاه،بیمارستان یا غیره ( واریز می شود</p>
                    </div>
                    <div className="col-3 d-flex justify-content-center flex-wrap ">
                    <img src={Img2}  alt="" />
                        <h3 className="col-12 pt-3">در کنار شما هستیم</h3>
                        <p>در صورت نیاز، کارگزاری از طرف شرکت کمک‌رسان اعزام می‌شود</p>
                    </div>
                    <div className="col-3 d-flex justify-content-center flex-wrap ">
                    <img src={Img3}  alt="" />
                        <h3 className="col-12 pt-3">مشکل شما را پیگیری میکنیم</h3>
                        <p>شرکت کمک رسان اقدامات لازم را برای پیگیری حادثه را انجام میدهد</p>
                    </div>
                    <div className="col-3 d-flex justify-content-center flex-wrap ">
                    <img src={Img4}  alt="" />
                        <h3 className="col-12 pt-3">با ما تماس بگیرید</h3>
                        <p>با بیمه سامان تماس بگیرید و واقعه را شرح دهید</p>
                    </div>
                </div>
            </section>
        )
    }
}