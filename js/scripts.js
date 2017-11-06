function Mushroom (color, shape, group) {
  this.color = color;
  this.shape = shape;
  this.group = group;
};

var buttonMush = new Mushroom ("brown", "round", "single");
var henOfTheWoods = new Mushroom ("white", "ruffled", "grouped");
var lobster = new Mushroom ("red", "ruffled", "single");

// var mushrooms = [buttonMush, henOfTheWoods, lobster]

var mushrooms = [
  { 'mushroom': 'lobster', 'color': 'red' },
  { 'mushroom': 'hen of the woods',   'color': 'white' }
];

var filter = function (){
  _.filter(mushrooms, { 'color': 'red'});
};


$(document).ready(function(){
  $('#results').append();
  $(".btn-info").click(function(event) {
    $("#results").show();

    event.preventDefault();
  });
});
