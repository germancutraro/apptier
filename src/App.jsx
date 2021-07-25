import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Board from '@containers/Board/Board';
import Langs from '@containers/Tech/Tech';
import LambdaIcon from '../public/svgs/aws/lambda.svg?component';

const Languages = [
  {
    id: 'aws_lambda',
    content: 'AWS Lambda',
    Icon: LambdaIcon
  }
];

const App = () => {
  const [items, setItems] = useState(Languages);
  const [selected, setSelected] = useState([]);

  const getList = id => (id === 'board' ? selected : items);

  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = result => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) return;

    if (source.droppableId === destination.droppableId) {
      const items = reorder(getList(source.droppableId), source.index, destination.index);

      if (source.droppableId === 'board') setSelected(items);
      else setItems(items);
    } else {
      const result = move(getList(source.droppableId), getList(destination.droppableId), source, destination);

      setItems(result.droppable);
      setSelected(result.board);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Board items={selected} />
      <Langs items={items} />
    </DragDropContext>
  );
};

export default App;
