import { Draggable } from 'react-beautiful-dnd';
import * as S from './techListStyles';
import TechItem from '@components/TechItem/TechItem';

const TechList = ({ items, provided }) => (
  <S.ListContainer ref={provided.innerRef}>
    {items?.map(({ id, title, Icon }, index) => (
      <Draggable key={id} draggableId={id} index={index}>
        {provided => <TechItem provided={provided} Icon={Icon} title={title} />}
      </Draggable>
    ))}
    {provided.placeholder}
  </S.ListContainer>
);

export default React.memo(TechList);
