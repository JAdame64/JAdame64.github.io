// This will create the reviews as Arrays 

let reviewers = ["Emily R.", "James T.", "Sophia L.", "Michael B."];
let reviewDates = ["12/18/2024", "8/07/2024", "05/22/2024", "02/14/2025"];
let reviews = [
    "The seaside room was absolutely stunning! Waking up to the sound of the waves made the stay unforgettable. The Sunset Social Gathering on Friday was a perfect way to meet other guests and enjoy the view. Highly recommend!",
    "We stayed in the garden suite and loved the peaceful atmosphere. The Morning Garden Walk on Saturday was both relaxing and informative. The hosts clearly care about every detail of the experience.",
    "This was one of the coziest places I’ve ever stayed. The Saturday Night Bonfire was such a fun touch! Hot cocoa, marshmallows, and great company always goes great after a long day. The seaside room had an incredible view!",
    "A perfect weekend getaway! The garden suite was beautiful and quiet. We especially enjoyed the Sunday Brunch Meetup. It was delicious and a great way to wrap up the stay before heading home."
];
let reviewTitles = [
    "Beautiful Seaside Escape",
    "Peaceful Garden Retreat",
    "Cozy and Memorable Stay",
    "Perfect Weekend Getaway"
];

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