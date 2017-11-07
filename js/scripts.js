function Mushroom (name, color, shape, group) {
  this.name = name;
  this.color = color;
  this.shape = shape;
  this.group = group;
};

// DONT FORGET TO PUSH NEW SHROOMS :) //
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
var filteredShrooms;

//COLOR SELECTION//

$(document).ready(function(){
  $("#blue").click(function(event) {
    searchFor.push({color: "blue"});
    searchParams = filterCriteria(searchFor);
    filteredShrooms = _.filter(mushrooms, searchParams);
    console.log(filteredShrooms);
    event.preventDefault();
  });

  $("#white").click(function(event) {
    searchFor.push({color: "white"});
    searchParams = filterCriteria(searchFor);
    filteredShrooms = _.filter(mushrooms, searchParams);
    console.log(filteredShrooms);
    event.preventDefault();
  });

  $("#gold").click(function(event) {
    searchFor.push({color: "gold"});
    searchParams = filterCriteria(searchFor);
    filteredShrooms = _.filter(mushrooms, searchParams);
    console.log(filteredShrooms);
    event.preventDefault();
  });

  $("#brown").click(function(event) {
    searchFor.push({color: "brown"});
    searchParams = filterCriteria(searchFor);
    filteredShrooms = _.filter(mushrooms, searchParams);
    console.log(filteredShrooms);
    event.preventDefault();
  });

//SHAPE SELECTION//

  $("#round").click(function(event) {
    searchFor.push({shape: "round"});
    searchParams = filterCriteria(searchFor);
    filteredShrooms = _.filter(mushrooms, searchParams);
    for(var i = 0; i < filteredShrooms.length; i++){
      $("#results").show().append(filteredShrooms[i].name + "<br>");
    }
    event.preventDefault();
  });

  $("#ruffled").click(function(event) {
    searchFor.push({shape: "ruffled"});
    searchParams = filterCriteria(searchFor);
    filteredShrooms = _.filter(mushrooms, searchParams);
    console.log(filteredShrooms);
    event.preventDefault();
  });

  $("#spear").click(function(event) {
    searchFor.push({shape: "spear"});
    searchParams = filterCriteria(searchFor);
    filteredShrooms = _.filter(mushrooms, searchParams);
    console.log(filteredShrooms);
    event.preventDefault();
  });

  $("#flat").click(function(event) {
    searchFor.push({shape: "flat"});
    searchParams = filterCriteria(searchFor);
    filteredShrooms = _.filter(mushrooms, searchParams);
    console.log(filteredShrooms);
    event.preventDefault();
  });

  $("#concave").click(function(event) {
    searchFor.push({shape: "concave"});
    searchParams = filterCriteria(searchFor);
    filteredShrooms = _.filter(mushrooms, searchParams);
    console.log(filteredShrooms);
    event.preventDefault();
  });

//GROUP SELECTION//
  $("#single").click(function(event) {
    searchFor.push({group: "single"});
    searchParams = filterCriteria(searchFor);
    filteredShrooms = _.filter(mushrooms, searchParams);
    console.log(filteredShrooms);
    event.preventDefault();
  });

  $("#grouped").click(function(event) {
    searchFor.push({group: "grouped"});
    searchParams = filterCriteria(searchFor);
    filteredShrooms = _.filter(mushrooms, searchParams);
    console.log(filteredShrooms);
    event.preventDefault();
  });

        // WALL OF MUSHROOM CARDS! (dry this code up?)//

        $("#submit").click(function(event){
          $("#results").show();
          for(var i = 0; i < filteredShrooms.length; i++){
            if(filteredShrooms.includes(chanterelle)){
              $("#chanterelle").show();
            };

            if(filteredShrooms.includes(morell)){
              $("#morell").show();
            };

            if(filteredShrooms.includes(henOfTheWoods)){
              $("#hen").show();
            };

            if(filteredShrooms.includes(buttonMush)){
              $("#button").show();
            };

            if(filteredShrooms.includes(turkeyTail)){
              $("#turkeytail").show();
            };

            if(filteredShrooms.includes(lionsMane)){
              $("#lionsmane").show();
            };

            if(filteredShrooms.includes(lobster)){
              $("#lobster").show();
            };

            if(filteredShrooms.includes(blueChanterelle)){
              $("#bluechanterelle").show();
            };

            if(filteredShrooms.includes(indigoMilkcap)){
              $("#indigomilkcap").show();
            };

            if(filteredShrooms.includes(jackOLantern)){
              $("#jackolantern").show();
            };

          };
        event.preventDefault();
      });
    });
