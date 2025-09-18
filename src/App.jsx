import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './component/Home/Home';
import Layout from './component/Layout/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SpecificCategory from './component/SpecificCategory/SpecificCategory';
import NotFound from './component/NotFound/NotFound';


function App() {

  let router = createBrowserRouter([
    {path:'', element: <Layout/>, children:[
      {index:true, element:<Home/>},
      {path:'category/:id', element:<SpecificCategory/>},
      {path:'*', element:<NotFound/>},
    ]},
  ]);

  return <RouterProvider router={router}></RouterProvider>
}

export default App
