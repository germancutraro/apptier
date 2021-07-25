import { Draggable } from 'react-beautiful-dnd';
import * as S from './techListStyles';
import TechItem from '@components/TechItem/TechItem';

const TechList = ({ items, provided }) => (
  <div ref={provided.innerRef}>
    <p>Items: {items.length}</p>
    <S.ListContainer>
      {items?.map(({ id, title, Icon }, index) => (
        <Draggable key={id} draggableId={id} index={index}>
          {provided => <TechItem provided={provided} Icon={Icon} title={title} />}
        </Draggable>
      ))}
      {provided.placeholder}
    </S.ListContainer>
  </div>
);

export default React.memo(TechList);
