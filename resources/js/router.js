import Dashboard from './modules/member/index'
import Profile from './modules/member/pages/profile'
import ProfilePassword from './modules/member/pages/change-password'

// Token
import TokenForm from './modules/member/pages/token/form'
import TokenList from './modules/member/pages/token/list'

// Vet
import VetForm from './modules/member/pages/vet/form'
import VetList from './modules/member/pages/vet/list'


 const routes = [
    {
        path: '/',
        component: Dashboard, 
        name: 'dashboard'
    }, 
    {
        path: '/tokens',
        component: TokenList, 
        name: 'token-list'
    }, 
    {
        path: '/tokens/list',
        component:TokenForm , 
        name: 'token-form'
    }, 
    {
        path: '/vet',
        component: VetList, 
        name: 'vet-list'
    }, 
    {
        path: '/vet/list',
        component:VetForm , 
        name: 'vet-form'
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