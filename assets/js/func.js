  $(document).ready(function () {

  $("#listar").click(function(){
    console.log("listando!");
    return false;
  };

  $("#sincronizar").click(function(){
    console.log("sincronizando!");
    return false;
  };

  $("button").click(function(){
       // $.ajax({url: "demo_test.txt", success: function(result){
           // $("#div1").html(result);
       // }});
       console.log("bsincronizando!");
       return false;
   });
}
