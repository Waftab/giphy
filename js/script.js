$("button").click(function(){
let url =
  "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1";
  let response= {
      data:[ 
    { id: "id1", url: "www.google.com/" }, 
      { id: "id2", url: "www.google.com/" } ],
    meta:{},
    pagination:{},
  }
  let input = $("input").val();
  console.log("input: " + input);
 let newUrl= "https://api.giphy.com/v1/gifs/search?q="+input+"&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1";
fetch(newUrl)
  //step 1//
  .then(function (response) {
    return response.json();
  })
  // step 2//
  .then(function (giphy) {
  console.log(giphy);
   let num = Math.random()* giphy.data.length;
  num = Math.floor(num);
  console.log(num);
  let urlForGiphy= giphy.data[num].images.original.url;
  console.log(urlForGiphy);
   $(".display").append(`<img src=${urlForGiphy}>`);

  //return urlForGiphy;
  });
 

 
});
