// ---------------------------------------------------------------------------
// boardData.js
// Location: frontend/src/pages/Leadership/sections/boardData.js
//
// Single source of truth for every board roster on the Leadership page.
// To add next year's board: add photos, add imports, add a new exported array,
// and render it from Leadership.js. Do not touch BoardSection.js.
//
// Member shape:
//   {
//     name:      'Full Name'                                  (required)
//     role:      'VP of Whatever'                             (required)
//     photo:     imported image                               (optional - falls back to default.png)
//     instagram: 'https://www.instagram.com/handle/'          (optional - renders a non-link card if absent)
//   }
// ---------------------------------------------------------------------------


// ===========================================================================
// 2026-2027 PHOTOS  (put new files in frontend/src/pages/Leadership/photos/2026-2027/)
// ===========================================================================
// Filename rules, in order of how badly they will ruin your day:
//   1. Extension must match the import EXACTLY. Windows and macOS do not care.
//      Vercel's Linux builder does. `foo.JPG` imported as `foo.jpg` = failed build.
//   2. All lowercase, no spaces, no parentheses. `img (1).jpg` will not resolve.
//   3. Convert HEIC to JPG first. Webpack cannot bundle HEIC.
//
// import NewPresident from '../photos/2026-2027/first-last.jpg';
// import NewVP        from '../photos/2026-2027/first-last.jpg';


// ===========================================================================
// 2025-2026 PHOTOS
// ===========================================================================
import Bekzod   from '../photos/bekzod.jpg';
import Brian    from '../photos/brian.jpg';
import Chadrick from '../photos/chadrick.jpg';
import Dom      from '../photos/dom.jpg';
import Gianna   from '../photos/gianna.jpg';
import Katheri  from '../photos/katheri.jpg';
import Matt     from '../photos/matt.jpg';
import Max      from '../photos/max.jpg';
import Mia      from '../photos/mia.jpg';
import Sam      from '../photos/sam.jpg';

import Abby     from '../photos/abby.jpg';
import Alex     from '../photos/alex.jpg';
import Ava      from '../photos/ava.jpg';
import Azille   from '../photos/azille.jpg';
import Drew     from '../photos/drew.jpg';
import Elijah   from '../photos/elijah.jpg';
import Gahyun   from '../photos/gahyun.jpg';
import Iya      from '../photos/iya.JPG'; 
import Jaden    from '../photos/jaden.jpg';
import Jane     from '../photos/elle.jpg';
import Jasmine  from '../photos/jasmine.jpg';
import Jerry    from '../photos/jerry.jpg';
import Justin   from '../photos/justin.jpg';
import Kate     from '../photos/kate.jpg';
import Laura    from '../photos/laura.jpg';
import Liam     from '../photos/liam.jpg';
import Luke     from '../photos/luke.jpg';
import Lynette  from '../photos/lynette.jpg';
import Mari     from '../photos/mari.jpg';
import Mason    from '../photos/mason.jpg';
import Noah     from '../photos/noah.jpg';
import PJ       from '../photos/pj.jpg';
import Rebekah  from '../photos/rebekah.jpg';
import Yazmina  from '../photos/yazmina.jpg';

import Anja from '../photos/anja.jpg';
import SamA from '../photos/sama.jpg';
import Aidan from '../photos/aidan.jpg';
import Charisse from '../photos/charisse.jpg';
import Tyler from '../photos/tyler.jpg';

import Athena from '../photos/athena.jpg';
import Braylenn from '../photos/braylenn.jpg';
import EmmaG from '../photos/emmag.jpg';
import EmmaS from '../photos/emmas.jpg';
import Erin from '../photos/erin.jpg';
import Gabbie from '../photos/gabbie.jpg';
import Gabe from '../photos/gabe.jpg';
import Jeremiah from '..photos/jeremiah.jpg';
import Kirk from '../photos/kirk.jpg';
import NateA from '../photos/natea.jpg';
import NateL from '../photos/natel.jpg';
import Nikita from '../photos/nikita.jpg';
import Nikki from '../photos/nikki.jpg';
import Reyhan from '../photos/reyhan.jpg';
import Ronald from '../photos/ronald.jpg';
import Samih from '../photos/samih.jpg';
import Tori from '../photos/tori.jpg';
import Tyson from '../photos/tyson.jpg';



