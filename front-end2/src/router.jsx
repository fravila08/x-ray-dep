import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import HomePage from './pages/HomePage'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import TaskPage from './pages/TaskPage'
import { userConfirmation } from './utilities'

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
                path:"/tasks/",
                element:<TaskPage/>
            },
            {
                path:"/signup/",
                element:<SignUp/>
            },
            {
                path:"/login/",
                element: <LogIn/>
            }
        ]
    }
])

export default router;