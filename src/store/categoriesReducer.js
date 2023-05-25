const defaultState = {
  categories: [],
  loading: false,
}

const GET_CATEGORIES = 'GET_CATEGORIES'

export const categoriesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      }

    default:
      return state
  }
}

// Action creators
export const getCategoriesAction = (payload) => ({
  type: GET_CATEGORIES,
  payload,
})

// export const getCategoriesAction2 = () => (dispatch) => {
//   // dispatch(true)

//   fetch('http://localhost:3333/categories/all')
//     .then((res) => res.json())
//     .then(
//       (data) =>
//         dispatch({
//           type: GET_CATEGORIES,
//           payload: data,
//         }),

//       // dispatch(false),
//     )
// }
