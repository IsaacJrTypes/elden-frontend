import { useQuery } from '@tanstack/react-query';
import URL from '../envConfig'

const getAllRegions = async() => {
    try {
        const response = await fetch(`${URL}regions`)
        if (!response.ok) {
            throw new Error("Fetch region issues from hook")
        }
        return response.json()
    } catch(err) {
        console.log('Get all regions err:',err)
        throw err
    }
}

export const useRegions = () => {
    return useQuery({
        queryKey:['regions'],
        queryFn: getAllRegions
    })
}