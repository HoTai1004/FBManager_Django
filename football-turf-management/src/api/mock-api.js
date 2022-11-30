import { waitTimeout } from "../utils/async";
import { turfs } from "./sample-data";

export const guestApi = {
  signUp: () => { },
  signIn: () => { },
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
