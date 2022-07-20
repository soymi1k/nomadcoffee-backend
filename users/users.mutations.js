import client from "../client";
import bcrypt from "bcrypt";

export default {
  Mutation: {
    createAccount: async (
      _,
      { username, email, name, location, password, avatarURL, githubUsername }
    ) => {
      const existingUser = await client.user.findFirst({
        where: {
          OR: [
            {
              username,
            },
            {
              email,
            },
          ],
        },
      });
      if (existingUser) {
        return {
          ok: false,
          error: "User/ email already exist",
        };
      }
      const uglyPassword = await bcrypt.hash(password, 10);
      const sendData = await client.user.create({
        data: {
          username,
          email,
          name,
          location,
          avatarURL,
          password: uglyPassword,
          githubUsername,
        },
      });
      return { sendData, ok: true };
    },
  },
};
