import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import HomePage from './pages/HomePage'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import ListsPage from './pages/ListsPage'
import { userConfirmation, getUsersLists } from './utilities'
import NotFoundPage from './pages/NotFoundPage'

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        loader: userConfirmation,
        children:[
            {
                index:true,
                element:<HomePage/>
            },
            {
                path:"/lists/",
                loader: getUsersLists,
                element:<ListsPage/>
            },
            {
                path:"/signup/",
                element:<SignUp/>
            },
            {
                path:"/login/",
                element: <LogIn/>
            },
            {
                path:"*",
                element:<NotFoundPage />
            }
        ]
    }
])

export default router;