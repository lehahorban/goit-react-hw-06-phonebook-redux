import PropTypes from 'prop-types';
import shortid from 'shortid';
import style from './ContactList.module.css';

function ContactList({ contacts, deleteUser }) {
  return (
    <ul className={style.list}>
      <p>Contact</p>
      {contacts.map(({ id, name, number }) => (
        <li key={shortid.generate()}>
          {name}: {number}
          <button onClick={() => deleteUser(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

// import PropTypes from 'prop-types';
// import shortid from 'shortid';
// import style from './ContactList.module.css';

// function ContactList({ filterContact, deleteUser }) {
//   return (
//     <ul className={style.list}>
//       <p>Contact</p>
//       {filterContact.map(item => (
//         <li key={shortid.generate()}>
//           {item.name}: {item.number}
//           <button onClick={() => deleteUser(item)}>Delete</button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// ContactList.propTypes = {
//   filterContact: PropTypes.array.isRequired,
//   deleteUser: PropTypes.func.isRequired,
// };

export default ContactList;
