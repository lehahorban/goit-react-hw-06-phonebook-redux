import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import shortid from 'shortid';
import style from '../components/Style.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts, removeContacts, filterContacts } from '../redux/actions';
import { getContacts, getFilter, getFilterContacts } from '../redux/selectors';

function App() {
  const contacts = useSelector(getFilterContacts);
  const filter = useSelector(getFilter);
  console.log(contacts);
  const dispatch = useDispatch();
  const onAddContact = payload => {
    const actions = addContacts(payload);
    dispatch(actions);
    console.log(actions);
  };

  const onRemoveContact = payload => {
    dispatch(removeContacts(payload));
  };

  const onFilterContact = event => {
    dispatch(filterContacts(event.target.value));
  };
  return (
    <div className={style.app}>
      <p>Phonebook</p>
      <ContactForm onAddContact={onAddContact} />

      <Filter filter={filter} onChange={onFilterContact} />

      <ContactList contacts={contacts} deleteUser={onRemoveContact} />
    </div>
  );
}

export default App;

// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// import shortid from 'shortid';
// import style from '../components/Style.module.css';
// import { useState, useEffect } from 'react';

// function App() {
//   const [contacts, setContacts] = useState([
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ]);

//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     const contacts = localStorage.getItem('contacts');
//     const contactsParse = JSON.parse(contacts);

//     if (contactsParse) {
//       setContacts(contactsParse);
//     } else {
//       return;
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const addContacts = getContact => {
//     const { name, number } = getContact;

//     const contact = contacts.find(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );
//     if (contact) {
//       alert(`Contact ${name} already exists`);
//       return;
//     }
//     return setContacts(contacts => [
//       ...contacts,
//       { id: shortid.generate(), name: name, number: number },
//     ]);
//   };

//   const filterContacts = event => {
//     setFilter(event.currentTarget.value);
//   };

//   const deleteUser = user => {
//     setContacts(contacts.filter(userName => userName !== user));
//   };

//   const filterContact = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div className={style.app}>
//       <p>Phonebook</p>
//       <ContactForm onAddContact={addContacts} />

//       <Filter filter={filter} onChange={filterContacts} />

//       <ContactList filterContact={filterContact} deleteUser={deleteUser} />
//     </div>
//   );
// }

// export default App;
