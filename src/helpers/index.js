export const getStarsFromRating = (rating) =>{
    let arr = []
    for(let i = 0; i < rating; i++){
        arr.push(i)
    }
    return arr
}