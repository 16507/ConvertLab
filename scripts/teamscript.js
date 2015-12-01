$(document).ready(function() {
        $('#bobbie').click(function() {
		        $('.bobbietekst').fadeIn();
                $('.noatekst').fadeOut(0);
                $('.pedrotekst').fadeOut(0);
                $('.nielstekst').fadeOut(0);
        });
        $('#noa').click(function() {
		        $('.noatekst').fadeIn();
                $('.bobbietekst').fadeOut(0);
                $('.pedrotekst').fadeOut(0);
                $('.nielstekst').fadeOut(0);
        });
        $('#pedro').click(function() {
		        $('.pedrotekst').fadeIn();
                $('.noatekst').fadeOut(0);
                $('.bobbietekst').fadeOut(0);
                $('.nielstekst').fadeOut(0);
        });
        $('#niels').click(function() {
		        $('.nielstekst').fadeIn();
                $('.noatekst').fadeOut(0);
                $('.pedrotekst').fadeOut(0);
                $('.bobbietekst').fadeOut(0);
        });
});