// ===========================================================================
// CURRENT BOARD — 2026-2027
// ===========================================================================

export const EBOARD_2026_2027 = [
  { name: 'Chadrick Penalosa',                role: 'Executive President',       photo: Chadrick,      instagram: 'https://www.instagram.com/chadrick_penalosa/' },
  { name: 'Abigail Johnson',                  role: 'Executive Vice President',  photo: Abby,    instagram: 'https://www.instagram.com/abigailll831/' },
  { name: 'Kathryn Rzeczkowski',                  role: 'VP of Finance',             photo: Kate,   instagram: 'https://www.instagram.com/krezz9/' },
  { name: 'Luke Valian Malobay',               role: 'VP of Internal Affairs',    photo: Luke,     instagram: 'https://www.instagram.com/luke.valian/' },
  { name: 'Evan Anja Anzano',   role: 'VP of Cultural Affairs',    photo: Anja,      instagram: 'https://www.instagram.com/anja_anzano/' },
  { name: 'Samantha Anglo',                   role: 'VP of Mass Communications', photo: SamA,  instagram: 'https://www.instagram.com/ssamanglo/' },
  { name: 'Aidan McManus',              role: 'VP of Membership',          photo: Aidan,      instagram: 'https://www.instagram.com/aidanjmcmanus/' },
  { name: 'Charisse Felix',                role: 'VP of Membership',          photo: Charisse, instagram: 'https://www.instagram.com/charissezpieces/' },
  { name: 'Tyler Buenaflor',                      role: 'VP of Multimedia',          photo: Tyler,      instagram: 'https://www.instagram.com/tbuenaflor22/' },
  { name: 'Andrew Lucas',                 role: 'VP of External Affairs',    photo: Drew,   instagram: 'https://www.instagram.com/andrew.lcss/' },
];

