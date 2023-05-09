
let pizzaArr=[];
const url = "https://forkify-api.herokuapp.com/api/search?q=pizza";
async function myfun(){

    
        let res=await fetch(url,{method:"GET"});
        let data=await res.json();
        pizzaArr=data.recipes;
          details();
        console.log(pizzaArr)
  
   
}

function details(){
    var i = localStorage.getItem("index");
    var pizza=``;
   
       pizza +=`  
       <div class="col-lg-5 col-sm-12 col-md-12  mt-5">
       <img src="${pizzaArr[i].image_url}" alt="" class="w-100 rounded-5">
      </div>
      <div class="col-lg-4 col-sm-12 col-md-12  mt-5 ">
       <h1 class="mt-5">${pizzaArr[i].title}</h1>
       <a class="text-decoration-none way footer-color" href="${pizzaArr[i].source_url}">Click to know the way</a>
      </div>

      `
      document.getElementById("pizaaDetails").innerHTML = pizza;
    }
    
    


    myfun();

  