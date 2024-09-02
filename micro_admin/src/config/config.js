import axios from 'axios'
import useAuthStore from '../store/store'

export const host = '192.168.1.12'

export const api = axios.create({
    baseURL: `http://${host}`,
})
api.interceptors.request.use(config => {
    const token = sessionStorage.getItem('token')
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
})

api.interceptors.response.use(
    response => response, // axios 응답이 정상 응답일 때는 then으로 가도록 방치
    error => {
        switch (error.response.status) {
            case 401:
                sessionStorage.removeItem('token')
                useAuthStore.getState().logout() // const { logout } = useAuthStore의 방식 사용 불가능
                break
            default:
                break
        }
    }
)
