// This will create the reviews as Arrays 

let reviewers = ["", "", "", ""];
let reviewDates = ["12/18/2024", "8/07/2024", "05/22/2024", "02/14/2025"];
let reviews = [
    "",
    "",
    "",
    ""
];
let reviewTitles = ["", "", "", ""];

// Function to generate and display reviews on the page
function loadReviews() {
    for (let i = 0; i < reviewers.length; i++) {
        let reviewCode = "<table>";

        reviewCode += "<caption>" + reviewTitles[i] + "</caption>";
        reviewCode += "<tr><th>By</th><td>" + reviewers[i] + "</td></tr>";
        reviewCode += "<tr><th>Review Date</th><td>" + reviewDates[i] + "</td></tr>";
        reviewCode += "<tr><td colspan='2'>" + reviews[i] + "</td></tr>";
        reviewCode += "</table>";

        // Insert the review code into the article element
        document.getElementsByTagName("article")[0].insertAdjacentHTML("beforeend", reviewCode);
    }
}

// Run when the page loads
window.onload = loadReviews;