import { createMemoryHistory, createRouter } from "vue-router";

 import LoginPage from './pages/LoginPage.vue'
 import DashboardPage from "./pages/DashboardPage.vue";
 import HomePage from './pages/HomePage.vue'

 const routes = [
    {path:"/", component: HomePage},
    {path:"/login", component: LoginPage},
    {path:"/dashboard",component:DashboardPage}
 ]

 const router = createRouter({
    history: createMemoryHistory(),
    routes
 })

 export default router