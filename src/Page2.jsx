import { Component } from "react";
import './asset/css/Page2.css'
import Pic2 from './asset/css/img/page2.jpg'

export default class Page2 extends Component{
    render(){


        return(
            <div className="row main align-items-center">
                <div className="col-6 d-flex flex-wrap justify-content-center ">
                    <h2 className="pt-5">سفر بــــــــــــــــی خطر</h2>
                    <p className="m-5 p-3">تصور کنید چمدان یا کیف پول خود را در فرودگاه مقصد گم کرده اید و نیاز به وسایل ضروری دارید، بدلیل بیماری و یا حادثه‌ای برای شما و یا همراه‌تان مجبور به بازگشت از سفر خود هستید و هزینه زیادی برای سفر خود کرده‌اید، در هنگام سفر از منزل شما سرقت می شود و یا خانه شما دچار آتش سوزی می شود. اینها تنهای تعداد معدودی از مخاطراتی هستند که ممکن است در سفرتان با آنها مواجه شوید. تفاوتی ندارد که شما یک سفر چند روزه و یا سفری بلند مدت در پیش دارید، بیمه مسافرتی سامان با آگاهی از تمامی نیازها و مشکلات احتمالی مسافران کاملترین بیمه نامه مسافرتی را با مناسب ترین هزینه در اختیار شما قرار می‌ دهد.</p>
                </div>
                <figure className="col-6  d-flex justify-content-center" >
                    <img src={Pic2}alt="" />
                </figure>
            </div>
        )
    }
}