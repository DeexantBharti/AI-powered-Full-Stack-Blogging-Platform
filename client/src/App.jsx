  import React from 'react'
  import { Route, Routes } from 'react-router-dom'
  import Home from './pages/Home.jsx'
  import Blog from './pages/Blog.jsx'
  import Layout from './pages/admin/Layout.jsx'
  import Dashboard from './pages/admin/Dashboard.jsx'
  import AddBlog from './pages/admin/AddBlog.jsx'
  import ListBlog from './pages/admin/ListBlog.jsx'
  import Comments from './pages/admin/Comments.jsx'
  import Login from './components/admin/Login.jsx'
  import 'quill/dist/quill.snow.css'
  import {Toaster} from 'react-hot-toast'
  import { useAppContext } from './context/AppContext.jsx'
  import UserProfile from './pages/user/UserProfile.jsx'
  import UserLayout from './pages/user/UserLayout.jsx'
  import UserDashboard from './pages/user/UserDashboard.jsx'
import SubscriptionPage from './pages/user/SubscriptionPage.jsx'
import UserComments from './pages/user/UserComments.jsx'

  const App = () => {
    const {token,uToken} = useAppContext();

    return ( 
      <div>
        <Toaster />
        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/blog/:id' element={<Blog />} />
          <Route path = '/user' element = {uToken? <UserLayout/> : <Login />} >
            {/* <Route index element={<UserDashboard />} /> */}
            <Route index element={<UserProfile />} />
            <Route path='subscription' element={<SubscriptionPage />} />
            <Route path='comments' element={<UserComments />} />
          </Route>
       
          <Route path='/admin' element ={ token ?  <Layout/> : <Login />} >
          <Route index element={<Dashboard />} />
          <Route path='addBlog' element = {<AddBlog />} />
        <Route path='listBlog' element={<ListBlog />} />
        <Route path='comments' element={<Comments />} />
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    )
  }



  export default App