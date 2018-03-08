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
    $.ajax({
      url: 'https://www.cafeinteligencia.com.br/locacao',      
      type: 'POST',
      success: function(res) {
          var headline = $(res.responseText).find('.imoveis-item');
          console.log(headline);
          // $("#cabecalho").html(headline);
      }
    });
  });

});
