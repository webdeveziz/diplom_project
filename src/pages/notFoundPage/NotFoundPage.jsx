import React from 'react'
import notFoundImg from '../../assets/notfound.png'

import s from './NotFoundPage.module.css'

export default function NotFoundPage() {
  return (
    <div className={s.notFound}>
      <img src={notFoundImg} />
    </div>
  )
}
