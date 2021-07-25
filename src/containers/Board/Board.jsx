import { Droppable } from 'react-beautiful-dnd';
import BoardList from '@components/BoardList/BoardList';

const Board = ({ items }) => (
  <Droppable droppableId="board">{provided => <BoardList items={items} provided={provided} />}</Droppable>
);

export default Board;
