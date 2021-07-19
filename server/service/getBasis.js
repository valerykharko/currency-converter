import { $host } from "../controllers/config.js";

export async function getBasis() {
  const { data } = await $host.get("?periodicity=0");

  let basis;

  data.map((elem) => {
    if (elem.Cur_Abbreviation === "USD") {
      basis = elem.Cur_OfficialRate;
    }
  });

  return basis;
}
