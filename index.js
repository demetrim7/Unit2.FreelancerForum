/* State */

// The program initilizes an array of possible names and an array of possible occupations
const names = ["Alice", "Bob", "Cynthia", "Damien", "Emma", "Frank", "Gina"];

const occupations = [
    "Writer",
    "Teacher",
    "Programmer",
    "Designer",
    "Driver",
    "Garderner",
];

// The program initializes an array of at least two freelancers with names, occupations, and starting prices
const freelancers = [
    {name: "Alice", price: 25, occupation: "Programmer"},
    {name: "Gina", price: 52, occupation: "Driver"},
];

const maxLength = 15;

// An interval is set to add a freeelancer and rerender every few seconds
const addFreelancerIntervalId = setInterval(addFreelancer, 1000);

// The Intial array of freelancers is rendered on the page
// Call this function once to render the initial state
render();

/* Render */
// Update the DOM to reflect the current state
function render() {

// `document.querySelector` is correctly used to select existing DOM elements
const averagePrice = document.querySelector("#average-price");
const tableBody = document.querySelector("#table-body");

// Create an array of row elements from the freelancers array
const rowElements = freelancers.map((freelancer) => {
    // Create a new row for each freelancer
    const newRow = document.createElement("tr");

    const { name, price, occupation } = freelancer;
    // Create "td" elements for each detail & add the text
    const nameDetail = document.createElement("td");
    nameDetail.innerText = name;

    const occupationDetail = document.createElement("td");
    occupationDetail.innerText = occupation;

    const priceDetail = document.createElement("td");
    priceDetail.innerText = `$${price}`;

    // Append all the "td" elements to the row
    newRow.append(nameDetail, occupationDetail, priceDetail);
    // Return the newly created row & its child elements
    return newRow;

});

// Add the freelancer rows to the table body
tableBody.replaceChildren(...rowElements);

// The DOM is updated to reflect the average starting price.
const newAverage = calculateAveragePrice();
averagePrice.innerText = `$${newAverage}`;
}

/* Calculate average price */
// A function is written that correctly calculates the average starting price of the freelancers array.
function calculateAveragePrice() {
    const total = freelancers.reduce(
      (subtotal, current) => subtotal + current.price,
      0
    );
    return Math.round(total / freelancers.length);
  }
  
  /* Add a random freelancer */
  // A function is written that generates a freelancer with a random name, occupation, and starting price.
  function addFreelancer() {
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation =
      occupations[Math.floor(Math.random() * occupations.length)];
    const price = Math.floor(Math.random() * 100);
    // Create new freelancer object and push into the freelancers array
    freelancers.push({ name, price, occupation });

    // Call render() to update the DOM with the newly added freelancer
  render();

  // Clear setInterval when freelancers length is equal to max length
  if (freelancers.length === maxLength) {
    clearInterval(addFreelancerIntervalId);
  }
}