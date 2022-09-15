import { Component } from "react";
import './asset/css/header.css'
import Logo from './asset/css/img/logo.jpg'
import Logo2 from './asset/css/img/profile.jpg'

export default class Header extends Component{
    
    render(){
        return(
            <header className="container-fluid ">
                <Menumob></Menumob>
               <div className="row">
               <div className="col-2 m-e d-none d-md-flex">
                <button>ورود به پورتال 
                    <img src={Logo2} alt="" />
                </button>
                <button >بیمه‌های من</button>
               </div>
                <div className="col-8  d-flex align-items-center justify-content-end">
                    <ul className="d-none d-md-flex menu justify-content-center  ">
                        <li>محصولات</li>
                        <li >شعب و نمایندگان</li>
                        <li >خدمات الکترونیکی
                            <ul className="menu-2">
                                <li>نمایندگان</li>
                                <li>لیست شعب</li>
                                <li>پورتال شعب و نمایندگان</li>
                            </ul>
                        </li>
                        <li >اخبار</li>
                        <li >سهامداران
                            <ul className="menu-2">
                                <li>مشاوره خرید بیمه نامه</li>
                                <li>ثبت انتقادات و نارضایتی </li>
                                <li>پرداخت آنلاین حق بیمه</li>
                                <li>بیمه کرونا</li>
                                <li>بیمه عمر</li>
                                <li>بیمه درمان</li>
                                <li>بیمه تجهیزات الکترونیک</li>
                                <li>بیمه مسافرتی</li>
                            </ul>
                        </li>
                        <li >گزارشگری و افشای اطلاعات
                            <ul className="menu-2">
                                <li>پرسش های متداول</li>
                                <li>قوانین و اصول بیمه ای</li>
                                <li>تعریف اصلاحات بیمه ای</li>
                                <li>نمایندگان بیمه سامان</li>
                                <li>لیست شعب بیمه سامان</li>
                                <li>تماس با مدیران بیمه سامان</li>
                            </ul>
                        </li>
                        <li>درباره ما</li>
                    </ul>
                </div>
                <figure className="col-2  d-flex justify-content-center">
                    <img src={Logo} alt="" />
                </figure>
               </div>
            </header>
        )
    }
}
class Menumob extends Component{
    constructor(){
        super()
        this.state={
            r:'-100%',
            flag: true
        }
    }
    Toggle= ()=>{
        if(this.state.flag){
            this.setState({r :0})
        }else{
            this.setState({r : '-100%'})
        }
        this.setState({flag : !this.state.flag})
    }
    render(){

        return(
         <>
         <span onClick={this.Toggle} className="ham d-md-none">|||</span>
            <ul style={{right: this.state.r}} className="menumob d-flex flex-wrap d-md-none">
               <li className="col-12 ">محصولات</li>
               <li className="col-12 " >شعب و نمایندگان</li>
               <li className="col-12">خدمات الکترونیکی</li>
               <li className="col-12">اخبار</li>
               <li className="col-12">سهامداران</li>
               <li  className="col-12">درباره ما</li>
            </ul>

         </>
        )
    }
}