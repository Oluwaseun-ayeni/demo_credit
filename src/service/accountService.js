const db = require("../config/db");

module.exports = accountService = {
  getAll: async () => {
    const accounts = await db("account")
      .join("user", "user.id")
      .select(
        "account.*",
        "user.first_name",
        "user.last_name",
        "user.email",
        "user.bvn",
        "user.date_joined",
        "user.phone_num",
      );
    return accounts;
  },
  getById: async (id) => {
    console.log(id);
    const account = await db("account").where({ id });
    return account;
  },
  create: async (account) => {
    const accounts = await db("account").insert(account);
    return accounts;
  },
  update: async (id, account) => {
    const accounts = await db("account").where("id", id).update({
      acc_balance: account.acc_balance,
      acc_no: account.acc_no,
    });
    return accounts;
  },
  delete: async (id) => {
    const accounts = await db("accounts").where("id", id).del();
    return accounts;
  },
};