import React from "react";
import "./Events.css";

import { HashLink } from "react-router-hash-link";
import { FaLink, FaInstagram, FaRegCalendar } from 'react-icons/fa';

const Events = () => {
  return (
    <section className="events-section" id="events">
      <div className="events-container">
        <h1 className="events-title title">☀️ September Events ☀️</h1>
        <div className="event-grid">
          <div className="event-card">
            <h2 className="event-card-title title">📝 AKA Fall 2026 Pairing Applications 📝</h2>
            <p className="event-card-description">
              Embrace your inner Mii by applying for AKA 2026! AKA stands for Ate Kuya Ading (translates to big brother, big sister, and little sibling) and is 
              FSA’s big/little program where you can make new friendships in our pamilya. Whether you’re going from Strangers to Acquaintances, or working up to 
              be Ultra Friends, AKA can help you start living the dream with fellow members in FSA!
            </p>
            <p className="event-description-separator">✧･ﾟ:*✧･ﾟ:*✧･ﾟ:*✧*:･ﾟ✧*:･ﾟ✧*:･ﾟ✧</p>
            <div className="events-info">
              <p>📅 Due: Friday, September 18th</p>
              <p>🕑 Time: 11:59 PM</p>
            </div>
            <a href="https://www.instagram.com/p/DdElYXZoM2D/" target="_blank" rel="noopener noreferrer">
              <button className="events-button">Instagram Post</button>
            </a>
          </div>

          <div className="event-card">
            <h2 className="event-card-title title">📝 FSA Web Internship Applications 📝</h2>
            <p className="event-card-description">
              Ready to take your web development skills to the next level? FSA is looking for a few talented individuals to join our web internship program!
            </p>
            <p className="event-description-separator">✧･ﾟ:*✧･ﾟ:*✧･ﾟ:*✧*:･ﾟ✧*:･ﾟ✧*:･ﾟ✧</p>
            <div className="events-info">
              <p>📅 Due: Friday, September 25th</p>
              <p>🕑 Time: 11:59 PM</p>
            </div>
          </div>

          <div className="event-card">
            <h2 className="event-card-title title">🍳 AASU x FSA Breakfast Brigade🍳</h2>
            <p className="event-card-description">
              Join FSA and AASU in making breakfast for families at the Ronald McDonald House!
            </p>
            <p className="event-description-separator">✧･ﾟ:*✧･ﾟ:*✧･ﾟ:*✧*:･ﾟ✧*:･ﾟ✧*:･ﾟ✧</p>
            <div className="events-info">
              <p>📅 Due: Saturday, September 26thth</p>
              <p>📍 Location: 2121 SW 16th St, Gainesville, FL 32601</p>
              <p>🕑 Event Starts: 7:00 AM</p>
              <p>🕑 Event Ends: 9:00 AM</p>
            </div>
          </div>

          <div className="event-card">
            <h2 className="event-card-title title">🕸️ FSA Big/Little: Tomod-AKA Life 🕸️</h2>
            <p className="event-card-description">
              Embrace your inner Mii by applying for AKA 2026! AKA stands for Ate Kuya Ading (translates to big brother, big sister, and little sibling) and is 
              FSA’s big/little program where you can make new friendships in our pamilya. Whether you’re going from Strangers to Acquaintances, or working up to 
              be Ultra Friends, AKA can help you start living the dream with fellow members in FSA!
            </p>
            <p className="event-description-separator">✧･ﾟ:*✧･ﾟ:*✧･ﾟ:*✧*:･ﾟ✧*:･ﾟ✧*:･ﾟ✧</p>
            <div className="events-info">
              <p>📅 Date: Sunday, September 27th | AKA Reveal</p>
              <p>📍 Location and Time: Lake Wauburg after the FAHM Opening Ceremony</p>
              <p>📅 Date: Monday, September 28th | Paint the Wall</p>
              <p>📍 Location and Time: Norman Tunnel from 5:00 PM - 7:00 PM</p>
            </div>
            <a href="https://www.instagram.com/p/DdElYXZoM2D/" target="_blank" rel="noopener noreferrer">
              <button className="events-button">Instagram Post</button>
            </a>
          </div>

        </div>
        <section className='events-description'>
          <div className='events-calendar__container' id='events'>
            <h1 className='title'>Events Calendar</h1>
            <iframe
                src="https://calendar.google.com/calendar/embed?src=c_e54f2747e1492f344b5d9f1fff1fe7bad869036ae95ef33a8b49f04576a56fbc%40group.calendar.google.com&ctz=America%2FNew_York"
                className="events-calendar"
                title="calendar"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Events;