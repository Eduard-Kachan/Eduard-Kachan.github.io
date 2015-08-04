
menu.addEventListener('click', function(e){
    if(sideBar.getAttribute("class") === 'show'){
        sideBar.setAttribute('class', '');
    }else{
        sideBar.setAttribute('class', 'show');
    }
});