const displaList = document.getElementById("Book-List");
const displaBooks = document.getElementById("Add-Books");
const displaContact = document.getElementById("contact");

const displayList = () => {
  if (displaList.style.display === "none") {
    displaList.style.display = "flex";
    displaBooks.style.display = "none";
    displaContact.style.display = "none";
  } else {
    displaList.style.display = "flex";
    displaBooks.style.display = "none";
    displaContact.style.display = "none";
  }
};

const displayAdd = () => {
  if (displaBooks.style.display === "none") {
    displaList.style.display = "none";
    displaBooks.style.display = "flex";
    displaContact.style.display = "none";
  } else {
    displaList.style.display = "none";
    displaBooks.style.display = "flex";
    displaContact.style.display = "none";
  }
};

const displayContact = () => {
  if (displaContact.style.display === "none") {
    displaList.style.display = "none";
    displaBooks.style.display = "none";
    displaContact.style.display = "flex";
  } else {
    displaList.style.display = "none";
    displaBooks.style.display = "none";
    displaContact.style.display = "flex";
  }
};

export { displayList, displayAdd, displayContact };
