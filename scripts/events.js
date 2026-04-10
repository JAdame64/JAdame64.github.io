// Arrays to store the data
let eventNames = [
  "Sunset Social Gathering",
  "Morning Garden Walk",
  "Saturday Night Bonfire",
  "Sunday Brunch Meetup"
];

let eventTimes = [
  "Friday 6:00 PM",
  "Saturday 9:00 AM",
  "Saturday 8:00 PM",
  "Sunday 10:00 AM"
];

let eventDescriptions = [
  "Relax and meet other guests while enjoying a beautiful sunset.",
  "Guided walk through our gardens while learning about local plants.",
  "Enjoy a cozy bonfire with hot cocoa and marshmallows.",
  "Join us for a delicious brunch and social hour before checkout."
];

// Function to create the table
function loadEvents() {
  let tableCode = "";

  // Loop through the arrays and build the rows
  for (let i = 0; i < eventNames.length; i++) {
    tableCode += "<tr>";
    tableCode += "<td>" + eventNames[i] + "</td>";
    tableCode += "<td>" + eventTimes[i] + "</td>";
    tableCode += "<td>" + eventDescriptions[i] + "</td>";
    tableCode += "</tr>";
  }

  // Insert into table
  document.getElementById("eventTableBody")
    .insertAdjacentHTML("beforeend", tableCode);
}

// Run when page loads
window.onload = loadEvents;