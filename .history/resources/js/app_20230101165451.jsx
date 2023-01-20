import React from 'react';
import ReactDOM from 'react-dom/client';
import{createBrowserRouter,RouterProvider} from 'react-router-dom';

const router=createBrowserRouter([
    {
        path:'',
        element:<Top />,
    },
]);


ReactDOM.createRoot(document.querySelector('#root')).render(
    <RouterProvider router={router} />
);



