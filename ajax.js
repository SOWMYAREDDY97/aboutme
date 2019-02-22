function myfunction(){


    let base = Number($("#base").val());
    let height = Number($("#height").val());
    localStorage.setItem("base",base);
    localStorage.setItem("height",height);
    
    if(base < 0 || height < 0){
     $("#result").html("Please enter positive values");
    }else{
    let area = 0.5*parseInt(base)*parseInt(height);
    alert(document.getElementById("result").innerHTML = area);
  
 }
 
 }
 
 const url = "https://thesimpsonsquoteapi.glitch.me/quotes";
 document.getElementById('submit').addEventListener('click', function() {
     $.ajax({url: url, success: function(result){
         var test = result;
         var image = result[0].image;
         document.getElementById("image").src = image
     }});
 });
