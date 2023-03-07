import Style from '../Component.module.css';

import { getFilterContacts } from '../../redux/phonebook/phonebook-selectors';
import { deleteContacts } from '../../redux/phonebook/phonebook-slice';
import { useSelector, useDispatch } from 'react-redux';

const PhoneList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilterContacts);

  const elements = filteredContacts.map(({ id, name, number }) => (
    <li key={id} className={Style.list}>
      {name} ({number})
      <button onClick={() => dispatch(deleteContacts(id))} className={Style.btnDelate}>
        Delete
      </button>
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default PhoneList;
