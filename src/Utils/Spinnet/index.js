import React from 'react';

import * as C from './styles';

function Spinner() {
  return (
      <C.Container>
          <div class="lds-ring"> <div></div> <div></div> <div></div> <div></div> </div>
      </C.Container>
  );
}

export default Spinner;