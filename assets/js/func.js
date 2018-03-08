$(document).ready(function () {

  $("#listar").click(function(){
    $.ajax({
        url: 'https://www.cafeinteligencia.com.br/locacao',
        type: 'POST',
        // dataType: 'JSON',
        success: function (data){
          console.log(data);
        },
        error: function (jqXHR, textStatus, errorThrown){
          alert('Erro!!!');
        }
      });
  });

  $("#sincronizar").click(function(){
    console.log("sincronizando! hehe");
    return false;
  });

});
