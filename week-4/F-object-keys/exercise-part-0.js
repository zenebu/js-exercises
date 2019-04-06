/*

Return the keys of the following object

*/

var capitalCities = {
  scotland: "Edinburgh",
  kenya: "Nairobi",
  australia: "Canberra",
  canada: "Ottawa"
};

var highScores = {
  55: "Alistair",
  100: "David",
  89: "Hannah",
  34: ["Sergi", "Frank"]
};

// ONLY EDIT BELOW HERE

var capitalCities = object.keys(capitalCities);
var highScores = object.keys(highScores);
console.log(object.keys(capitalCities));
console.log(object.keys(highScores));

// ONLY EDIT ABOVE HERE

console.log(capitalCitiesKeys);
// prints [ 'scotland', 'kenya', 'australia', 'canada' ]

console.log(highScoresKeys);
// prints ['34, '55', '89', '100']
