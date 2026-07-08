import React, { useState } from 'react'
import "./Magazine.css"
import MagazineItem from '../../components/MagazinePage/MagazineItem/MagazineItem'
import LittleSearchBar from '../../components/LittleSearchBar/LittleSearchBar'
import data from '../../data'
import SortBar from '../../components/SortBar/SortBar'

export default function Magazine() {

  const [allMagazines, setAllMagazines] = useState(data.magazine)
  const [magazines, setMagazines] = useState(allMagazines)


  const clickSortHandler = (active) => {
    if (active === 'normal') {
      setMagazines(allMagazines)
    }

    else if (active === 'newest') {
      const newMagazines = [...allMagazines].reverse().slice(0, 6)
      setMagazines(newMagazines)
    }

    else if (active === 'oldest') {
      const newMagazines = allMagazines.slice(0, 6)
      setMagazines(newMagazines)
    }
  }

  return (
    <section style={{ backgroundColor: "var(--color-E2DFD5)" }}>
      <main style={{ width: "80%" }}>
        <div className='magazine-sub'>
          <div className='magazine-title'>
            <div></div>
            <span>وبلاگ</span>
          </div>
          <div className='magazine-count'>
            <span> {allMagazines.length} </span><span>مقاله</span>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-3 col-md-12'>
            <LittleSearchBar type="read" products={allMagazines} title="جستجو بین مقالات ..." />
          </div>
          <div className='col-lg-9 col-md-12'>
            <SortBar clickSortHandler={clickSortHandler} {...allMagazines} />

            <div className='magazine-item row'>
              {magazines.map(magazine => (
                <MagazineItem {...magazine} />
              ))}

            </div>
          </div>
        </div>
      </main>
    </section>
  )
}
