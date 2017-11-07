function Mushroom (name, color, shape, group) {
  this.name = name;
  this.color = color;
  this.shape = shape;
  this.group = group;
};

var buttonMush = new Mushroom ("Button", "brown", "round", "single");
var morell = new Mushroom ("Morell", "brown", "spear", "single");
var turkeyTail = new Mushroom ("Turkey Tail", "brown", "flat", "grouped");
var henOfTheWoods = new Mushroom ("Hen of The Woods", "white", "ruffled", "grouped");
var lionsMane = new Mushroom ("Lions Mane", "white", "ruffled", "grouped");
var lobster = new Mushroom ("Lobster", "red", "ruffled", "single");
var blueChanterelle = new Mushroom ("Blue Chanterelle", "blue", "ruffled", "grouped");
var indigoMilkcap = new Mushroom ("Indigo Milkcap", "blue", "round", "single");
var chanterelle = new Mushroom ("Chanterelle", "gold", "ruffled", "grouped");
var jackOLantern = new Mushroom ("Jack-O-Lantern", "gold", "concave", "grouped");


var mushrooms = [];
mushrooms.push(buttonMush);
mushrooms.push(henOfTheWoods);
mushrooms.push(lobster);
mushrooms.push(blueChanterelle);
mushrooms.push(chanterelle);
mushrooms.push(morell);
mushrooms.push(indigoMilkcap);
mushrooms.push(turkeyTail);
mushrooms.push(jackOLantern);

var filterCriteria = function(params){
  var criteria = [];
  _.forEach(params, function(param){
    _.extend(criteria, param);
  });
  return criteria;
};

var searchFor = [];
var searchParams = [];
console.log(searchParams);

var filteredShrooms;
console.log(filteredShrooms);

$(document).ready(function(){
  $("#blue").click(function(event) {
    searchFor.push({color: "blue"});
    searchParams = filterCriteria(searchFor);
    filteredShrooms = _.filter(mushrooms, searchParams);
    console.log(searchFor);
    console.log(searchParams);
    for(var i = 0; i < filteredShrooms.length; i++){
      $("#results").show().append(filteredShrooms[i].name + "<br>");
    }

    event.preventDefault();
  });


  $("#round").click(function(event) {
    searchFor.push({shape: "round"});
    searchParams = filterCriteria(searchFor);
    filteredShrooms = _.filter(mushrooms, searchParams);
    console.log(searchFor);
    console.log(searchParams);
    for(var i = 0; i < filteredShrooms.length; i++){
      $("#results").show().append(filteredShrooms[i].name + "<br>");
    }

    event.preventDefault();
  });
});
