var plugArrayTwo = function(arrayOne)
{
  var pluggedArrayTwo = [];
  pluggedArrayTwo.push(arrayOne[1]);
  console.log(arrayOne[1]);
  pluggedArrayTwo.push(arrayOne[0]);
  console.log(arrayOne[0]);
  pluggedArrayTwo.push(arrayOne[2]);
  console.log(arrayOne[2]);
  return pluggedArrayTwo;
}


//
// function checkAllInputs(inputOne, inputTwo, inputThree, inputFour, inputFive, emptyText) {
//   if ((inputOne == "") || (inputTwo == emptyText) || (inputThree == emptyText) || (inputFour == emptyText) || (inputFive == emptyText))
//   {
//     return false;
//   }
//   else
//   {
//     return true;
//   }
// }

$(document).ready(function() {
  $("form#form-a").submit(function(event) {
    event.preventDefault();
    var emptyText = "";
    var arrayOne = [];
    var arrayTwo = [];

    var inputOne = $("#favorite-thing-one").val();
    var inputTwo = $("#favorite-thing-two").val();
    var inputThree = $("#favorite-thing-three").val();
    var inputFour = $("#favorite-thing-four").val();
    var inputFive = $("#favorite-thing-five").val();

    arrayOne = [inputOne, inputTwo, inputThree, inputFour, inputFive];
    console.log(arrayOne);
    arrayTwo = plugArrayTwo(arrayOne);
    console.log(arrayTwo);

    $("div#result-array-div").append(
      "<ul>" +
        "<li>" + arrayTwo[0] + "</li>" +
        "<li>" + arrayTwo[1] + "</li>" +
        "<li>" + arrayTwo[2] + "</li>" +
      "</ul>"
    );
  });
});