export const CBOARD_2026_2027 = [
  { name: 'Ronald Nguyen',      role: 'Fundraising Chair',          photo: Ronald,     instagram: 'https://www.instagram.com/rngu.y/' },
  { name: 'Kirk Vinas',   role: 'Philanthropy Chair',          photo: Kirk,     instagram: 'https://www.instagram.com/kcv_v1/' },
  { name: 'Nikita Danesh',         role: 'Philanthropy Chair',         photo: Nikita,     instagram: 'https://www.instagram.com/nikitas.notes/' },
  { name: 'PJ Gray',          role: 'Philanthropy Chair',         photo: PJ,     instagram: 'https://www.instagram.com/pjgray01/' },
  { name: 'Athena Corrales',    role: 'Dance Chair',                photo: Athena,     instagram: 'https://www.instagram.com/athenacorrales232/' },
  { name: 'Emma Grace Henne',      role: 'Dance Chair',                photo: EmmaG,     instagram: 'https://www.instagram.com/emma_grace_henne/' },
  { name: 'Brian Paz',       role: 'Senior Advisor',             photo: Brian,   instagram: 'https://www.instagram.com/bluebrainedbeing/' },
  { name: 'Noah Magpusao',            role: 'Culture Chair',              photo: Noah,      instagram: 'https://www.instagram.com/no____ahh/' },
  { name: 'Samih Bootwalla',        role: 'Culture Chair',              photo: Samih,  instagram: 'https://www.instagram.com/samih.nohay/' },
  { name: 'Tori Huynh',           role: 'Culture Chair',              photo: Tori,     instagram: 'https://www.instagram.com/torels_is_semi_alive/' },
  { name: 'Emma Shi',               role: 'Mass Communications Chair',  photo: EmmaS,      instagram: 'https://www.instagram.com/erhys_/' },
  { name: 'Erin Braganza',          role: 'Mass Communications Chair',  photo: Erin,   instagram: 'https://www.instagram.com/not.erinbraganozo/' },
  { name: 'Gabbie Liu',             role: 'Mass Communications Chair',  photo: Gabbie,   instagram: 'https://www.instagram.com/gabbie101_2/' },
  { name: 'Matthew Yee',      role: 'Webmaster Chair',            photo: Matt,  instagram: 'https://www.instagram.com/yeematt/' },
  { name: 'Gabriel Goluch',        role: 'Rush Chair',                 photo: Gabe,  instagram: 'https://www.instagram.com/ggxluch/' },
  { name: 'Jeremiah Sylvain',     role: 'Rush Chair',                 photo: Jeremiah,     instagram: 'https://www.instagram.com/chxrrymia/' },
  { name: 'Nathanael Ang',          role: 'Rush Chair',                 photo: NateA,   instagram: 'https://www.instagram.com/nathanos24/' },
  { name: 'Nate Lacandazo',          role: 'Multimedia Chair',           photo: NateL,    instagram: 'https://www.instagram.com/natelacandazo/' },
  { name: 'Nikki Ngo',             role: 'Multimedia Chair',           photo: Nikki,    instagram: 'https://www.instagram.com/nikkino_o/' },
  { name: 'Reyhan Rahman',                role: 'Multimedia Chair',           photo: Reyhan,       instagram: 'https://www.instagram.com/rey_r__/' },
  { name: 'Elijah Maneja',            role: 'Advocacy Chair',             photo: Elijah,    instagram: 'https://www.instagram.com/elijah_m08/' },
  { name: 'Braylenn Liunoras',            role: 'Sports Chair',               photo: Braylenn,    instagram: 'https://www.instagram.com/braylennwho/' },
  { name: 'Tyson Jimerson',       role: 'Sports Chair',               photo: Tyson,  instagram: 'https://www.instagram.com/tysonjimerson' }
];


// ===========================================================================
// PAST BOARD — 2025-2026
// ===========================================================================

export const EBOARD_2025_2026 = [
  { name: 'Samantha Baldwin',                 role: 'Executive President',       photo: Sam,      instagram: 'https://www.instagram.com/samanthabwin/' },
  { name: 'Brian Paz',                        role: 'Executive Vice President',  photo: Brian,    instagram: 'https://www.instagram.com/bluebrainedbeing/' },
  { name: 'Gianna Guerrero',                  role: 'VP of Finance',             photo: Gianna,   instagram: 'https://www.instagram.com/giannaaag124/' },
  { name: 'Matthew Yee',                      role: 'VP of Internal Affairs',    photo: Matt,     instagram: 'https://www.instagram.com/yeematt/' },
  { name: 'Maria Angeline (Mia) Hernandez',   role: 'VP of Cultural Affairs',    photo: Mia,      instagram: 'https://www.instagram.com/miahernandez331/' },
  { name: 'Katheri Almeda',                   role: 'VP of Mass Communications', photo: Katheri,  instagram: 'https://www.instagram.com/katx3ri/' },
  { name: 'Dominique Fernandez',              role: 'VP of Membership',          photo: Dom,      instagram: 'https://www.instagram.com/angie.7284/' },
  { name: 'Chadrick Penalosa',                role: 'VP of Membership',          photo: Chadrick, instagram: 'https://www.instagram.com/chadrick_penalosa/' },
  { name: 'Max Skelton',                      role: 'VP of Multimedia',          photo: Max,      instagram: 'https://www.instagram.com/mskelton_4/' },
  { name: 'Bekzod Ismatulla',                 role: 'VP of External Affairs',    photo: Bekzod,   instagram: 'https://www.instagram.com/bombzod/' },
];

