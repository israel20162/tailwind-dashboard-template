import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';

import './charts/ChartjsConfig';


// Import pages
import Dashboard from './pages/Dashboard';
import Test from "./pages/Dashboard1"
import Withdrawals from './pages/Withdrawals';
import Categories from "./pages/Categories";
import Category from "./components/categories/Category";
import AddCategory from "./partials/categories/AddCategory";
import Rentals from "./pages/Rentals";
import Items from "./pages/Items";
import Staff from "./pages/Staff";
import Users from './pages/Users';
import Settings from './pages/Settings';
import AddStaff from './pages/AddStaff';
import Messages from './pages/Messages';
import Transactions from './pages/Transactions';

import SingleUser from './pages/SingleUser';
import Login from './pages/Login';
import Message from './pages/Message';



function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/withdraw" element={<Withdrawals />} />
        <Route exact path="/test" element={<Test />} />
        <Route exact path="/rentals" element={<Rentals />} />
        <Route exact path="/items" element={<Items />} />
        <Route exact path="/staff" element={<Staff />} />
        <Route exact path="/users" element={<Users />} />

        <Route exact path="/transactions" element={<Transactions />} />

        <Route exact path="/users/:id" element={<SingleUser />} />

        <Route exact path="/login" element={<Login />} />

        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/withdrawals" element={<Withdrawals />} />
        <Route exact path="/categories" element={<Categories />} />
        <Route exact path="/categories/add" element={<AddCategory />} />
        <Route exact path="/categories/:slug" element={<Category />} />
        <Route exact path="/staff/add" element={<AddStaff />} />
        <Route exact path="/Messages" element={<Messages />} />
        <Route
          exact
          path="/Messages/:slug"
          element={<Message />}
        />
      </Routes>
    </>
  );
}

export default App;
