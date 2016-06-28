function Ticket(name, age, time) {
  this.movieName = name;
  this.custAge = age;
  this.movieTime = time;
  this.price = 12;
}

Ticket.prototype.adjustedPrice = function() {
  if (this.custAge === "Senior" || this.custAge === "Child") {
    this.price += 1;
  }
  if (this.movieName === 1) {
    this.price += 2;
  }
  if (this.movieTime === "prime") {
    this.price += 3;
  }
  return this.price;
}

$(function() {
  $("#movie-titles").on('change', (function() {
    var movieTime = parseInt($("#movie-titles").find(":selected").val());
    if (movieTime === 1) {
      $("#time2-box").hide();
      $("#time1-box").show();
    } else if (movieTime === 2) {
      $("#time1-box").hide();
      $("#time2-box").show();
    } else {
      $("#time1-box").hide();
      $("#time2-box").hide();
    }
  }));
  $("form").submit(function(event){
    event.preventDefault();
    var movieName = parseInt($("#movie-titles").val());
    var ageCustom = $("input:radio[name=age]:checked").val();
    if (movieName === 1){
      var timeEquals = $("#movie-time1").val();
    } else {
      var timeEquals = $("#movie-time2").val();
    }
    console.log(timeEquals);
    console.log(movieName);
    console.log(ageCustom);

    var testMovie = new Ticket(movieName, ageCustom, timeEquals);
    testMovie.adjustedPrice();
    
    console.log(testMovie);
  });
});
