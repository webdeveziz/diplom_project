import React, { memo, useCallback, useState } from 'react'
import dwarf from '../../assets/dwarf.png'
import s from './Form.module.css'
import Button from '../button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getValueInputAction, inputAction } from '../../store/formReducer'

 function Form() {
  const inputValue = useSelector( (store)=> store.form.value )
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(inputAction)
  }

  const handleChange = (event) => {
    if (/[0-9]/.test(Number(event.target.value))) {
      dispatch(getValueInputAction(event.target.value))
    }
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
          <input type="tel" value={inputValue} onChange={handleChange} name='input' />
          <Button className={s.form_button} type="submit">
            Get a discount
          </Button>
        </form>
      </div>
    </div>
  )
}


export default memo(Form)