import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Layout from './Layout'
import Contact from './components/ContactUs/contact'
import GitHub, { githubInfoLoader } from './components/GitHub/GitHub'
import User from './components/User/User'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <Layout />
//     ),
//     children: [
//       {
//         path: "",
//         element: (
//         <Home />
//     ),
//       },
//       {
//         path: "about",
//         element: (
//         <About />
//       ),
//       },
//       {
//         path: "contact-us",
//         element: (
//         <Contact />
//       ),
//       },
//       {}
//     ]
//   },

// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact-us" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route 
      loader= {githubInfoLoader}
      path="github" 
      element={<GitHub />} />

     
    </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
