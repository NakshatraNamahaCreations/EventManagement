import React, { useEffect, useState } from "react";
import Editing from '../../assets/editing.png';
import "./styles.scss";
import { useSelector } from "react-redux";
import authService from "../../api/ApiService";


const Account = () => {
  const [userDetails, setUserDetails] = useState([]);
  const userId = useSelector((state) => state.auth.userId);

  console.log("the accound section", userId);

  const getAccount = async() => {
    const res = await authService.getUserProfile(userId);
    console.log(res);
    
  }
  
  useEffect(() => {
    getAccount();
  },[userId])
  
  return (
    <div className="account-page">
      <header className="header">
        <h1>My Account</h1>
        <div className="icons">
          <i className="fa fa-calendar" title="Calendar"></i>
          <i className="fa fa-bell" title="Notifications"></i>
        </div>
      </header>
      <div className="profile-section">
        <div className="profile-info">
          <img
            src="https://walnuteducation.com/static/core/images/icon-profile.png"
            alt="Profile"
            className="profile-image"
          />
          <div className="user-details">
            <h2>Naveen</h2>
            <p>claire.cooper@mail.com</p>
          </div>
        </div>
        <button className="edit-btn">
          <img src={Editing} alt="Not Found"/>
        </button>
      </div>
      <div className="options">
        <h3>General</h3>
        <ul>
          <li>
            <i className="fa fa-ticket"></i> Account
            <i className="fa fa-chevron-right"></i>
          </li>
          <li>
            <i className="fa fa-heart"></i> My Tickets
            <i className="fa fa-chevron-right"></i>
          </li>
          <li>
            <i className="fa fa-info-circle"></i> About Us
            <i className="fa fa-chevron-right"></i>
          </li>
          <li>
            <i className="fa fa-file-alt"></i> Privacy Policy
            <i className="fa fa-chevron-right"></i>
          </li>
          <li>
            <i className="fa fa-question-circle"></i> Help Center
            <i className="fa fa-chevron-right"></i>
          </li>
          <li>
            <i className="fa fa-bell"></i> Terms & Conditions
            <i className="fa fa-chevron-right"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Account;
