import React, { useState } from 'react'
import './MagazineDesc.css'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { NavLink, useParams } from 'react-router-dom'
import { HiArrowCircleLeft } from "react-icons/hi";
import MagazineDescItem from '../../components/MagazineDescItem/MagazineDescItem'
import ProductContent from '../../components/ProductContent/ProductContent'
import data from '../../data';
import EndMagazineLink from '../../components/EndMagazineLink/EndMagazineLink';

export default function MagazineDesc() {

  const { magazineID } = useParams()
  const [magazines, setMagazines] = useState(data.magazine)
  const mainMagazine = magazines.find(magazine => magazine.link === magazineID)
  const [lastMagazine, setLastMagazine] = (useState([...magazines].reverse().slice(0, 4)))

  const { img, title, link, author, date, message, magazineDesc } = mainMagazine

  return (
    <>
      <section className='magazine-desc-section' style={{ marginTop: "1rem" }}>
        <div className='magazine-desc-row'>
          <div className='row'>
            <div className='col-lg-8 col-md-12'>
              <Breadcrumb
                links={[
                  { id: 1, title: "وبلاگ", to: '/magazine' },
                  { id: 2, title: `${title}`, to: `/magazine/${link}` }
                ]}
              />
              <div className='magazine-desc'>
                <img src={process.env.PUBLIC_URL + img} />
                <div className='magazine-d-body'>
                  <h3 className='magazine-d-title'>{title}</h3>
                  <p className='magazine-d-uptitle'>در این مطلب از سایت بلانکا  به {message} برای شما عزیزان خواهیم پرداخت.با ما در این مقاله همراه باشید.</p>
                  <p className='magazine-d-p'>{magazineDesc.para1}</p>
                  <p className='magazine-d-p'>{magazineDesc.morePara1}</p>
                  <p className='magazine-d-subtitle' >{magazineDesc.titr1}</p>
                  <p className='magazine-d-p'>{magazineDesc.para2}</p>
                  <img src={process.env.PUBLIC_URL + magazineDesc.image} style={{ borderRadius: '15px' }} />
                  <p className='magazine-d-subtitle' >{magazineDesc.titr2}</p>
                  <p className='magazine-d-p'>{magazineDesc.para3}</p>
                  <p className='magazine-d-subtitle' >{magazineDesc.titr3}</p>
                  <p className='magazine-d-p'>{magazineDesc.para4}</p>
                  <p className='magazine-d-subtitle'>{magazineDesc.titr4}</p>
                  <p className='magazine-d-p'>{magazineDesc.para5}</p>

                </div>
                <EndMagazineLink />
              </div>

            </div>

            <div className='col-lg-4 col-md-12'>
              <div className='last-magazine'>
                <div className='last-m-title' >آخرین مقالات منتشر شده</div>
                {lastMagazine.map(item => (
                  <MagazineDescItem key={item.link} {...item} />
                ))}

                <div className='link-magazine'>
                  <NavLink to="/magazine">مشاهده وبلاگ ها <HiArrowCircleLeft style={{ fontSize: "20px" }} /></NavLink>
                </div>
              </div>
              <div className='suggestion-product'>
                <ProductContent img={process.env.PUBLIC_URL + "/img/اسپرسو ویتالی.png"} />
                <ProductContent img={process.env.PUBLIC_URL + "/img/اسپرسو جیورنو.png"} />
                <ProductContent img={process.env.PUBLIC_URL + "/img/اسپرسو لیدی.png"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
