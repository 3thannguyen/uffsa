import React from 'react';

const PersonGrid = ({
  id,
  title,
  people = [],
  defaultPhoto,
  sectionClass = 'eboard-section',
  titleClass = 'eboard-section-title',
  containerClass = 'eboard-container',
  cardClass = 'eboard-card',
  textClass = 'eboard-card__text',
}) => {

  if (people.length === 0) return null;

  return (
    <section className={sectionClass} id={id}>
      <h1 className={`${titleClass} title`}>{title}</h1>
      <div className={containerClass}>
        {people.map((person) => {
          const { name, role, photo, instagram } = person;
          const key = `${name}-${role}`;

          const content = (
            <>
              <img src={photo || defaultPhoto} alt={name} />
              <div className={textClass}>
                <h1>{name}</h1>
                <h2>{role}</h2>
              </div>
            </>
          );
          return instagram ? (
            <a
              key={key}
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
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

export default PersonGrid;