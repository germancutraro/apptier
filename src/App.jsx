import { useState } from 'react';
import { TechDataList } from '@common/constants';
import GlobalStyles from '@common/styles';
// containers
import Drag from '@containers/Drag/Drag';
import Board from '@containers/Board/Board';
import Langs from '@containers/Tech/Tech';

const App = () => {
  const [items, setItems] = useState(TechDataList);
  const [selected, setSelected] = useState([]);

  return (
    <>
      <GlobalStyles />
      <Drag selected={selected} items={items} setItems={setItems} setSelected={setSelected}>
        <Board items={selected} />
        <Langs items={items} />
      </Drag>
    </>
  );
};

export default App;
