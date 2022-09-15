import { Component } from "react";
import './asset/css/Page3.css'
import Icon5 from './asset/css/img/icon5.png'
import Icon4 from './asset/css/img/icon4.png'
import Icon3 from './asset/css/img/icon3.png'
import Icon2 from './asset/css/img/icon2.png'
import Icon1 from './asset/css/img/icon1.png'


export default class Page3 extends Component{
    render(){


        return(
            <div className="row main-3 ">
                <h2 className=" d-flex justify-content-center ">بیمه سامان، انتخاب اول مسافران</h2>
                <div className="container color d-flex  ">
                    <div className="col-2  d-flex
                    flex-wrap justify-content-center align-content-center">
                        <img className="img-3 p-2" src={Icon5} alt="" />
                        <h3 className="col-12 d-flex justify-content-center pt-2">+ ۵۵,۰۰۰</h3>
                        <p>مراکز پزشکی طرف قرارداد در دنیا</p>
                    </div>
                    <div className="col-2  d-flex
                    flex-wrap justify-content-center align-content-center">
                        <img className="img-3 p-2" src={Icon4} alt="" />
                        <h3 className="col-12 d-flex justify-content-center pt-2">۲۴ ساعته</h3>
                        <p>خدمات وپشتیبانی</p>
                    </div>
                    <div className="col-2  d-flex
                    flex-wrap justify-content-center align-content-center">
                        <img className="img-3 p-2" src={Icon3} alt="" />
                        <h3 className="col-12 d-flex justify-content-center pt-2">+۶,۰۰۰,۰۰۰</h3>
                        <p>صدور بیمه مسافرتی</p>
                    </div>
                    <div className="col-3  d-flex
                    flex-wrap justify-content-center align-content-center">
                        <img className="img-3 p-2" src={Icon2} alt="" />
                        <h3 className="col-12 d-flex justify-content-center pt-2">تا ۷۰,۰۰۰ یورو</h3>
                        <p>بالاترین سقف پوشش بیمه مسافرتی</p>
                    </div>
                    <div className="col-3  d-flex
                    flex-wrap justify-content-center align-content-center">
                        <img className="img-3 p-2" src={Icon1} alt="" />
                        <h3 className="col-12 d-flex justify-content-center pt-2">پوشش جهانی</h3>
                        <p>پیگیری حادثه در هر کجای دنیا</p>
                    </div>
                </div>
            </div>
        )
    }
}