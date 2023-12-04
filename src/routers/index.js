import Home from "../pages/Home"
import Flowing from "../pages/Flowing"
import Profile from "../pages/Profile"
import UploadPage from "../pages/UploadPage"
import HeaderOnly from "../components/Layout/HeaderOnly"
import Search from "../pages/Search"
//public routes
const publicRoutes = [
    { path: '/', component: Home},
    { path: '/flowing', component: Flowing},
    { path: '/profile', component: Profile},
    { path: '/uploadpage', component: UploadPage, layout: HeaderOnly},
    { path: '/search', component: Search, layout: null},
]    

const privateRoutes = [

]

export {
    publicRoutes,
    privateRoutes
}