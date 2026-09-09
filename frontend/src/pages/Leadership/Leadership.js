// ---------------------------------------------------------------------------
// Leadership.js
// Location: frontend/src/pages/Leadership/Leadership.js
// ---------------------------------------------------------------------------

import React from 'react';
import './Leadership.css';

import BoardSection from './sections/BoardSection';
import Committees from './sections/Committees';
import {
  EBOARD_2026_2027,
  CBOARD_2026_2027,
  EBOARD_2025_2026,
  CBOARD_2025_2026,
} from './sections/boardData';

const Leadership = () => {
  return (
    <div className='leadership-page'>

      {/* --- Current board -------------------------------------------------
          The #eboard and #cboard ids MUST live here, not on the past board.
          Navbar.js links to /leadership#eboard and /leadership#cboard. */}
      <h1 className='board-year-title title'>UFFSA Board 2026&ndash;2027</h1>
      <BoardSection
        id='eboard'
        title='Executive Board'
        members={EBOARD_2026_2027}
      />
      <BoardSection
        id='cboard'
        title='Chair Board'
        members={CBOARD_2026_2027}
        cardClass='cboard-card'
      />
      <Committees />
      
      <h1 className='board-year-title board-year-title--past title'>
        UFFSA Board 2025&ndash;2026
      </h1>
      <BoardSection
        title='Executive Board'
        members={EBOARD_2025_2026}
      />
      <BoardSection
        title='Chair Board'
        members={CBOARD_2025_2026}
        cardClass='cboard-card'
      />

    </div>
  );
};

export default Leadership;