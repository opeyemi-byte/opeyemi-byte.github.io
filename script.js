
let nav_icon = document.getElementById('hamburger_icon');

nav_icon.addEventListener('click', function(){
    let list_items = document.querySelectorAll('li');

    for (let i = 0; i < list_items.length; i++) {
        if (! list_items[i].classList.contains('show-nav')){    
             list_items[i].classList.add('show-nav');
         }else{
            list_items[i].classList.remove('show-nav')
         }
        }
});
