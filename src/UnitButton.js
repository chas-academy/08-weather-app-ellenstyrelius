import React from 'react';

function UnitButton({ handleToggleUnit, tempInCelsius }) {
    return(
        <button className="unitBtn" onClick={handleToggleUnit}>
          {tempInCelsius ? 'fahrenheit' : 'celsius'}
        </button>
    );
}

export default UnitButton;