import * as S from './techItemStyles';

const TechItem = ({ provided, Icon, title }) => (
  <S.TechItem ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
    <S.TechIconWrapper>
      <Icon />
    </S.TechIconWrapper>
    <S.TechTitle>{title}</S.TechTitle>
  </S.TechItem>
);

export default TechItem;
