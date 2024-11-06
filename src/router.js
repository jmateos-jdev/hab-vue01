import { createMemoryHistory, createRouter } from "vue-router";

 import LoginPage from './pages/LoginPage.vue'
 import DashboardPage from "./pages/DashboardPage.vue";
 import HomePage from './pages/HomePage.vue'

 const routes = [
    {path:"/", name:"home", component: HomePage},
    {path:"/login", name:"login", component: LoginPage},
    {path:"/dashboard", name:"dashboard", component:DashboardPage}
 ]

 const router = createRouter({
    history: createMemoryHistory(),
    routes
 })

 export default router