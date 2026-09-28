const form = document.getElementById("feedbackForm");
const feedbackList = document.getElementById("feedbackList");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const course = document.getElementById("course").value.trim();
    const feedback = document.getElementById("feedback").value.trim();

    if (!name || !course || !feedback) {
        return;
    }

    const item = document.createElement("div");
    item.className = "feedback-item";

    const student = document.createElement("strong");
    student.textContent = name;

    const courseText = document.createElement("p");
    courseText.textContent = "Course: " + course;

    const feedbackText = document.createElement("p");
    feedbackText.textContent = "Feedback: " + feedback;

    item.append(student, courseText, feedbackText);
    feedbackList.prepend(item);

    form.reset();
});
