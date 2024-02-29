var courses = [];

document.getElementById("lightTheme").addEventListener("click",switchLightTheme);
document.getElementById("darkTheme").addEventListener("click",switchDarkTheme);

function addCourse() {
    console.log('Enviado');
}

function switchLightTheme(){
    document.getElementById('site').className = 'lightTheme';
}

function switchDarkTheme(){
    document.getElementById('site').className = 'darkTheme';
}