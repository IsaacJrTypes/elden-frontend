import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import URL from '../envConfig';

const updateRegion = async ({ regionID, tasks }) => {
    
    const taskPayload = { tasks: tasks.map((obj) => ({ description: obj.description, complete: obj.complete }))}
    //console.log('Put hook payload:',JSON.stringify(taskPayload,null,2))
    try {
        const response = await fetch(`${URL}regions/${regionID}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(taskPayload)
        });
        if (!response.ok) {
            throw new Error('Update region error from hook');
        }
        return await response.json();
    } catch (err) {
        console.log('Update api err:', err);
        throw err;
    }
};

export const useUpdateRegion = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateRegion,
        onSuccess: () => {
            queryClient.invalidateQueries(['regions']);
        }
    });
};