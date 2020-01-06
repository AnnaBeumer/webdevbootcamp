var header =
  "===================" +
  "\n" +
  "WELCOME TO MY SHOP!" +
  "\n" +
  "=================== ";
var faker = require("faker");

console.log(header);
for (var i = 0; i < 10; i++) {
  console.log(faker.fake("{{commerce.productName}} - ${{commerce.price}}"));
}
