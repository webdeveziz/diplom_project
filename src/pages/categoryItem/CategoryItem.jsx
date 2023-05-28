import { Link } from 'react-router-dom'
import s from '../categories/Categories.module.css'
import { base_url, fetchProductList } from '../../requests/requests'
import { useDispatch } from 'react-redux'

const CategoryItem = ({ id, image, title }) => {
  const dispatch = useDispatch()

  return (
    <Link className={s.category} to={id.toString()}>
      <div
        className={s.categoryImg}
        onClick={() => {
          dispatch(
            fetchProductList(
              base_url +
                '/categories/' +
                (isFinite(id) ? id.toString() : 'all'),
            ),
          )
        }}
      >
        <img src={image.includes('https') ? image : base_url + image} />
      </div>
      <p>{title}</p>
    </Link>
  )
}

export default CategoryItem
