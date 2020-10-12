
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



$(".form").submit(function() { //Change
  let th = $(this);
  $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
  }).done(function() {
      $(th).parent().find('.success').addClass('active').fadeIn();
      setTimeout(function() {
          $(th).find('.success').removeClass('active').fadeOut();
          th.trigger("reset");
      }, 2800);
  });
  return false;
});


	  