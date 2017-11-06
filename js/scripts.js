function Mushroom (name, color, shape, group) {
  this.name = name;
  this.color = color;
  this.shape = shape;
  this.group = group;
};

var buttonMush = new Mushroom ("Button", "brown", "round", "single");
var henOfTheWoods = new Mushroom ("Hen of The Woods", "white", "ruffled", "grouped");
var lobster = new Mushroom ("Lobster", "red", "ruffled", "single");
var blueChanterelle = new Mushroom ("Blue Chanterelle", "blue", "ruffled", "grouped");

var mushrooms = [];
mushrooms.push(buttonMush);
mushrooms.push(henOfTheWoods);
mushrooms.push(lobster);
mushrooms.push(blueChanterelle);

var filterCriteria = function(params){
  var criteria = [];
  _.forEach(params, function(param){
    _.extend(criteria, param);
  });
  return criteria;
};

// var search = filterCriteria([{color: "red"}]);


$(document).ready(function(){
  $("#blue").click(function(event) {
    var search = filterCriteria([{shape: "ruffled"}]);
    var filteredShrooms = _.filter(mushrooms, search);
    for(var i = 0; i < filteredShrooms.length; i++){
      $("#results").show().append(filteredShrooms[i].name + "<br>");
    }
    event.preventDefault();
  });
});
