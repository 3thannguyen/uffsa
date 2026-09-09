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
            <h2 className="event-card-title title">🕸️ Spider-Man: Bagong Araw | Fall GBM #1 🕸️</h2>
            <p className="event-card-description">
              Spider-Man is swinging onto the big screen at FSA's first GBM of the semester! Come on, come on, come on out and watch the show!
            </p>
            <p className="event-description-separator">✧･ﾟ:*✧･ﾟ:*✧･ﾟ:*✧*:･ﾟ✧*:･ﾟ✧*:･ﾟ✧</p>
            <div className="events-info">
              <p>📅 Date: Wednesday, September 9th</p>
              <p>📍 Location: NPB 1001</p>
              <p>🚪 Doors Open: 5:00 PM</p>
              <p>🕑 Show Starts: 5:30 PM</p>
            </div>
            <a href="https://www.instagram.com/p/DcycKz2oGXi/" target="_blank" rel="noopener noreferrer">
              <button className="events-button">Instagram Post</button>
            </a>
          </div>

          <div className="event-card">
            <h2 className="event-card-title title">🕷️ Tan-Cha Aftersocial | Fall GBM #1 🕷️</h2>
            <p className="event-card-description">
              It's a brand new day for FSA! The UFFSA Pamilya doesn't stop with just the GBM. Join us at Tan-Cha for an after social to sip boba like Spider-Man!
              Don't forget to mention "FSA" or to show this graphic at the checkout so UFFSA gets your support!
            </p>
            <p className="event-description-separator">✧･ﾟ:*✧･ﾟ:*✧･ﾟ:*✧*:･ﾟ✧*:･ﾟ✧*:･ﾟ✧</p>
            <div className="events-info">
              <p>📅 Date: Wednesday, September 9th</p>
              <p>📍 Location: 1111 W University Ave, Gainesville, FL</p>
              <p>🕑 Time: 8:00 PM - 9:15 PM</p>
            </div>
            <a href="https://www.instagram.com/p/DdCHsTTRoPX/" target="_blank" rel="noopener noreferrer">
              <button className="events-button">Instagram Post</button>
            </a>
          </div>

          <div className="event-card">
            <h2 className="event-card-title title">🕸️ FSAvengers: Speed Friending 🕸️</h2>
            <p className="event-card-description">
              Looking to meet new faces and make new friends?🫂 Possibly looking for a new big or little?😆 
              If so, come show up to FSA’s upcoming Speed Friending event!! 🦸
            </p>
            <p className="event-description-separator">✧･ﾟ:*✧･ﾟ:*✧･ﾟ:*✧*:･ﾟ✧*:･ﾟ✧*:･ﾟ✧</p>
            <div className="events-info">
              <p>📅 Date: Friday, September 11th</p>
              <p>📍 Location: LIT 0217</p>
              <p>🕑 Time: 4:00 PM - 6:00 PM</p>
            </div>
            <a href="https://www.instagram.com/p/DdCyFaNolUT/" target="_blank" rel="noopener noreferrer">
              <button className="events-button">Instagram Post</button>
            </a>
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