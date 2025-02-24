import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes} from 'react-router-dom'
import SignUp from './pages/signup'
import SignIn from './pages/Signin'
import Root from './layout/Root'
import { Dashboard, Landing } from './pages/Landing'

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
  }]
},])

function App() {
   return (
    <div>
        <RouterProvider router = {router} />
    </div>
  )
}

export default App
