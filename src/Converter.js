import React from 'react';

function Converter(props) {
  const [amount, setAmount] = React.useState('');
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const reset = () => {
    setAmount(0);
  };
  const [flipped, SetFlipped] = React.useState(false);
  const onFlip = () => {
    reset();
    SetFlipped((current) => !current);
  };

  return (
    <div>
      <h3>
        {props.unit1} and {props.unit2}
      </h3>
      <div>
        <label htmlFor={props.unit1}>{props.unit1}</label>
        <input
          id={props.unit1}
          placeholder={props.unit1}
          type="number"
          value={flipped ? amount * props.unitConvert : amount}
          onChange={onChange}
          disabled={flipped}
        />
      </div>
      <br />
      <div>
        <label htmlFor={props.unit2}>{props.unit2}</label>
        <input
          value={
            flipped
              ? amount
              : Math.round((amount / props.unitConvert) * 10) / 10
          }
          id={props.unit2}
          placeholder={props.unit2}
          type="
          number"
          disabled={!flipped}
          onChange={onChange}
        />
      </div>
      <button onClick={reset}>Reset button</button>
      <button onClick={onFlip}>
        Type
        {flipped ? props.unit1 : props.unit2}
      </button>
    </div>
  );
}

export default Converter;
