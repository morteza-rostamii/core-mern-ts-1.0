import { db } from "../../configs/db.config.js"

const userModel = {

  // get users
  getUsers: async function() {
    const users = await db.user.findMany();
    return users;
  },

}

export default userModel