export const CBOARD_2025_2026 = [
  { name: 'Ellie-Jane Horton',      role: 'Fundraising Chair',          photo: Jane,     instagram: 'https://www.instagram.com/elliesmellieeee/' },
  { name: 'Kathryn Rzeckzkowski',   role: 'Fundraising Chair',          photo: Kate,     instagram: 'https://www.instagram.com/krezz9/' },
  { name: 'Liam Cervantes',         role: 'Philanthropy Chair',         photo: Liam,     instagram: 'https://www.instagram.com/liamb_theguy/' },
  { name: 'Noah Magpusao',          role: 'Philanthropy Chair',         photo: Noah,     instagram: 'https://www.instagram.com/no____ahh/' },
  { name: 'Luke Valian Malobay',    role: 'Dance Chair',                photo: Luke,     instagram: 'https://www.instagram.com/luke.valian/' },
  { name: 'María Elisa Navas',      role: 'Dance Chair',                photo: Mari,     instagram: 'https://www.instagram.com/mariverse._x/' },
  { name: 'Yazmina Fadloullah',     role: 'Dance Chair',                photo: Yazmina,  instagram: 'https://www.instagram.com/yazminaa/' },
  { name: 'Justin Fernandez',       role: 'Senior Advisor',             photo: Justin,   instagram: 'https://www.instagram.com/kusa.zz/' },
  { name: 'Iya Garcera',            role: 'Culture Chair',              photo: Iya,      instagram: 'https://www.instagram.com/iyagarcera/' },
  { name: 'Rebekah Barrera',        role: 'Culture Chair',              photo: Rebekah,  instagram: 'https://www.instagram.com/rebekahelize/' },
  { name: 'Andrew Lucas',           role: 'Culture Chair',              photo: Drew,     instagram: 'https://www.instagram.com/andrew.lcss/' },
  { name: 'Ava Pham',               role: 'Mass Communications Chair',  photo: Ava,      instagram: 'https://www.instagram.com/avaaphm/' },
  { name: 'Azille Latras',          role: 'Mass Communications Chair',  photo: Azille,   instagram: 'https://www.instagram.com/42i113/' },
  { name: 'Gahyun Kim',             role: 'Mass Communications Chair',  photo: Gahyun,   instagram: 'https://www.instagram.com/_gahyunkim315/' },
  { name: 'Lynette Hemingway',      role: 'Webmaster Chair',            photo: Lynette,  instagram: 'https://www.instagram.com/lynette_hemingway/' },
  { name: 'Abigail Johnson',        role: 'Rush Chair',                 photo: Abby,     instagram: 'https://www.instagram.com/abigailll831/' },
  { name: 'Alexandra Saclayan',     role: 'Rush Chair',                 photo: Alex,     instagram: 'https://www.instagram.com/alexandra.saclayan/' },
  { name: 'Elijah Maneja',          role: 'Rush Chair',                 photo: Elijah,   instagram: 'https://www.instagram.com/elijah_m08/' },
  { name: 'Mason Baptist',          role: 'Multimedia Chair',           photo: Mason,    instagram: 'https://www.instagram.com/mason.baptist/' },
  { name: 'Jerry Phan',             role: 'Multimedia Chair',           photo: Jerry,    instagram: 'https://www.instagram.com/jerrydphan/' },
  { name: 'PJ Gray',                role: 'Multimedia Chair',           photo: PJ,       instagram: 'https://www.instagram.com/pjgray01/' },
  { name: 'Laura Vuong',            role: 'Advocacy Chair',             photo: Laura,    instagram: 'https://www.instagram.com/litemints/' },
  { name: 'Jaden Ramos',            role: 'Sports Chair',               photo: Jaden,    instagram: 'https://www.instagram.com/somarnedaj/' },
  { name: 'Jasmine Escandor',       role: 'Sports Chair',               photo: Jasmine,  instagram: 'https://www.instagram.com/jasmine.escandor/' },
];