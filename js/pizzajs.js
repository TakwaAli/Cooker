
let pizzaArr=[];
const url = "https://forkify-api.herokuapp.com/api/search?q=pizza";
async function myfun(){

    
        let res=await fetch(url,{method:"GET"});
        let data=await res.json();
        pizzaArr=data.recipes;
          displayPizza();
        console.log(pizzaArr)
  
   
}

function displayPizza(){
    var pizza=``;
    for(var i=0;i<pizzaArr.length;i++){
       pizza +=`  
      <div   class=" col-lg-4 col-md-12 col-sm-12 mt-1" >
      <div class="h-100" >
      <img src="${pizzaArr[i].image_url}"  class="w-100 h-75" alt=""id="imageCurrsor" onclick="imageclick(${i})">
           <h3 class="text-light text-center mt-3">${pizzaArr[i].title}</h3>
      </div>
           
   </div> `
    }
    
    document.getElementById("pizza").innerHTML = pizza;
    }

    myfun();

    function imageclick(index){
        localStorage.setItem("index",index);
        window.location.href="pizaaDetails.html";
      } 