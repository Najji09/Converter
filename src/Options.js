import React from 'react';
import units from './units.json';
const Option = (props) => {
  return (
    <option value={props.i}>
      {props.unit1} and {props.unit2}
    </option>
  );
};
const Options = () => {
  return units.map((unit, index) => {
    if (index === 0) {
      return (
        <option key="0" value="0">
          Select a unit
        </option>
      );
    }
    return (
      <Option
        i={index.toString()}
        unit1={unit.unit1}
        unit2={unit.unit2}
        key={index.toString()}
      />
    );
  });
};
export default Options;
