import React from 'react';

function UnitButton({ handleToggleUnit, tempIsCelsius }) {
    return(
        <button className="unitBtn" onClick={handleToggleUnit}>
          {tempIsCelsius ? 'show temp in °F' : 'show temp in °C'}
        </button>
    );
}

export default UnitButton;