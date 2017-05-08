$(document).ready(function () {
    $('.quintus_container').hide();
    $('.play').click(function () {
        $('.intro').fadeOut('slow');
        $('.quintus_container').fadeIn('fast');
    })
});