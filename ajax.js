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
 
 console.log('get random quotes: AJAX fetch')

const url = "https://thesimpsonsquoteapi.glitch.me/quotes"
document.getElementById('submit').addEventListener('click', function() {
    fetch(url) 
    .then((res) => { return res.json() }) 
    .then((data) => {            
        data.forEach((item) => {
            const { quote, character } = item
            const result = `Quote : "${quote}"  By : ${character}`
            document.getElementById('sowmya').innerHTML = result;
        });
    })
    .catch(function (error) {
        console.log(JSON.stringify(error)); 
    })
})
