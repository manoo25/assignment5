const toggle = document.getElementById('sun');
const body = document.querySelector('body');
const chefsp = document.querySelector('.chefs p');
const gallary = document.querySelector('.gallary');
const gallaryp = document.querySelector('.gallary p');
const gallaryps = document.querySelector('.gallary p span');
const contact = document.querySelector('.contact');
const contactp = document.querySelector('.contact p');
const contactbtn = document.querySelector('.contact .contain form button');
const footerbtn = document.querySelector('footer .contain .center button');
const footeri = document.querySelector('footer .contain .right ul li  i');
const footeri2 = document.querySelector('footer .contain .right ul li  #ico2');
const footeri3 = document.querySelector('footer .contain .right ul li #ico3');
const contactps = document.querySelector('.contact p span');
const contactB5 = document.querySelector('.contact #box5');
const contactB2 = document.querySelector('.contact #box2');
const contactB3 = document.querySelector('.contact #box3');
const contactB4 = document.querySelector('.contact #box4');
const contactB5p = document.querySelector('.contact #box5 p');
const contactB2p = document.querySelector('.contact #box2 p');
const contactB3p = document.querySelector('.contact #box3 p');
const contactB4p = document.querySelector('.contact #box4 p');

const contactB2i = document.querySelector('.contact #box2 i');
const contactB3i = document.querySelector('.contact #box3 i');
const contactB4i = document.querySelector('.contact #box4 i');
const contactB5i = document.querySelector('.contact #box5 i');
const chefsps = document.querySelector('.chefs p span');
const chefsB1 = document.querySelector('.chefs .container .items #item1 ');
const chefsB2 = document.querySelector('.chefs .container .items #item2 ');
const chefsB3 = document.querySelector('.chefs .container .items #item3 ');
const nav = document.querySelector('.nav');
const Ncontain = document.querySelector('.nav .contain h1');
const Ncontainl1 = document.querySelector('.nav .contain .link1');
const Ncontainl2 = document.querySelector('.nav .contain .link2');
const Ncontainl3 = document.querySelector('.nav .contain .link3');
const Ncontainl4 = document.querySelector('.nav .contain .link4');
const home = document.querySelector('.Home');
const chefs = document.querySelector('.chefs');
const span = document.querySelector('span');
const btns = document.querySelector('.Home .content .left .btn1');
const btns2 = document.querySelector('.Home .content .left .btn2');
const play = document.querySelector('.Home .content .left .play');
const hhome = document.querySelector('.Home .content .left h2 ');
const phome = document.querySelector('.Home .content .left p ');

toggle.addEventListener("click", function () {
    if (toggle.classList.contains('fa-moon')) {
        toggle.classList.replace('fa-moon', 'fa-sun');
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s'
        nav.style.background = 'black';
        nav.style.color = 'white'
        Ncontain.style.color = 'white';
        Ncontainl1.style.color = '#9F9F9F';
        Ncontainl2.style.color = '#9F9F9F';
        Ncontainl3.style.color = '#9F9F9F';
        Ncontainl4.style.color = '#9F9F9F';
        home.style.background = '#252525';
        gallary.style.background = '#252525';
        chefs.style.background = '#202020';
        sun.style.color = 'white';

        btns2.style.transition = '0.2s'
        span.style.color = '#D78C23';
        chefsp.style.color = 'white';
        chefsps.style.color = '#D78C23';
        gallaryp.style.color = 'white';
        gallaryps.style.color = '#D78C23';
        contact.style.background = '#202020';
        contactp.style.color = 'white';
        contactps.style.color = '#D78C23';
        contactB5.style.background = '#0D0D0D';
        contactB2.style.background = '#0D0D0D';
        contactB3.style.background = '#0D0D0D';
        contactB4.style.background = '#0D0D0D';
        contactB5p.style.color = 'white';
        contactB2p.style.color = 'white';
        contactB3p.style.color = 'white';
        contactB4p.style.color = 'white';
        contactbtn.style.background = '#D78C23';
        footeri.style.color = '#D78C23';
        footeri2.style.color = '#D78C23';
        footeri3.style.color = '#D78C23';
        footerbtn.style.background = '#D78C23';
        contactB2i.style.background = '#D78C23';
        contactB3i.style.background = '#D78C23';
        contactB4i.style.background = '#D78C23';
        contactB5i.style.background = '#D78C23';




        chefsB1.style.background = '#171717';
        chefsB2.style.background = '#171717';
        chefsB3.style.background = '#171717';
        btns.style.background = '#D78C23';
        btns2.style.background = '#252525';
        btns2.style.color = 'white';
        hhome.style.color = 'white';
        phome.style.color = 'white';
        play.style.background = '#D78C23';

    }
    else {
        toggle.classList.replace('fa-sun', 'fa-moon');
        sun.style.color = 'black';
        body.style.background = 'white';
        body.style.transition = '2s'
        Ncontain.style.color = 'black';
        span.style.color = ' #CE1212';
        nav.style.background = 'white';
        home.style.background = ' #eeeeee';
        btns.style.background = ' #CE1212';
        play.style.background = ' #CE1212';
        btns2.style.background = '#EEEEEE';
        btns2.style.color = '#212529';
        hhome.style.color = '#37373F';
        phome.style.color = '#37373F';
        chefs.style.background = 'transparent';
        chefsp.style.color = 'black';
        chefsps.style.color = '#CE1212';
        gallaryp.style.color = 'black';
        gallaryps.style.color = '#CE1212';
        chefsB1.style.background = 'transparent';
        chefsB2.style.background = 'transparent';
        chefsB3.style.background = 'transparent';
        gallary.style.background = '#EEEEEE';
        contact.style.background = 'transparent';
        contactp.style.color = 'black';
        contactps.style.color = '#CE1212';
        contactB5.style.background = '#F5F5F5';
        contactB2.style.background = '#F5F5F5';
        contactB3.style.background = '#F5F5F5';
        contactB4.style.background = '#F5F5F5';
        contactB4p.style.color = 'black';
        contactB3p.style.color = 'black';
        contactB2p.style.color = 'black';
        contactB5p.style.color = 'black';
        contactB2i.style.background = '#CE1212';
        contactB3i.style.background = '#CE1212';
        contactB4i.style.background = '#CE1212';
        contactB5i.style.background = '#CE1212';
        contactbtn.style.background = '#CE1212';
        footeri.style.color = '#CE1212';
        footeri2.style.color = '#CE1212';
        footeri3.style.color = '#CE1212';
        footerbtn.style.background = '#CE1212';
    }

})
if (list.style.display == 'block') {
    list.style.display = 'none'


}
else {
    list.style.display = 'block'


}
function showList() {
    const list = document.querySelector('.responsive-list ')
    if (list.style.display == 'block') {
        list.style.display = 'none'


    }
    else {
        list.style.display = 'block'


    }
}