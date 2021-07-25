import * as S from './boardCategoryStyles';

const BoardCategory = ({ category }) => (
  <S.CategoryContainer>
    <S.CategoryTitle>{category}</S.CategoryTitle>
  </S.CategoryContainer>
);

export default BoardCategory;
