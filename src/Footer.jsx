import { Component } from "react";
import './asset/css/Footer.css'
import Picfoot from './asset/css/img/headerLogo.png'


export default class Footer extends Component{


    render(){

        return(
            <section className="container-fluid page-6">
                <div className="row p-4">
                    <p className="col-10 p-4">ارائه خدمات بیمه‌ای متنوع و با کیفیت به اشخاص حقیقی و حقوقی در منطقه با رویکرد نوآورانه، ماموریت ما در راه رسیدن به آرمان و چشم انداز بیمه سامان است
                    </p>
                    <figure className="col-2">
                        <img src={Picfoot} alt="" />
                    </figure>
                </div>
                <div className="row right m-3 ">
                    <div className="col-4 ">
                        <h4>
لینک های مرتبط</h4>
                        <ul>
                            <li>استعلام بیمه‌نامه از بیمه مرکزی</li>
                            <li>استعلام و صدور آنلاین بیمه نامه شخص ثالث</li>
                            <li>مراکز درمانی طرف قرارداد درمانت</li>
                            <li>استعلام خسارت بیمه درمان</li>
                            <li>دریافت آنلاین معرفی‌نامه درمان</li>
                            <li>پرداخت آنلاین حق بیمه</li>
                        </ul>
                    </div>
                    <div className="col-4 ">
                    <h4>تماس با بیمه سامان</h4>
                        <ul>
                            <li>نمایندگان بیمه سامان</li>
                            <li>دریافت نمایندگی بیمه سامان</li>
                            <li>شعب و مراکز پرداخت خسارت</li>
                            <li>ثبت انتقادات و نارضایتی ها</li>
                            <li>آیین‌نامه گزارشگری و افشای اطلاعات</li>
                            <li>انجمن صنفی بیمه سامان</li>
                        </ul>
                    </div>
                    <div className="col-4 ">
                        <h4>تماس با بیمه سامان</h4>
                        <ul>
                            <li><span>آدرس</span>
تهران، خیابان سید جمال الدین اسد آبادی، </li>
                            <li><span>کد پستی</span>۱۴۳۴۹۳۳۵۷۴</li>
                            <li><span>تلفن</span>
٨٩۴٣-٠٢١</li>
                            <li><span>پست الکترونیک </span>farahnaz.esmaillzade@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className="row social">

                </div>
            </section>
        )
    }
}