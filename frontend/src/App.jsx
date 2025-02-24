import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes} from 'react-router-dom'
import SignUp from './pages/signup'
import SignIn from './pages/Signin'
import Root from './layout/Root'
import  Landing  from './pages/Landing'
import UserDashBoard from './pages/Dashboard'
import Send from './pages/Send'

const router = createBrowserRouter([{
  path : '/',
  element : <Root/>,
  children : [{
    path : '' ,
    element : <Landing/>
  },{
    path : 'signup',
    element : <SignUp/>
  },{
    path : 'signin',
    element : <SignIn/>
  },{
    path : 'dashboard',
    element : <UserDashBoard/>
  },{
    path : 'send',
    element : <Send/>
  }
]
},])

function App() {
   return (
    <div>
        <RouterProvider router = {router} />
    </div>
  )
}

export default App
