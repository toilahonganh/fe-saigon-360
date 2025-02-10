'use server';
import axiosFe from '@/helpers/call-fe';

export async function fetchMenuFunctionData() {
    try {
        const response = await axiosFe.get('/api/menu-function');

        const data = response.data;
        return data;
    } catch (error) {
        return error;
    }
}
