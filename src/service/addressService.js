const db = require("../config/db");

module.exports = accountService = {
  getAll: async () => {
    const addresses = await db("address")
      .join("user", "user.id")
      .select(
        "address.*",
        "user.first_name",
        "user.last_name",
        "user.email",
        "user.bvn",
        "user.date_joined",
        "user.phone_num",
      );
    return addresses;
  },
  getById: async (id) => {
    console.log(id);
    const address = await db("address").where({ id });
    return address;
  },
  create: async (address) => {
    const addresses = await db("address").insert(address);
    return addresses;
  },
  update: async (id, address) => {
    const addresses = await db("address").where("id", id).update({
      num: address.num,
      state: address.state,
      city: address.city
    });
    return addresses;
  },
  delete: async (id) => {
    const addresses = await db("addresses").where("id", id).del();
    return addresses;
  },
};