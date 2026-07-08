import './CategoriesProduct.css'
import CategoriesProductItem from '../CategoriesProductItem/CategoriesProductItem'

export default function CategoriesProduct() {

    return (
        <section>
            <div className="categories-product">
                <div className="categories-nav">
                    <img src="img/icon-coffee.svg" className="icon-coffee" alt="ایکون قهوه" />
                    <h4>دسته بندی محصولات</h4>
                    <p>بهترین و با کیفیت ترین برندها، چون شما لایق بهترین ها هستید.</p>
                </div>
                <div className="categories-content">
                    <CategoriesProductItem img="img/دانه قهوه.svg" title="دانه قهوه" />
                    <CategoriesProductItem img='img/پودریجات.svg'title="پودریجات" />
                    <CategoriesProductItem img='img/دریپ بک.svg' title="دریپ بک" />
                    <CategoriesProductItem img='img/سیروپ.svg' title="سیروپ" />
                    <CategoriesProductItem img='img/اکسسوری.svg' title="اکسسوری" />
                </div>
            </div>
        </section>
    )
}
