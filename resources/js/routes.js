import Login from './components/LoginComponent.vue';
import AdminDashboard from './components/AdminDashboardComponent.vue';
import UserDashboardComponent from './components/UserDashboardComponent.vue';

export const routes = [
    {
        path: '/',
        component: Login
        
    },
    {
        path: '/admin/dashboard',
        component: AdminDashboard

    },
    {
        path: '/dashboard',
        component: UserDashboardComponent

    }

    
     
   
];