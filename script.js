'use strict';

const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

/// fill box
const dragStart = function () {
  this.className += ' hold';
  setTimeout(() => ((this.className = 'invisible'), 0));
};

const dragEnd = function () {
  this.className = 'fill';
};

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

/// empty boxes
const dragOver = function (e) {
  e.preventDefault(); // for prevent return image in dragStart box and remove it to dragDrop box
};

const dragEnter = function (e) {
  e.preventDefault(); // for prevent return image in dragStart box and remove it to dragDrop box
  this.className += ' hovered';
};

const dragLeave = function () {
  this.className = 'empty';
};

const dragDrop = function () {
  this.className = 'empty';
  this.append(fill);
};

for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}
