import { DateTime } from './modules/luxon.js';
import { addBook, getStorageData, displayBooks } from './modules/books.js';
import Library from './modules/list.js';
import {
  displayList,
  displayAdd,
  displayContact,
} from './modules/navigation.js';

const Listli = document.getElementById('List');
const Addli = document.getElementById('AddNew');
const Contactli = document.getElementById('ContactPage');

const library = new Library();
library.awesomeBooks = [];

window.onbeforeunload = () => {
  getStorageData(library);
  displayBooks(library);
};

const currentTime = DateTime.now().toLocaleString(
  DateTime.DATETIME_FULL_WITH_SECONDS
);
document.getElementById('date').innerHTML = currentTime;

window.onload = displayList;
const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addBook(library);
});
getStorageData(library);
displayBooks(library);

Listli.addEventListener('click', displayList);
Addli.addEventListener('click',  displayAdd);
Contactli.addEventListener('click',displayContact);
