import React from 'react';

function UnitButton({ handleToggleUnit, tempIsCelsius }) {
    return(
        <button className="unitBtn" onClick={handleToggleUnit}>
          {tempIsCelsius ? 'fahrenheit' : 'celsius'}
        </button>
    );
}

export default UnitButton;