import * as fs from 'node:fs/promises';

import { PATH_DB } from '../constants/constants.js';

export const writeContacts = async (contacts) => {
  await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
};
