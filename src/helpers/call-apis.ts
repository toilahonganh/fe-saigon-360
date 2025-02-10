import axios from 'axios';
import { env } from '@/env.mjs';

const axiosApis = axios.create({
    baseURL: env.NEXT_PUBLIC_BACKEND_DOMAIN,
    headers: {
        'Content-Type': 'application/json',
    },
});
export default axiosApis;
