import React from 'react';
import PropTypes from 'prop-types';
import { FilterWrapper, FilterInput } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterWrapper>
      Find contacts by name
      <FilterInput type="text" value={value} onChange={onChange} />
    </FilterWrapper>
  );
};

export { Filter };

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};