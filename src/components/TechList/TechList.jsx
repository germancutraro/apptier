import { Draggable } from 'react-beautiful-dnd';
import * as S from './techListStyles';
import TechItem from '@components/TechItem/TechItem';

const TechList = ({ items, provided }) => (
  <S.ListContainer ref={provided.innerRef}>
    {items?.map(({ id, content, Icon }, index) => (
      <Draggable key={id} draggableId={id} index={index}>
        {provided => <TechItem provided={provided} Icon={Icon} title={content} />}
      </Draggable>
    ))}
    {provided.placeholder}
  </S.ListContainer>
);

export default React.memo(TechList);
