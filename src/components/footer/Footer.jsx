import React from 'react'
import Instagram from '../../assets/insta.png'
import Whatsapp from '../../assets/whatsapp.svg'
import Map from '../map/Map'

import s from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <div className={s.footer}>
        <div className={s.footer_left}>
          <div className={s.footer_contact}>Contact</div>
          <a className={s.footer_tel} href="tel:+499999999999">
            +49 999 999 99 99
          </a>
          <div className={s.footer_social}>
            <a href="#">
              <img src={Instagram} alt="social" />
              <span>Instagram</span>
            </a>
            <a href="#">
              <img src={Whatsapp} alt="social" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className={s.footer_right}>
          <div className={s.footer_address}>Address</div>
          <a
            className={s.footer_street}
            href="https://www.google.com/search?q=telranDE"
          >
            Linkstraße 2, 8 OG, 10785, <br /> Berlin, Deutschland
          </a>
          <div className={s.footer_hours}>
            <p>Working Hours:</p>
            <h3>24 hours a day</h3>
          </div>
        </div>
      </div>
      <Map />
    </>
  )
}
