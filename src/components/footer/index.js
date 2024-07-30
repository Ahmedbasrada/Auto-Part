import React from "react";
import Style from './../../assets/css/footer.module.css';
import logo from './../../assets/images/logo.png';

const Index = () => {
    return (
        <div className={Style.div}>
        <div className={Style.container}>
            <div className={Style.Eliments}>
                <h2>صفات أخرى</h2>
                <ul dir="rtl">
                    <li>من نحن</li>
                    <li>لماذا نحن</li>
                    <li>منتجاتنا</li>
                    <li>كلمة المدير</li>
                </ul>
            </div>

            <div className={Style.Eliments}>
                <h2>روابط خارجية</h2>
                <ul dir="rtl">
                    <li>من نحن</li>
                    <li>لماذا نحن</li>
                    <li>منتجاتنا</li>
                    <li>كلمة المدير</li>
                </ul>
            </div>
            <div className={Style.logoContiner}>
                <img className={Style.img} src={logo} alt="logo" />
                <ul dir="rtl">
                    <li>خيارك الأفضل لتسوق قطع الغيار</li>
                    </ul>
                </div>
        </div>
        <h3>جميع الحقوق محفوظة مؤسسة مكارم الشرق للمقاولات  &#174; 2024</h3>
        </div>
    );
}

export default Index;
