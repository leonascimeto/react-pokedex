import normal from '../assets/icons/types/normal.png';
import fighting from '../assets/icons/types/fighting.png';
import flying from '../assets/icons/types/flying.png';
import poison from '../assets/icons/types/poison.png';
import ground from '../assets/icons/types/ground.png';
import rock from '../assets/icons/types/rock.png';
import bug from '../assets/icons/types/bug.png';
import ghost from '../assets/icons/types/ghost.png';
import steel from '../assets/icons/types/steel.png';
import fire from '../assets/icons/types/fire.png';
import water from '../assets/icons/types/water.png';
import grass from '../assets/icons/types/grass.png';
import electric from '../assets/icons/types/electric.png';
import psychic from '../assets/icons/types/psychic.png';
import ice from '../assets/icons/types/ice.png';
import dragon from '../assets/icons/types/dragon.png';
import dark from '../assets/icons/types/dark.png';
import fairy from '../assets/icons/types/fairy.png';
import unknow from '../assets/icons/types/unknow.png';
import shadow from '../assets/icons/types/shadow.png';

const typesIc = [
  {
    type: 'normal',
    img: normal
  },
  {
    type: 'fighting',
    img: fighting
  },
  {
    type: 'flying',
    img: flying
  },
  {
    type: 'poison',
    img: poison
  },
  {
    type: 'ground',
    img: ground
  },
  {
    type: 'rock',
    img: rock
  },
  {
    type: 'bug',
    img: bug
  },
  {
    type: 'ghost',
    img: ghost
  },
  {
    type: 'steel',
    img: steel
  },
  {
    type: 'fire',
    img: fire
  },
  {
    type: 'water',
    img: water
  },
  {
    type: 'grass',
    img: grass
  },
  {
    type: 'psychic',
    img: psychic
  },
  {
    type: 'electric',
    img: electric
  },
  {
    type: 'ice',
    img: ice
  },
  {
    type: 'dragon',
    img: dragon
  },
  {
    type: 'dark',
    img: dark
  },
  {
    type: 'fairy',
    img: fairy
  },
  {
    type: 'unknow',
    img: unknow
  },
  {
    type: 'shadow',
    img: shadow
  }
];

function returnIconType(params) {
  const typeSelect = typesIc.find(item => item.type === params);
  return typeSelect.img;

}

export default returnIconType;