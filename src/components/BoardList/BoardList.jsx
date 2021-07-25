import { Draggable } from 'react-beautiful-dnd';
import BoardItem from '@components/BoardItem/BoardItem';
import * as S from './boardListStyles';

const BoardList = ({ items, provided }) => (
  <S.ListContainer ref={provided.innerRef}>
    {items?.map(({ id, title, Icon }, index) => (
      <Draggable key={id} draggableId={id} index={index}>
        {provided => <BoardItem provided={provided} title={title} Icon={Icon} />}
      </Draggable>
    ))}
    {provided.placeholder}
  </S.ListContainer>
);

export default React.memo(BoardList);
