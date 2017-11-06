function Mushroom (color, shape, group) {
  this.color = color;
  this.shape = shape;
  this.group = group;
};

var buttonMush = new Mushroom ("brown", "round", "single");
var henOfTheWoods = new Mushroom ("white", "ruffled", "grouped");
var lobster = new Mushroom ("red", "ruffled", "single");

var mushrooms = [];
mushrooms.push(buttonMush);
mushrooms.push(henOfTheWoods);
mushrooms.push(lobster);

var filterCriteria = function(params){
  var criteria = {};
  _.forEach(params, function(param){
    _.extend(criteria, param);
  });
  return criteria;
}

var search = filterCriteria([{color: "red"}]);
var filteredShrooms = _.filter(mushrooms, search);

$(document).ready(function(){
  $(".btn-info").click(function(event) {
    $("#results").show();
    console.log(filteredShrooms);
    event.preventDefault();
  });
});
