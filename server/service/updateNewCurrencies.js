export function updateNewCurrencies(collection, currencies, basis) {
  
  currencies.map((elem) => {
    let course = elem.Cur_OfficialRate;
    let number = elem.Cur_Scale;
    let verity = Math.round(((basis * number) / course) * 10000) / 10000;
    elem.value = verity;
  });

  return currencies;
}
