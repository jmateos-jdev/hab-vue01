<script setup>
import { onBeforeMount } from 'vue'
import { checkTokenService } from '../services/user/checkToken.service'
import { useUserStore } from '../stores/user'
import { useNavigate } from '../hooks/navigateHook'

const { navigateTo } = useNavigate()
const userStore = useUserStore()

onBeforeMount(async () => {
    const token = localStorage.getItem('token')
    const tokenTime = localStorage.getItem('token_time')
    if (tokenTime) {
        const currentTime = Date.now()
        const tokenAge = currentTime - tokenTime
        if (tokenAge > (1000 * 60 * 1)) { //esperar 1 minuto
            localStorage.clear();
            navigateTo('/login')
        } else {
            if (token) {
                const data = await checkTokenService(token)
                if (data.statusCode !== 200) {
                    localStorage.clear();
                    navigateTo('/login')
                } else {
                    userStore.setName(data.data.name)
                    userStore.setLastname(data.data.lastname)
                    localStorage.setItem('token_time', Date.now())
                    localStorage.setItem('token', data.data.token)
                    navigateTo('/dashboard')
                }
            } else {
                localStorage.clear();
                navigateTo('/login')
            }
        }
    } else {
        localStorage.clear();
        navigateTo('/login')
    }
})

</script>