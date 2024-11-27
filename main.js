
//main JS en el HTML
//es para el typestring

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

//así se escriben los comentarios aquí

typewriter.typeString('Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Si lo puedes imaginar, lo puedes crear!')
    .pauseFor(2500)
    //número de caracteres que se borrarán de la frase de arriba
    .deleteChars(6)
    .typeString('<strong>PROGRAMAR!</strong>')
    .pauseFor(2500)
    .start();