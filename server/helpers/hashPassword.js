/* eslint-disable max-len */
import bcrypt from 'bcrypt';

export const hashPlainTextPassword = (password) => bcrypt.hashSync(password, 10);
export const comparePassword = (plainPassword, hashedPassword) => bcrypt.compareSync(plainPassword, hashedPassword);
