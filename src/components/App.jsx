
import ContactForm from './PhonebookForm/PhonebookForm';
import PhoneList from './PhoneList/PhoneList';
import PhoneBookFilter from './PhonebookFilter/PhonebookFilter';


import {
  addContacts,
  deleteContacts,
} from '../redux/phonebook/phonebook-slice';
import { setFilter } from '../redux/filter/filter-slice';

import {
  getContacts,
  getFilterContacts,
} from '../redux/phonebook/phonebook-selectors';
import { getFilter } from '../redux/filter/filter-selectors';

import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const contacts = useSelector(getContacts);
  const filteredBooks = useSelector(getFilterContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const onAddContacts = ({ name, number }) => {
    if (isDublicate(name, number)) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContacts({ name, number }));
  };

  const saveFilterValue = ({ target }) => {
    const { value } = target;
    dispatch(setFilter(value));
  };

  const isDublicate = (name, number) => {
    const normalizedName = name.toLowerCase();
    const normalizedPhone = number.toLowerCase();
    const dublicate = contacts.find(contact => {
      return (
        contact.name.toLowerCase() === normalizedName &&
        contact.number.toLowerCase() === normalizedPhone
      );
    });
    return Boolean(dublicate);
  };
  const delateContacts = id => {
    dispatch(deleteContacts(id));
  };

  return (

    <section>
      <h1>Phonebook</h1>
      <ContactForm onAddContacts={onAddContacts} contacts={contacts} />
      <h2>Contacts</h2>
      <PhoneBookFilter saveFilterValue={saveFilterValue} Filter={filter} />
      <PhoneList items={filteredBooks} delateContacts={delateContacts} />
      </section>

  );
};

export default App;
