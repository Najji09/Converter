import React, { useCallback } from 'react';

function Converter({ unit1, unit2, unitConvert, amount, setAmount }) {
  const reset = () => {
    setAmount('');
  };
  const onChange = useCallback(
    (event) => {
      setAmount(event.target.value);
    },
    [setAmount]
  );

  const [flipped, SetFlipped] = React.useState(false);
  const onFlip = () => {
    reset();
    SetFlipped((current) => !current);
  };

  return (
    <div>
      <h3>
        {unit1} and {unit2}
      </h3>
      <div>
        <label htmlFor={unit1}>{unit1}</label>
        <input
          id={unit1}
          placeholder={unit1}
          type="number"
          value={flipped ? amount * unitConvert : amount}
          onChange={onChange}
          disabled={flipped}
        />
      </div>
      <br />
      <div>
        <label htmlFor={unit2}>{unit2}</label>
        <input
          value={
            flipped ? amount : Math.round((amount / unitConvert) * 100) / 100
          }
          id={unit2}
          placeholder={unit2}
          type="
          number"
          disabled={!flipped}
          onChange={onChange}
        />
      </div>
      <button onClick={reset}>Reset button</button>
      <button onClick={onFlip}>
        Type
        {flipped ? unit1 : unit2}
      </button>
    </div>
  );
}

export default Converter;
