const db = require('../config/db');

module.exports = userService = {
  getAll: async () => {
    const users = await db("user");
    return users;
  },
  getById: async (id) => {
    const user = await db("user").where("id", id);
    return user;
  },
  create: async (user) => {
    const users = await db("user").insert(user);
    return users;
  },
  update: async (id, user) => {
    const users = await db("user").where("id", id).update({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      bvn: user.bvn,
      date_joined: user.date_joined,
      phone: user.phone_num,
    });
    return users;
  },
  delete: async (id) => {
    const users = await db("users").where("id", id).del();
    return users;
  },
};
