
$(function(){
  $('a[href^="#"]').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 800);
    return false;

  });

});


  //inputmask

var inputsTel = document.querySelectorAll('input[type = "tel"]');
Inputmask({
  "mask": "+7(999) 999-99-99",
  showMaskOnHover: false
}).mask(inputsTel);






	$(document).ready(function() {

		$(".form").submit(function() {
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: $(this).serialize()
			}).done(function() {
				$(this).find("input").val("");
				alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
				$(".form").trigger("reset");
			});
			return false;
		});
		
	});



							