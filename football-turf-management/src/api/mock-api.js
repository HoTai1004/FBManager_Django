import { waitTimeout } from "../utils/async";
import { turfs, accounts } from "./sample-data";

export const authenticateApi = {
  signUp: () => { },

  signIn: async ({ username, password }) => {
    await waitTimeout(500);
    const user = accounts.users.find(
      (user) => user.username === username && user.password === password
    );
    return user;
  },
};

export const authApi = {

  getTurfList: async () => {
    await waitTimeout(500);
    return turfs;
  },

  getTurf: async (turfId) => {
    await waitTimeout(500);
    return turfs.find((turf) => turf.id === turfId);
  },
}; 
