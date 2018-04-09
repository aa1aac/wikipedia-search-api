$(document).ready(function(){
    var searchList=document.querySelector("searchList");
var searchItem=document.querySelector("input");
searchItem.addEventListener("keypress",function(e){
        var key = e.which || e.keyCode;
        if (key === 13) {
       
            var input = $('input').val();
  var apiUrl="https://en.wikipedia.org/w/api.php?action=opensearch&search="+input+"&format=json&callback=?";
    console.log (apiUrl);
    $.ajax({
        type:"GET",
        url:apiUrl,
        async:false,
        dataType:"json",
        success: function(data){
          $('ul').html(" ");
          
          for(var i=0; i < data[1].length;i++){
          $('ul').prepend("<li><a href="+data[3][i]+" target=" + "blank" + "><h4>" +data[1][i]+"</h1></a><p>"+data[2][i]+"</p></li>");
        }
          
          $('#search_botton').val('');
        },
        error:function(errorMessage){
          alert("Error");
      }
     
    

        })
    }
      });
            });