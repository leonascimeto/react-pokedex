import cave from '../assets/icons/habitats/cave.png';
import forest from '../assets/icons/habitats/forest.png';
import grassland from '../assets/icons/habitats/grassland.png';
import mountain from '../assets/icons/habitats/mountain.png';
import rare from '../assets/icons/habitats/rare.png';
import roughTerrain from '../assets/icons/habitats/rough-terrain.png';
import sea from '../assets/icons/habitats/sea.png';
import urban from '../assets/icons/habitats/urban.png';
import watersEdge from '../assets/icons/habitats/waters-edge.png';
import unknow from '../assets/icons/habitats/unknow.png';

const habitatsIc = [
  {
    habitat: 'cave',
    img: cave
  },
  {
    habitat: 'forest',
    img: forest
  },
  {
    habitat: 'grassland',
    img: grassland
  },
  {
    habitat: 'mountain',
    img: mountain
  },
  {
    habitat: 'rare',
    img: rare
  },
  {
    habitat: 'rough-terrain',
    img: roughTerrain
  },
  {
    habitat: 'sea',
    img: sea
  },
  {
    habitat: 'urban',
    img: urban
  },
  {
    habitat: 'waters-edge',
    img: watersEdge
  },
  {
    habitat: 'unknow',
    img: unknow
  }
];

function returnIconHabitat(params) {
  const habitatSelect = habitatsIc.find(item => item.habitat === params);
  return habitatSelect.img;

}

export default returnIconHabitat;