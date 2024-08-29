import React from "react";
import { FaUserGraduate, FaMoneyBillWave, FaClipboardList, FaChartLine, FaCalendarCheck } from "react-icons/fa";
import "./Sidebar.css";
import logo from '../assets/logo1.jpg';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo}></img>
      </div>
      <nav className="menu">
        <ul>
          <li >
            <FaUserGraduate className="icon" /> 
          <p>Student Management</p>
          </li>
          <li><FaMoneyBillWave className="icon"/>
           <p>Financial Management</p>
           </li>
          <li><FaChartLine className="icon"/> 
          <p>Quality Control</p>
          </li>
          <li><FaClipboardList className="icon"/>
          <p>Report Delivery</p> 
          </li>
          <li><FaCalendarCheck className="icon"/> 
          <p>Attendance</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
