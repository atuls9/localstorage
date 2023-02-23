// DOM Elements
const studentForm = document.getElementById("studentForm");
const studentsContainer = document.querySelector(".students");
const nameInput = studentForm["name"];
const emailInput = studentForm["email"];
const pnumberInput = studentForm["pnumber"];


const students = JSON.parse(localStorage.getItem("students")) || [];

const addStudent = (name, email, pnumber) => {
    students.push({
        name,
        email,
        pnumber,
    });

    localStorage.setItem(emailInput.value, JSON.stringify(students));

    return { name, email, pnumber };
};

const createStudentElement = ({ name, email, pnumber }) => {
    // Create elements
    const studentDiv = document.createElement("div");
    const studentName = document.createElement("h4");
    const studentEmail = document.createElement("h4");
    const studentPnumber = document.createElement("h4");

    // Fill the content
    studentName.innerText = "Student Name: " + name;
    studentEmail.innerText = "Student Email: " + email;
    studentPnumber.innerText = "Student Phone Number: " + pnumber;

    // Add to the DOM
    studentDiv.append(studentName, studentEmail, studentPnumber);
    studentsContainer.appendChild(studentDiv);

    studentsContainer.style.display = students.length === 0 ? "none" : "flex";
};

studentsContainer.style.display = students.length === 0 ? "none" : "flex";

students.forEach(createStudentElement);

studentForm.onsubmit = e => {
    e.preventDefault();

    const newStudent = addStudent(
        nameInput.value,
        emailInput.value,
        pnumberInput.value
    );

    createStudentElement(newStudent);

    nameInput.value = "";
    emailInput.value = "";
    pnumberInput.value = "";
};