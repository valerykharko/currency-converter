import { $host } from "../controllers/config.js";
import { getBasis } from "./getBasis.js";

export async function getMainCurrencies() {
  const { data } = await $host.get("?periodicity=0");

  let basis = await getBasis().then((payload) => {
    return payload;
  });

  let mainCurrencies = [];
  data.map((elem) => {
    if (elem.Cur_Abbreviation === "USD" || elem.Cur_Abbreviation === "EUR") {
      mainCurrencies.push(elem);
    }
  });

  const BYN = {
    Cur_Abbreviation: "BYN",
    Cur_Name: "Белорусских рублей",
    Cur_Scale: 1,
  };
  mainCurrencies.push(BYN);

  data.map((elem) => {
    if (elem.Cur_Abbreviation === "RUB") {
      mainCurrencies.push(elem);
    }
  });

  mainCurrencies.map((elem) => {
    if (elem.Cur_Abbreviation === "BYN") {
      elem.value = basis;
    } else if (elem.Cur_Abbreviation === "RUB") {
      let course = elem.Cur_OfficialRate;
      let number = elem.Cur_Scale;
      let verity = Math.round(((basis * number) / course) * 100) / 100;
      elem.value = verity;
    } else {
      let course = elem.Cur_OfficialRate;
      let number = elem.Cur_Scale;
      let verity = Math.round(((basis * number) / course) * 10000) / 10000;
      elem.value = verity;
    }
  });

  return mainCurrencies;
}
