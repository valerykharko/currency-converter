import { $host } from "../controllers/config.js";
import { getBasis } from "./getBasis.js";

export async function getNewCurrencies() {
  const { data } = await $host.get("?periodicity=0");

  let basis = await getBasis().then((payload) => {
    return payload;
  });

  let newCurrencies = [];
  data.map((elem) => {
    if (
      elem.Cur_Abbreviation !== "USD" &&
      elem.Cur_Abbreviation !== "EUR" &&
      elem.Cur_Abbreviation !== "RUB"
    ) {
      newCurrencies.push(elem);
    }
  });

  newCurrencies.map((elem) => {
    let course = elem.Cur_OfficialRate;
    let number = elem.Cur_Scale;
    let verity = Math.round(((basis * number) / course) * 10000) / 10000;
    elem.value = verity;
  });

  return newCurrencies;
}
