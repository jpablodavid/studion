$(document).ready(() => {
    //menu
    $(".navbar__menu-btn").on('click', function () {
        $('.navbar__links').toggleClass('active');
        $(this).find('i').toggleClass('fa-bars');
        $(this).find('i').toggleClass('fa-times');
    });

    //carrosel
    const slickOptions = {
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        //pauseOnHover: false,
        prevArrow: '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
        nextArrow: '<button type="button" class="slick-next slider__next-arrow">Nextvious</button>;'    
    };
    $('.slider').slick(slickOptions);

    setInterval(() => {
        const numbersCollection = document.querySelectorAll(".counter__number");

        numbersCollection.forEach((number) => {
            const cuurentNumber = parseInt(number.innerHTML);
            number.innerHTML = cuurentNumber + 1;
        });
    }, 1000);

    const counterOptions = {
        delay: 10,
        time: 1000,
    };

    $(".counter__number").counterUp(counterOptions);

    $('.footer__form-button').on('click', () => {
        const email = $("#email").val();
        Email.send({
            Host : "smtp.yourisp.com",
            Username : "username",
            Password : "password",
            To : 'them@website.com',
            From : email,
            Subject : "Por favor me adicione na newsLetter",
            Body : "Olá, gostaria de ser adicionado a newsLetter do site. meu email é $(email)."
            
        }).then(
        message => alert(message)
        );
    });
});