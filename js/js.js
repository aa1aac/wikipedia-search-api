$(document).ready(function(){
    var searchList=document.querySelector("searchList");
var searchItem=document.querySelector("input");
searchItem.addEventListener("keypress",function(e){
    
        var key = e.which || e.keyCode;
        if (key === 13) {
            var input = $('.input').val();
  var apiUrl="https://en.wikipedia.org/w/api.php?action=opensearch&search="+input+"&format=json&callback=?";
    console.log (apiUrl);
     $.get(apiUrl)
      .done(function(data){
          for(var i=0;i<10;data[1][i].length){
          var result=data[1][i];
          var content=data[2][i];
          var href=data[3][i];
          searchList.html('<li class="container"><a href="'+href+'"><h1>'+result+'</h1></a><p class="container">'+content+'</p></li>')

          }
        })
      .fail(function(){
          alert("Opps some error occured")
    

        })
    }
      });
            });
    
  
    