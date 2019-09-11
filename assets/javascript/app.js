var correct=0;
var incorrect=0;
var unanswer=0;
var time=15;
var intervalId;
var selecteditem;
function run() {
    intervalId = setInterval(decrement, 1000);
  }
  function decrement() {

    time--;
    $("#timeRemain").html("<h4>Time Remaining:"+time+"</h4>")

    $(".form-check-input").on("click",function(){
        selecteditem=$(this).value;
        console.log(this.value);
     })
  }


$("#startButton").on("click", function() {
 
    run();
    $("#timeRemain").html("<h4>Time Remaining:"+time+"</h4>")
    var timeout = setTimeout(function() {
      $("#textContent").html("<div class='row justify-content-center p-3 mb-2'><h4>All Done!</h4></div><div class='row justify-content-center p-3 mb-2'><div>Correct Answer:"+correct+"</div></div><div class='row justify-content-center p-3 mb-2'><div>Incorrect Answer:"+incorrect+"</div></div><div class='row justify-content-center p-3 mb-2'><div> Unanswered:"+unanswer+"</div></div>");
    }, 15000);
  });

  if (selecteditem==="The Lion King"){
    correct+=1;
}
else if(selecteditem==="Fired Spice"){
    correct+=1;
}
else{
    incorrect+=1;
}




