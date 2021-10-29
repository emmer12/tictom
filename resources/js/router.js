import Dashboard from './modules/member/index'
import Profile from './modules/member/pages/profile'
import ProfilePassword from './modules/member/pages/change-password'


 const routes = [
    {
        path: '/',
        component: Dashboard, 
        name: 'dashboard'
    }, 
    {
        path: '/profile',
        component: Profile, 
        name: 'profile'
    }, 
    {
        path: '/profile/password',
        component:ProfilePassword, 
        name: 'profile-password'
    },
]


// const router = createRouter({ history: createWebHistory(), routes })
export default routes