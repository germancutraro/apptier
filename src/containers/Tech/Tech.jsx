import { Droppable } from 'react-beautiful-dnd';
import TechList from '@components/TechList/TechList';

const Tech = ({ items }) => (
  <Droppable droppableId="droppable">{provided => <TechList items={items} provided={provided} />}</Droppable>
);

export default Tech;
