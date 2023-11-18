import "./App.css";
import { BrowserRouter,Navigate, Route, Routes } from "react-router-dom";

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

// ?Dashboard Import
import Dashboard from "./Components/Admin/Dashboard/Dashboard";

// ?Dasboard Pages Imports
import AdminUser from "./Components/Admin/AdminUsers/AdminUsers";
import AdminHomePage from "./Components/Admin/AdminPages/AdminHomePage";
import AdminBuyPage from "./Components/Admin/AdminPages/AdminBuyPage";
import AdminSellPage from "./Components/Admin/AdminPages/AdminSellPage";
import AdminRentPage from "./Components/Admin/AdminPages/AdminRentPage";
import AdminBlogPage from "./Components/Admin/AdminPages/AdminBlogPage";

// ?Dashboard Chart Pages Imports
import AdminBarChart from "./Components/Admin/AdminChartPage/AdminBarChart";
import AdminLineChart from "./Components/Admin/AdminChartPage/AdminLineChart";
import AdminPieChart from "./Components/Admin/AdminChartPage/AdminPieChart";
import AdminLogin from "./Components/Admin/AdminLogin/AdminLogin";

// ?Imports for forms 
import PostProperty from "./Components/Form/PostProperty";
import PropertyDescription from "./Components/PropertyDescription/PropertyDescription";

import { useContext, useEffect } from 'react';

import UserContext from "./Context/user/UserContext";
import Profile from "./Components/Profile/Profile";


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

          <Route path="/buy" element={<BuyPackages />}></Route>
          <Route path="/rent" element={<RentPackages />}></Route>

          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>

          <Route path="/adminlogin" element={<AdminLogin />}></Route>

          <Route path="/adminhome" element={<Dashboard />}></Route>
          <Route path="/adminuser" element={<AdminUser />}></Route>

          <Route path="/adminhomepage" element={<AdminHomePage />}></Route>
          <Route path="/adminbuypage" element={<AdminBuyPage />}></Route>
          {/* <Route path="/adminsellpage" element={<AdminSellPage />}></Route> */}
          <Route path="/adminrentpage" element={<AdminRentPage />}></Route>
          <Route path="/adminblogpage" element={<AdminBlogPage />}></Route>

          <Route path="/barchart" element={<AdminBarChart />}></Route>
          <Route path="/linechart" element={<AdminLineChart />}></Route>
          <Route path="/piechart" element={<AdminPieChart />}></Route>


          <Route path="/postproperty" element={<PostProperty />}></Route>

          {/* //TODO: Temporary route path for the about page */}
          <Route path="/aboutProperty" element={<PropertyDescription />}></Route>

          <Route exact path='/profile' element={(localStorage.getItem("token")) ? <Profile /> : <Navigate to="/" />}></Route>

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
