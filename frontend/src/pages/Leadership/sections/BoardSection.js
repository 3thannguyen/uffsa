import React from 'react';
import './E-Board.css';
import './C-Board.css';
import Default from './default.png';

const BoardSection = ({ id, title, members = [], cardClass = 'eboard-card' }) => {
  // Render nothing rather than an empty heading if the roster isn't filled in yet.
  if (members.length === 0) return null;

  return (
    <section className='eboard-section' id={id}>
      <h1 className='eboard-section-title title'>{title}</h1>
      <div className='eboard-container'>
        {members.map((member) => {
          const { name, role, photo, instagram } = member;
          const key = `${name}-${role}`;

          const content = (
            <>
              <img src={photo || Default} alt={name} />
              <div className='eboard-card__text'>
                <h1>{name}</h1>
                <h2>{role}</h2>
              </div>
            </>
          );
          return instagram ? (
            <a
              key={key}
              href={instagram}
              target='_blank'
              rel='noopener noreferrer'
              className={cardClass}
            >
              {content}
            </a>
          ) : (
            <div key={key} className={cardClass}>
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BoardSection;