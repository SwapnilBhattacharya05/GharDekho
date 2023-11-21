import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// ?Buy and rent packages Imports
import BuyPackages from "./Components/Buy/Buy";
import RentPackages from "./Components/Rent/Rent";

// ?Home Contact About and Forms Imports
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import AboutUs from "./Components/About/About";
import Form from "./Components/Form/Form";

// ?Login and Signup Imports
import Login from "./Components/Login/Login"
import Signup from "./Components/SignUp/Signup";

// ?Blogs import
import Blogs from './Components/Blogs/Blogs';
import BlogPost from "./Components/Blogs/BlogPost";

// ?Dashboard Import
import Dashboard from "./Components/Admin/Dashboard/Dashboard";

// ?Dasboard Pages Imports
import AdminUser from "./Components/Admin/AdminUsers/AdminUsers";
import AdminBuyPage from "./Components/Admin/AdminPages/AdminBuyPage";
import AdminRentPage from "./Components/Admin/AdminPages/AdminRentPage";
import AdminBlogPage from "./Components/Admin/AdminPages/AdminBlogPage";

// ?Dashboard Chart Pages Imports
import AdminBarChart from "./Components/Admin/AdminChartPage/AdminBarChart";
import AdminLineChart from "./Components/Admin/AdminChartPage/AdminLineChart";
import AdminPieChart from "./Components/Admin/AdminChartPage/AdminPieChart";
import AdminLogin from "./Components/Admin/AdminLogin/AdminLogin";

// ?Imports for forms 
import PropertyDescription from "./Components/PropertyDescription/PropertyDescription";

import { useContext, useEffect } from 'react';

import UserContext from "./Context/user/UserContext";
import Profile from "./Components/Profile/Profile";
import MyProperty from './Components/Profile/MyProperty';
import UpdateProperty from './Components/UpdateProperty/UpdateProperty';

// !Removed Imports
// import AdminSellPage from "./Components/Admin/AdminPages/AdminSellPage";
// import PostProperty from "./Components/Form/PostProperty";

function App() {
  const userContext = useContext(UserContext);
  const { setUser } = userContext;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await setUser();
      } catch (error) {
        console.log("Error while fetching userData: ", error);
      }
    }
    if (localStorage.getItem('token')) {
      fetchUser();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>

          <Route exact path='/login' element={!(localStorage.getItem("token")) ? <Login /> : <Navigate to="/" />}></Route>
          <Route exact path='/signup' element={!(localStorage.getItem("token")) ? <Signup /> : <Navigate to="/" />}></Route>

          <Route exact path='/listproperty' element={(localStorage.getItem("token")) ? <Form /> : <Navigate to="/login" />}></Route>

          <Route exact path="/buy" element={<BuyPackages />}></Route>
          <Route exact path="/rent" element={<RentPackages />}></Route>

          <Route exact path='/blogshome' element={<Blogs />}></Route>
          <Route exact path='/blogpost/:blogid' element={<BlogPost />}></Route>

          <Route exact path="/contact" element={<Contact />}></Route>

          <Route exact path="/about" element={<AboutUs />}></Route>

          <Route exact path='/adminlogin' element={sessionStorage.getItem("isAdmin") ? <Dashboard /> : <AdminLogin />}></Route>
          <Route exact path='/adminhome' element={sessionStorage.getItem("isAdmin") ? <Dashboard /> : <Navigate to={"/adminlogin"} />}></Route>
          <Route exact path='/adminuser' element={sessionStorage.getItem("isAdmin") ? <AdminUser /> : <Navigate to={"/adminlogin"} />}></Route>
          <Route exact path="/adminbuypage" element={sessionStorage.getItem("isAdmin") ? <AdminBuyPage /> : <Navigate to={"/adminlogin"} />}></Route>
          <Route exact path="/adminrentpage" element={sessionStorage.getItem("isAdmin") ? <AdminRentPage /> : <Navigate to={"/adminlogin"} />}></Route>
          <Route exact path='/adminblogpage' element={sessionStorage.getItem("isAdmin") ? <AdminBlogPage /> : <Navigate to={"/adminlogin"} />}></Route>

          <Route exact path="/barchart" element={<AdminBarChart />}></Route>
          <Route exact path="/linechart" element={<AdminLineChart />}></Route>
          <Route exact path="/piechart" element={<AdminPieChart />}></Route>


          <Route exact path='/profile' element={(localStorage.getItem("token")) ? <Profile /> : <Navigate to="/" />}></Route>
          <Route exact path='/myproperty' element={(localStorage.getItem("token")) ? <MyProperty /> : <Navigate to="/" />}></Route>
          <Route exact path='/updateproperty/:propertyid' element={(localStorage.getItem("token")) ? <UpdateProperty /> : <Navigate to="/" />}></Route>

          <Route exact path="/propertydescription/:propertyid" element={<PropertyDescription />}></Route>


          {/* // !Removed routes */}
          {/* <Route path="/adminhomepage" element={<AdminHomePage />}></Route> */}
          {/* <Route path="/adminsellpage" element={<AdminSellPage />}></Route> */}
          {/* <Route path="/postproperty" element={<PostProperty />}></Route> */}


        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
