import React from 'react';
import ReactDOM from 'react-dom/client';
import{createBrowserRouter,RouterProvider} from 'react-router-dom';
import Top from './Top';

const router=createBrowserRouter([
    {
        path:'',
        element:<Add />,
    },
]);


ReactDOM.createRoot(document.querySelector('#root')).render(
    <RouterProvider router={router} />
);



