let theme = document.getElementsByTagName('link')[1];
let buttonLightTheme = document.getElementById('button-light-theme');
let buttonMainTheme = document.getElementById('button-main-theme');
let buttonDarkTheme = document.getElementById('button-dark-theme');

function changeTheme(arg) {
    switch(arg) {
        case 'light':
            buttonLightTheme.disabled = true;
            buttonMainTheme.disabled = false;
            buttonDarkTheme.disabled = false;
            theme.setAttribute('href', './css/variables-light-theme.css');
            break;
        case 'main':
            buttonLightTheme.disabled = false;
            buttonMainTheme.disabled = true;
            buttonDarkTheme.disabled = false;
            theme.setAttribute('href', './css/variables-main-theme.css');
            break;
        case 'dark':
            buttonLightTheme.disabled = false;
            buttonMainTheme.disabled = false;
            buttonDarkTheme.disabled = true;
            theme.setAttribute('href', './css/variables-dark-theme.css');
            break;
    }
}