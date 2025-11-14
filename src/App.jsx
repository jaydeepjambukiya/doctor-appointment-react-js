import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";
import Blog from "./components/Blog";
import Banner from "./components/Banner";
import Header from "./common/Header";
import Footer from "./common/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Singlepagecomponent from './components/Singlepagecomponent';
import Appointment from "./components/AppointmentPage";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/service",
          element: <Service />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/banner",
          element: <Banner />,
        },
        {
          path: "/singlepage/:id",
          element: <Singlepagecomponent />,
        },
        {
          path:"/appointment",
          element:<Appointment/>,
        }
      ],
    },
    {
      path: "*",
      element: <div>PageNOTFound</div>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
