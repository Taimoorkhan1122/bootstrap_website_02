// getting required DOM elements
const tags = document.querySelectorAll("#tags span");
const buttons = document.querySelectorAll("#technologies a");

// array from nodelist object
const btnArr = Array.from(buttons);

// Mapping over buttons array inside #technologies and adding event listener
btnArr.map((item) => {
  item.addEventListener("click", (event) => {
    removeOldClasses();
    event.target.classList.add("btn", "profile-button-primary");
    addActiveClass(event);
  });
});

// Add active class to select technology
function addActiveClass(eventData) {
  // getting className of selected profile
  const ID = eventData.target.id;

  // adding active class to selected ids
  Array.from(tags).map((data) =>
    data.classList.contains(ID)
      ? data.classList.add("active")
      : data.classList.remove("active")
  );
}

//remove old classes
async function removeOldClasses() {
  btnArr.map((item) => {
    if (item.classList.contains("btn", "profile-button-primary")) {
      item.classList.remove("btn", "profile-button-primary");
    } else {
      console.error("no class found");
    }
  });
}
