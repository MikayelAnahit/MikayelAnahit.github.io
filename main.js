const name_ = document.getElementById('name');

if(window.location.href.split('?').length > 1){
    name_.innerHTML = window.location.href.split('?')[1].split('=')[1];
}