import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// ?Buy and rent packages Imports
import BuyPackages from "./Components/BuyCategory/BuyingPage";
import RentPackages from "./Components/RentCategory/RentingPage";

// ?Home Contact About and Forms Imports
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/contact";
import AboutUs from "./Components/AboutUs/About";
import Forms from "./Components/Form/Form";

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



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>

          <Route path="/buyPackages" element={<BuyPackages />}></Route>
          <Route path="/rentPackages" element={<RentPackages />}></Route>

          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/form" element={<Forms />}></Route>

          <Route path="/adminlogin" element={<AdminLogin />}></Route>

          <Route path="/adminhome" element={<Dashboard />}></Route>
          <Route path="/adminuser" element={<AdminUser />}></Route>

          <Route path="/adminhomepage" element={<AdminHomePage />}></Route>
          <Route path="/adminbuypage" element={<AdminBuyPage />}></Route>
          <Route path="/adminsellpage" element={<AdminSellPage />}></Route>
          <Route path="/adminrentpage" element={<AdminRentPage />}></Route>
          <Route path="/adminblogpage" element={<AdminBlogPage />}></Route>

          <Route path="/barchart" element={<AdminBarChart />}></Route>
          <Route path="/linechart" element={<AdminLineChart />}></Route>
          <Route path="/piechart" element={<AdminPieChart />}></Route>


          <Route path="/postproperty" element={<PostProperty />}></Route>

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
