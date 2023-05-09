
let beefArr=[];
const url = "https://forkify-api.herokuapp.com/api/search?q=beef";
async function myfun(){

    
        let res=await fetch(url,{method:"GET"});
        let data=await res.json();
        beefArr=data.recipes;
          beefDetails();
        console.log(beefArr)
  
   
}

function beefDetails(){
    var i = localStorage.getItem("index");
    var beef=``;
   
       beef +=`  
       <div class="col-lg-5 col-sm-12 col-md-12  mt-5">
       <img src="${beefArr[i].image_url}" alt="" class="w-100 rounded-5">
      </div>
      <div class="col-lg-4 col-sm-12 col-md-12  mt-5 ">
       <h1 class="mt-5">${beefArr[i].title}</h1>
       <a class="text-decoration-none way footer-color" href="${beefArr[i].source_url}">Click to know the way</a>
      </div>

      `
      document.getElementById("beefDetails").innerHTML = beef;
    }
    
    


    myfun();

  