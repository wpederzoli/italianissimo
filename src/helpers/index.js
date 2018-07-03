import React from 'react'
import { Star } from '@material-ui/icons'

export const getStarsFromRating = (rating) =>{
    let arr = []
    for(let i = 0; i < rating; i++){
        arr.push(i)
    }
    console.log(arr)
    return arr
}