/** @format */

import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { getSpecial, getRoles } from "@/server";
import type { specialObject, rolesObject } from "./type";

export const useStore = defineStore({
  id: "counter",
  state: () => ({
    special: <specialObject>{},
    roles: <rolesObject>{},
  }),
  actions: {
    async getRoles() {
      const result = await getRoles();
      this.special = result;
      console.log(result);
    },
    async getSpecial() {
      const result = await getSpecial();
      this.roles = result;
      console.log(result);
    },
  },
});
