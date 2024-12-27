
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar')
const close1 = document.getElementById('close')


if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');  // Here, the 'classList.add('active')' is used to add the class element(class="active") to the navbar in html it was done by clicking the 'bar' id icon.

    } )
}

if(close1){
    close1.addEventListener('click', () => {
        nav.classList.remove('active');  // Here, the 'classList.add('active')' is used to add the class element(class="active") to the navbar in html it was done by clicking the 'bar' id icon.

    } )
}