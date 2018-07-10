import { SET_REVIEWS } from './types'

export const setReviews = () => {
    return async(dispatch) =>{
        const reviews = await getReviews()
        dispatch({
            type: SET_REVIEWS,
            payload: reviews
        })
    }
}

const getReviews = async () => {
    const data = await fetch('http://localhost:1235/proxy?url=https%3A%2F%2Fmaps.googleapis.com%2Fmaps%2Fapi%2Fplace%2Fdetails%2Fjson%3Fplaceid%3DChIJ-RYfc0xszoURCj1q6uzndmM%26key%3DAIzaSyCHpN7D1O9uaVqFQ5lZ5hw48n-r3YEjMO0')
    const response = await data.json()

    return response.result.reviews
}