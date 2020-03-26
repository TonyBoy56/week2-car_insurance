$(document).ready(function() {
  $("form#insurance").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

  if (age) {
      // if (age === true) 
    var quote = (100 - age) * 3;
    if (gender === 'male' && age < 26) {
      // quote = quote + 50 //
      quote += 50; 
    }
    $("#rate").empty().append(quote);
    $("#quote").show();  
  } else {
    alert('You forgot to enter your age.');
  }

    event.preventDefault();
  });
});