import React, { useState } from 'react'
import dwarf from '../../assets/dwarf.png'
import s from './Form.module.css'
import Button from '../button/Button'

export default function Form() {
  const [inputValue, setInputValue] = useState('+49')

  const handleSubmit = (event) => {
    event.preventDefault()
    // Do something with the submitted value
    console.log('Submitted value:', event)
  }

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <div className={s.form}>
      <div className={s.dwarf}>
        <img src={dwarf} alt="dwarf" />
      </div>
      <div className={s.form_input}>
        <h1>5% off</h1>
        <h2>on the first order</h2>

        <form onSubmit={handleSubmit}>
          <input type="tel" value={inputValue} onChange={handleChange} />
          <Button className={s.form_button} type="submit">
            Get a discount
          </Button>
        </form>
      </div>
    </div>
  )
}
