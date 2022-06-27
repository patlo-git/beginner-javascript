// import currencies from "./currencies.js";

// how to On Demand load some data from a module
export async function handleButtonClick(event) {
  // import does the same thing as import above
  // const currenciesModule = await import('./currencies.js');

  // can DESTRUCTURE here, too
  // if you have a property called default, which isn't allowed in JS to have a variable named default, you use destructuring renaming to something else
  const { localCurrency, default: currency } = await import('./currencies.js');
  console.log(localCurrency, currency);
}