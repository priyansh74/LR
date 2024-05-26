import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Body from './components/Body';
import Header from './components/Header';
import About from './components/About';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';

//also called -> chinking, code splitting, on demand loading or  lazy loading
//lazy comes from react to us, its a named export, takes a callback fn
//this 1 line does magical things to our webpage
//Suspense is component given to us to handle the error between the transition period
const Grocery = lazy(()=> import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
  )
};
const appRouter = createBrowserRouter([
   {
     path: "/",
     element: <AppLayout/>,
     children: [
      {
       path:"/",
       element: <Body/>,
      },
      {
        path: "/about",
        element: <About/>,
       },
       {
        path: "/contact",
        element: <Contact/>,
       },
       {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading ...</h1>}><Grocery/></Suspense>,
       },
       {
         path:"/restaurants/:resId",
         element: <RestaurantMenu/>,
       },
     ],
     errorElement: <Error/>,
   },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

