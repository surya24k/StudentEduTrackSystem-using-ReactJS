
import React from "react";
import "./CentralContent.css";
import { PiStudentFill } from "react-icons/pi";
import { GoPersonFill } from "react-icons/go";
import { BsPersonStanding } from "react-icons/bs";
import { FaClinicMedical } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { LuClub } from "react-icons/lu";



const CentralContent = () => {
  return (
    <div className="central-content">
      <h1>Student Management</h1>
      <div className="student-categories">
        <div className="category">
        <GoPersonFill className="icons"/>
          <h3>Registered Students</h3>
        </div>
        <div className="category2">
        <PiStudentFill className="icons"/>
          <h3>Remedial Students</h3>
        </div>
        <div className="category3">
        <BsPersonStanding className="icons"/>
          <h3>In Paid Clubs</h3>
        </div>
      </div>

      <h2>Menus</h2>
      <div className="menu-list">
        <div class="c1">
            <LuClub className="ico"/>
            <h3>Club Management</h3>
            </div>
        <div class="c2">
            <SiGoogleclassroom className="ico"/>
        <h3>Classroom Management</h3>
            </div>
            <div class="c3">
                <MdEmail className="ico"/>
            <h3>SMS/Email</h3>
            </div>
            <div class="c4">
                <FaRegCalendarDays className="ico"/>
            <h3>Attendance</h3>
            </div>
            <div class="c5">
                <FaClinicMedical className="ico"/>
            <h3>Clinic</h3>
            </div>
        
      </div>
    </div>
  );
};

export default CentralContent;
