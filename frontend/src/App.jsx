import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes} from 'react-router-dom'
import SignUp from './pages/signup'
import SignIn from './pages/Signin'


const router = createBrowserRouter([{
  path : '/signup',
  element : <SignUp/>
},{
  path : '/signin',
  element : <SignIn/>
}])

function App() {
   return (
    <div>
        <RouterProvider router = {router} />
    </div>
  )
}

export default App
