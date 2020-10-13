
    let call = document.getElementsByClassName("header__button-call")[0];
    let popup = document.getElementsByClassName("popup__container")[0];
    let callbtn = document.getElementsByClassName("call-btn")[0];
    let calling = document.getElementsByClassName("footer-call")[0];
    let morebtn = document.getElementsByClassName('button-more')[0];
    let orderBtn = document.getElementsByClassName("ordering")[0];
    let orderForm = document.getElementsByClassName("popup__order")[0];
    let formbtn = document.getElementsByClassName("form-btn")[0];
    let body = document.getElementsByTagName("body")[0];
    let popupbg1 = document.getElementsByClassName("popup-bg")[0];
    let popupbg2 = document.getElementsByClassName("popup-bg")[1];
    let popup__shape = document.getElementsByClassName("popup__shape")[0];
    let popup__request = document.getElementsByClassName("popup__request")[0];
    let answerbtn = document.getElementsByClassName("header__call-answer")[0];
    let burger = document.getElementsByClassName('header-burger')[0];
    let menu = document.getElementsByClassName('nav')[0];
    let closebtn = document.getElementsByClassName('header-close')[0];


    call.addEventListener('click', function(e){
        e.preventDefault();
        popup.classList.toggle("block-active");
        body.classList.add("scroll");
    });

    calling.addEventListener('click', function(e){
        e.preventDefault();
        popup.classList.toggle("block-active");
        body.classList.add("scroll");
    });

    callbtn.addEventListener('click', function(e){
        e.preventDefault();
        popup.classList.remove("block-active");
        body.classList.remove("scroll");
    });
    
    morebtn.addEventListener('click', function(e){
        e.preventDefault()
        orderForm.classList.toggle("block-active");
        body.classList.add("scroll");
    });

    orderBtn.addEventListener('click', function(e){
        e.preventDefault();
        orderForm.classList.toggle("block-active");
        body.classList.add("scroll");
    });

    formbtn.addEventListener('click', function(e){
        e.preventDefault();
        orderForm.classList.remove("block-active");
        body.classList.remove("scroll");
    });

    popup__shape.addEventListener('click', function(e){
        e.stopPropagation();
    });
    
    popupbg1.addEventListener('click', function(e){
        e.preventDefault();
        popup.classList.remove('block-active');
        body.classList.remove('scroll');
    });
    
    popup__request.addEventListener('click', function(e){
        e.stopPropagation();
    });

    popupbg2.addEventListener('click', function(e){
        e.preventDefault();
        orderForm.classList.remove('block-active');
        body.classList.remove('scroll');
    });
    
    answerbtn.addEventListener('click', function(e){
        e.preventDefault();
        popup.classList.toggle('block-active');
        body.classList.add('scroll')

    });
  
    burger.addEventListener('click', function(e){
        e.preventDefault();
        menu.classList.toggle('nav-open');
    });

    closebtn.addEventListener('click', function(e){
        e.preventDefault();
        menu.classList.remove('nav-open');
    });

  
