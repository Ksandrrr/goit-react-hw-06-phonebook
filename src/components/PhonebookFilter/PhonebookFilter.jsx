import { setFilter } from '../../redux/filter/filter-slice';
import { getFilter } from '../../redux/filter/filter-selectors';
import { useSelector, useDispatch } from 'react-redux';
const PhoneBookFilter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const saveFilterValue = ({ target }) => {
    const { value } = target;
    dispatch(setFilter(value));
  };

  return (
    <input
      type="text"
      name="filter"
      title="Search Contacts"
      onChange={saveFilterValue}
      value={filter}
    />
  );
};

export default PhoneBookFilter;
