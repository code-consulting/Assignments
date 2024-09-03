/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week3#exercise-6-total-cost-is

You want to buy a couple of things from the supermarket to prepare for a party.
After scanning all the items the cashier wants to give you the total price, but
the machine is broken! Let's write her a function that does it for her
instead!

1. Create an object named `cartForParty` with five properties. Each property
   should be a grocery item (like `beers` or `chips`) and hold a number value
   (like `1.75` or `0.99`).

2. Complete the function called `calculateTotalPrice`.

   - It takes one parameter: an object that contains properties that only contain
     number values.
   - Loop through the object and add all the number values together.
   - Return a string: "Total: €`amount`".

3. Complete the unit test functions and verify that all is working as expected.
-----------------------------------------------------------------------------*/
const cartForParty = {
  cola: 2.55,
  fanta: 1.95,
  pepsi: 2.35,
  chips: 3.49,
  pie: 8.19,
};

function calculateTotalPrice(cart) {
  let totalCost = 0;
  Object.values(cart).forEach((price) => (totalCost += price));
  return `Total: €${totalCost.toFixed(2)}`;
}

function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  const parameter = 1;
  console.assert(parameter === calculateTotalPrice.length);
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  const expected = `Total: €18.53`;
  const actual = calculateTotalPrice(cartForParty);
  console.assert(expected === actual);
}

function test() {
  test1();
  test2();
}

test();
