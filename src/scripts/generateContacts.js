import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contactsList = await readContacts();

  const newContacts = Array(number).fill(0).map(createFakeContact);
  const newList = [...contactsList, ...newContacts];
  await writeContacts(newList);
  console.log(newList);
};

generateContacts(5);
