import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './resume_builder.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home/Home.tsx'
import EditResume from './Dashboard/Resume/[resumeId]/Edit/EditResume.tsx';
import TemplateSelection from './Dashboard/TemplateSelection/TemplateSelection.tsx';
import ViewResume from './Dashboard/Resume/[resumeId]/Edit/my-resume/[resumeId]/view/ViewResume.tsx';




const router = createBrowserRouter(
  [
    {
      element:<App/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/dashboard/TemplateSelection',
          element:<TemplateSelection/>
        },
        {
          path:'/dashboard/resume/:resumeId/Edit',
          element:<EditResume/>
        },
        {
          path: '/dashboard/resume/:resumeId/Edit/my-resume/:resumeId/view',
          element: <ViewResume />, 
        },
      ]

    },
   
  ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
