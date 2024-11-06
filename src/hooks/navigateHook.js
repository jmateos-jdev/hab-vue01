import { useRouter } from 'vue-router'

export const useNavigate = () => {
    const router = useRouter()
    const navigateTo = (page) => {
        router.push(page)
    }
    return { navigateTo }
}
