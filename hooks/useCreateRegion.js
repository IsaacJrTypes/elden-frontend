import { useMutation, useQueryClient } from '@tanstack/react-query';
import URL from '../envConfig';

const createRegion = async (newRegion) => {
    try {
        console.log("from create Region:",newRegion)
        const response = await fetch(`${URL}regions`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newRegion)
        });
        if (!response.ok) throw Error("Put region error from hook");
        return await response.json();
    } catch (err) {
        console.log('Create region err:', err);
        throw err;
    }
};

export const useCreateRegion = () => {
   const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createRegion, 
        onError: () => {console.log("creation fetch error")},
        onSuccess: () => {
            queryClient.invalidateQueries(['regions']);
        },
        
    });
};