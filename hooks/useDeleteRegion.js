import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import URL from '../envConfig';

const deleteRegion = async(regionID) => {
    try{
        const response = await fetch(`${URL}regions/${regionID}`, {
            method: 'DELETE',
        })
        if(!response.ok){
            throw new Error('Delete region error from hook')
        }
        return await response.json()
    } catch (err) {
        console.log('Delete api err:', err);
        throw err;
    }
}

export const useDeleteRegion = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: deleteRegion,
        onSuccess: () => {
            queryClient.invalidateQueries(['regions'])
        }
    })
}