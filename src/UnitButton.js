import React from 'react';

import Button from './utils/Button';

function UnitButton({ handleToggleUnit, tempIsCelsius }) {
    return(
        <Button className="unitBtn" onClick={handleToggleUnit}>
          {tempIsCelsius ? 'show temp in °F' : 'show temp in °C'}
        </Button>
    );
}

export default UnitButton;