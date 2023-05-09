
let beefArr=[];
const url = "https://forkify-api.herokuapp.com/api/search?q=beef";
async function myfun(){

    
        let res=await fetch(url,{method:"GET"});
        let data=await res.json();
        beefArr=data.recipes;
          displaybeef();
        console.log(beefArr)
  
   
}

function displaybeef(){
    var beef=``;
    for(var i=0;i<beefArr.length;i++){
       beef +=`  
      <div   class=" col-lg-4 col-md-12 col-sm-12 mt-1" >
      <div class="h-100" >
      <img src="${beefArr[i].image_url}"  class="w-100 h-75" alt=""id="imageCurrsor" onclick="imageclick(${i})">
           <h3 class="text-light text-center mt-3">${beefArr[i].title}</h3>
      </div>
           
   </div> `
    }
    
    document.getElementById("beef").innerHTML = beef;
    }

    myfun();

    function imageclick(index){
        localStorage.setItem("index",index);
        window.location.href="beefDetails.html";
      } 