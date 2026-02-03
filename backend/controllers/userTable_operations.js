import { User } from "../models/user.js";

async function insertArow(name, email) {
  try {
    const user = await User.create({
      name,
      email,
    });
    return user;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function userExists(name, email) {
  try {
    const user = await User.findOne({
      where: {
        name,
        email,
      },
    });

    return !!user; // true if exists, false if not
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export { insertArow, userExists };
