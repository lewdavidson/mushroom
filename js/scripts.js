function Mushroom (color, shape, group) {
  this.color = color;
  this.shape = shape;
  this.group = group;
};




// Mushroom.prototype.colorCalc = function () {
//   if (this.color === "gold") {
//     $("#chanterelle").show();
//   } else if (this.color === "blue") {
//     $("# ").show();
//   } else if (this.color === "white") {
//     $("#").show();
//   } else {
//     $("#").show();
//   }
// }

var yourMushroom = new Mushroom(blue, ruffled, single);

$(document).ready(function() {
  $(".btn-info").click(function(event) {
    $("#results").show();


  });
});
