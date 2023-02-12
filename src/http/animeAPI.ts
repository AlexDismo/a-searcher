import axios from "axios";

export const fetchAnimeBasic = async (page:number, limit:number)=>{
    const {data} = await axios.get(`https://api.jikan.moe/v4/anime`, {
    params:
        {
            page: page,
            limit:limit
    }
})
    return data.data
}
export const fetchAnimeSearch = async (input:string)=>{
    const {data} = await axios.get(`https://api.jikan.moe/v4/anime`, {
        params:
            {
                q:input
            }
    })
    return data.data
}
export const fetchAnimeById = async (id:string)=>{
    const {data} = await axios.get(`https://api.jikan.moe/v4/anime/${id}`)
    return data.data
}
export const fetchAnimeRandom=async()=>{
    const {data} = await axios.get('https://api.jikan.moe/v4/random/anime')
    return data.data
}
