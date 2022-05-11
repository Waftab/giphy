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
fetch(url)
  //step 1//
  .then(function (response) {
    return response.json();
  })
  // step 2//
  .then(function (giphy) {
  let urlForGiphy= giphy.data[0].images.original.url;
  console.log(urlForGiphy);
   $(".display").append(`<img src=${urlForGiphy}>`);
 let input = $("input").val();
  return urlForGiphy;
  });
  
 
});
