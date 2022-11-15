'use strict'

//
const name = document.getElementById('name');
const id = document.getElementById('id');
const pw = document.getElementById('password');
const pwck = document.getElementById('passwordck');
//
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const address = document.getElementById('postal-code"');
//
const year = document.getElementById('year_birth');
const month = document.getElementById('month_birth');
const day = document.getElementById('day_birth');
const visit = document.getElementById('visit-root');
//
const button = document.getElementById('join');

function test(e) {
    e.preventDefault();
    const obj = {
        name: name.value,
        id:id.value,
        pw:pw.value,
        pwck:pwck.value,
        phone:phone.value,
        email: email.value,
        // address: address.value,
        year:year.value,
        month:month.value,
        day:day.value,
        // visit:visit.value,
    };

    console.log(obj);
}

button.addEventListener('click', test);