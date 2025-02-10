import axios from 'axios';
import { env } from '@/env.mjs';

const axiosFe = axios.create({
    baseURL: env.NEXT_PUBLIC_APP_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
export default axiosFe;
