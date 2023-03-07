
import ContactForm from './PhonebookForm/PhonebookForm';
import PhoneList from './PhoneList/PhoneList';
import PhoneBookFilter from './PhonebookFilter/PhonebookFilter';


const App = () => {

  return (
    <section>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <PhoneBookFilter/>
      <PhoneList/>
      </section>
  );
};

export default App;
