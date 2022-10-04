import { FilterLable, FilterInput, FilterBlock } from './Filter.style';

function Filter({ value, onChange }) {
  console.log(value);

  return (
    <FilterBlock>
      <FilterLable>
        Find contacts by name
        <FilterInput type="text" value={value} onChange={onChange} />
      </FilterLable>
    </FilterBlock>
  );
}

export default Filter;
