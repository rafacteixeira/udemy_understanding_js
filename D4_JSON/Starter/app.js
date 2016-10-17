var objectLiteral = {
  firstName: "Rafael",
  isAProgrammer: true
}

console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{ "firstName": "Rafael", "isAProgrammer": true}');

console.log(jsonValue);
