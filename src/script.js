$(document).ready(() => {
    const slickOptions = {
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
        nextArrow: '<button type="button" class="slick-next slider__next-arrow">Nextvious</button>;'    
    };
    $('.slider').slick(slickOptions);

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