import { NextResponse } from 'next/server';
import axiosApis from '@/helpers/call-apis';

/**
 * Fetch active menu functions (Server Action)
 */
export async function GET() {
    try {
        const response = await axiosApis.get('/api/menu');
        return NextResponse.json(response.data);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.error();
    }
}
