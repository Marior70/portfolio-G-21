/* manejo del menu responsive */
let btnMenuPri = document.querySelector('#btnMenuPri');
let linksMenuPri = document.querySelector('#menuPri>ul');

btnMenuPri.addEventListener('click', () => {
    linksMenuPri.classList.toggle('active');
});
