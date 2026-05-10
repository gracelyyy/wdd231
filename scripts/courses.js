const courses = [
    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        credits: 2,
        completed: true
    },
    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        credits: 2,
        completed: true
    },
    {
        subject: "WDD",
        number: 231,
        title: "Web Frontend Development I",
        credits: 2,
        completed: false
    },
    {
        subject: "CSE",
        number: 110,
        title: "Programming Building Blocks",
        credits: 2,
        completed: true
    },
    {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        credits: 2,
        completed: true
    }
];

const courseContainer = document.querySelector("#courses");
const credits = document.querySelector("#credits");

function displayCourses(courseList) {

    courseContainer.innerHTML = "";

    courseList.forEach(course => {

        const div = document.createElement("div");

        div.classList.add("course-card");

        if (course.completed) {
            div.classList.add("completed");
        }

        div.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <p>${course.title}</p>
            <p>${course.credits} Credits</p>
        `;

        courseContainer.appendChild(div);
    });

    const totalCredits = courseList.reduce((sum, course) => sum + course.credits, 0);

    credits.textContent = `Total Credits: ${totalCredits}`;
}

displayCourses(courses);

document.querySelector("#all").addEventListener("click", () => {
    displayCourses(courses);
});

document.querySelector("#wdd").addEventListener("click", () => {
    const filtered = courses.filter(course => course.subject === "WDD");
    displayCourses(filtered);
});

document.querySelector("#cse").addEventListener("click", () => {
    const filtered = courses.filter(course => course.subject === "CSE");
    displayCourses(filtered);
});
