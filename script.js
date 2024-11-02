'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  // btnsOpenModal[i].addEventListener('click', openModal);

  btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

/* -------------------- 189. Implementing Smooth Scrolling -------------------- */
btnScrollTo.addEventListener('click', function (e) {
  /* 
   Este código utiliza o método `scrollIntoView` diretamente no elemento `section1`, simplificando o processo de rolagem até a seção desejada.

   O método `scrollIntoView` automaticamente calcula a posição da seção no documento e rola a página até ela. 
   Ao passar `{ behavior: 'smooth' }` como parâmetro, a rolagem é feita de forma suave, assim como no exemplo anterior. 
   
   Essa abordagem é mais simples e recomendada para rolar até um elemento específico, já que não requer cálculos manuais.
*/
  section1.scrollIntoView({ behavior: 'smooth' });
});