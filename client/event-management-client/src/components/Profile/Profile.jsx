import React, { useState } from "react";
import "./Profile.css";
import About from "./About/About";

const Profile = () => {
    const [activeTab, setActiveTab] = useState('about');
      

    return (
      <div className="container">
        <div className="main">
          <div className="poster-image">
            <img src="" alt="" />
          </div>
          <div className="profile-content">
            <h2>Emily Thompson</h2>
            <div className="bottom">
              <p>Date of Birth: 01-11-2004</p>
              <p>Email ID: example@gmail.com</p>
              <p>Contact Number: XXXXXXXXXXX</p>
            </div>
            
          </div>
        </div>
        <div className="tab-container">
          <button
            className={activeTab === 'about' ? 'tab active-tab' : 'tab'}
            onClick={() => setActiveTab('about')}
          >
            About Me
          </button>
          <button
            className={activeTab === 'bookings' ? 'tab active-tab' : 'tab'}
            onClick={() => setActiveTab('bookings')}
          >
            My Bookings
          </button>
          <button
            className={activeTab === 'events' ? 'tab active-tab' : 'tab'}
            onClick={() => setActiveTab('events')}
          >
            My Events
          </button>
          <button
            className={activeTab === 'calendar' ? 'tab active-tab' : 'tab'}
            onClick={() => setActiveTab('calendar')}
          >
            My Calendar
          </button>
          <button
            className={activeTab === 'settings' ? 'tab active-tab' : 'tab'}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
        </div>

        <div className="content">
          {activeTab === 'about' && (
            <div>
              <About />
            </div>
          )}
          {activeTab === 'settings' && (
            <div>
              <h2>Settings</h2>
              <p>Update your profile settings here.</p>
            </div>
          )}
          {activeTab === 'bookings' && (
            <div>
              <h2>My Bookings</h2>
              <p>Here are your current bookings.</p>
            </div>
          )}
          {activeTab === 'events' && (
            <div>
              <h2>My Events</h2>
              <p>Check out the events you are part of!</p>
            </div>
          )}
          {activeTab === 'calendar' && (
            <div>
              <h2>My Calendar</h2>
              <p>View and manage your calendar here.</p>
            </div>
          )}
        </div>
      </div>
    );
}

export default Profile;