import { SETUP_DATA } from './types'
import { getFullMenu } from '../helpers'

export const setupData = () => {
    return async(dispatch) =>{
        const data = await getFullMenu()
        const categories = Object.keys(data)
        dispatch({
            type: SETUP_DATA,
            payload:{
                categories,
                data
            }
        })
    }
}
