import { Link } from 'react-router-dom'
import s from '../categories/Categories.module.css'

const base_url = 'http://localhost:3333'

const CategoryItem = ({ id, image, title }) => {
  return (
    <Link className={s.category} to={id.toString()}>
      <div className={s.categoryImg}>
        <img src={image.includes('https') ? image : base_url + image} />
      </div>
      <p>{title}</p>
    </Link>
  )
}

export default CategoryItem
