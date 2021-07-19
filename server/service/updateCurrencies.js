export async function updateCurrencies(collection, currencies) {
  let basis;
  for (let i = 0; i < currencies.length; i++) {
    if (collection.name === "BYN") {
      basis = collection.value;
    }
    if (collection.name === currencies[i].Cur_Abbreviation) {
      basis =
        Math.round(
          ((collection.value * currencies[i].Cur_OfficialRate) /
            currencies[i].Cur_Scale) *
            10000
        ) / 10000;
      if (collection.value !== currencies[i].value) {
        currencies[i].value = collection.value;
      }
    }
  }

  currencies.map((elem) => {
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

  const data = [];
  data.push(currencies, basis);

  return data;
}
