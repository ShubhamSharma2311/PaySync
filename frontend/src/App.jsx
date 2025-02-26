<<<<<<< HEAD
import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes} from 'react-router-dom'
import SignUp from './pages/signup'
import SignIn from './pages/Signin'
import Root from './layout/Root'
import  Landing  from './pages/Landing'
import UserDashBoard from './pages/Dashboard'
import Send from './pages/Send'
import DashBoardLayout from './layout/dashBoardlayout'

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
    element : <DashBoardLayout/>,
    children : [ {
      path : '',
      element : <UserDashBoard/>
    }, {
      path : 'send',
      element : <Send/>
    }],
  },
]
},])

=======
import {BrowserRouter, Route, Routes} from 'react-router-dom'
>>>>>>> a8ad40e (commit after creating git routes)
function App() {
   return (
    <div>
<<<<<<< HEAD
        <RouterProvider router = {router} />
=======
        <BrowserRouter>
        <Routes>
          <Route path='/signup' element = {<Signup/>} />
          <Route path='/signin' element = {<Signin/>} />
          <Route path='/dashboard' element = {<Dashboard/>} />
          <Route path='/send' element = {<Send/>} />
        </Routes>
        </BrowserRouter>
>>>>>>> a8ad40e (commit after creating git routes)
    </div>
  )
}

export default App
