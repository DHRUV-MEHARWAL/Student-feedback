const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");

test("Feedback form contains required fields", () => {
    const html = fs.readFileSync("index.html", "utf8");

    for (const id of [
        "feedbackForm",
        "name",
        "course",
        "feedback",
        "feedbackList"
    ]) {
        assert.ok(html.includes(`id="${id}"`));
    }
});

test("JavaScript has feedback submission handler", () => {
    const js = fs.readFileSync("script.js", "utf8");
    assert.ok(js.includes('addEventListener("submit"'));
    assert.ok(js.includes("textContent"));
});
