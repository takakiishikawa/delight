import React from 'react';
import ReactDOM from 'react-dom/client';
import{createBrowserRouter,RouterProvider} from 'react-router-dom';

const router=createBrowserRouter([
    {
        path:'',
        element:<Top />,
    },
    {
        path:'idiom',
        element:<Idiom />,
    },
    {
        path: "add",
        element:<Add />,
    },
    {
        path:'list',
        element:<FixList />,
    },

]);


ReactDOM.createRoot(document.querySelector('#root')).render(
    <RouterProvider router={router} />
);



