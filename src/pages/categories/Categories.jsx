import s from './Categories.module.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategoriesList } from '../../requests/requests'
import CategoryItem from '../categoryItem/CategoryItem'
import { uniqueId } from 'lodash'

const Categories = () => {
  const categories = useSelector((store) => store.categories.categories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoriesList())
  }, [])

  for (let i = 0; i < 3; i++) {
    const item = {
      title: 'Title',
      id: uniqueId('id__'),
      image: 'https://placehold.co/320x240',
    }
    categories.push(item)
  }

  return (
    <div className={s.categories}>
      <h2 className={s.categoryTitle}>Categories</h2>
      <div className={s.categoryContent}>
        {categories.map((item) => (
          <CategoryItem
            id={item.id}
            key={item.id}
            image={item.image}
            title={item.title}
          />
        ))}
      </div>
    </div>
  )
}

export default Categories
