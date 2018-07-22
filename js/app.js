/*use strict*/
/*jshint esversion: 6 */

const hidden = document.querySelector('.toggle-menu-icon');

hidden.addEventListener('click', ()=>{

	document.querySelector('.nav-flex-item').classList.toggle('hidden-menu');

});



