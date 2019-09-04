$(document).ready(function() {
    var btn_adquirir = $('.content-products-images button');
    var cont_sale_shop = $('#cont-sale-shop');
    var span_contador = $('#cont-sale-shop span');

    var contador = 0;
    btn_adquirir.on('click', function() {
        contador++;
        cont_sale_shop.css('right', '0px');
        span_contador.text(contador);
    });
});