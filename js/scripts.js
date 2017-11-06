function Mushroom (color, shape, group) {
  this.color = color;
  this.shape = shape;
  this.group = group;
};

Mushroom.prototype.colorCalc = function () {
  if (this.color === "gold") {
    alert("works");
  }
}

var yourMushroom = new Mushroom();

$(document).ready(function() {
  $(".btn-info").click(function(event) {
    $("#results").show();
    yourMushroom.color = $(this).val();
    yourMushroom.colorCalc();

  });
});
