import { TechIconWrapper } from '../TechItem/techItemStyles';
import * as S from './boardItemStyles';

const BoardItem = ({ provided, Icon, title }) => (
  <S.ItemContainer ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
    <TechIconWrapper>
      <Icon />
    </TechIconWrapper>
    <S.ItemTitle>{title}</S.ItemTitle>
  </S.ItemContainer>
);

export default BoardItem;
