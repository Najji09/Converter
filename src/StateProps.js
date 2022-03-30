import React from 'react';
import units from './units.json';
import Converter from './Converter';
import Options from './Options';

const StateProps = () => {
  const [index, setIndex] = React.useState(0);
  const [amount, setAmount] = React.useState('');

  const onSelect = (event) => {
    setIndex(Number(event.target.value));
    setAmount(() => '');
  };
  const converterSwitch = (a) => {
    if (a === 0) {
      return <h1>Select a unit</h1>;
    } else {
      return (
        <Converter
          amount={amount}
          setAmount={setAmount}
          unit1={units[a].unit1}
          unit2={units[a].unit2}
          unitConvert={units[a].unitConvert}
        />
      );
    }
  };
  return (
    <div>
      <h1> Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <Options />
      </select>
      <hr />
      {converterSwitch(index)}
    </div>
  );
};

export default StateProps;
