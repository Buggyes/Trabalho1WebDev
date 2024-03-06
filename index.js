var courses = [];
var courseCount = 0;

class Course {
  constructor(name, workload, instructorName, educationLvl) {
    this.name = name;
    this.workload = workload;
    this.instructorName = instructorName;
    this.educationLvl = educationLvl;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("lightTheme")
    .addEventListener("click", switchLightTheme);
  document
    .getElementById("darkTheme")
    .addEventListener("click", switchDarkTheme);
  getCourses();
});

function getCourses() {
  courseCount = Number(localStorage.getItem("courseCount"));
  for (let i = 1; i <= courseCount; i++) {
    console.log(localStorage.getItem("courseName" + i));
    console.log(localStorage.getItem("courseTime" + i));
    console.log(localStorage.getItem("courseInstructor" + i));
    console.log(localStorage.getItem("courseEducation" + i));
  }
}

function addCourse() {
  let name = document.getElementById("CourseName").value;
  let time = document.getElementById("CourseTime").value;
  let instructor = document.getElementById("CourseInstructor").value;
  let education;
  if (document.getElementById("Tecnologo").checked) {
    education = "Tecnologo";
  }
  else if (document.getElementById("Profissionalizante").checked) {
    education = "Profissionalizante";
  }
  else if (document.getElementById("EnsinoSuperior").checked) {
    education = "Ensino Superior";
  }

  courseCount++;

  localStorage.setItem("courseCount", courseCount);

  localStorage.setItem("courseName" + courseCount, name);
  localStorage.setItem("courseTime" + courseCount, time);
  localStorage.setItem("courseInstructor" + courseCount, instructor);
  localStorage.setItem("courseEducation" + courseCount, education);
}

function getLastSessionTheme() {
  let currentTheme = Boolean(localStorage.getItem("siteTheme"));
  if(currentTheme){
    switchLightTheme();
  }
  else{
    switchDarkTheme();
  }
}

function switchLightTheme() {
  document.getElementById("site").className = "lightTheme";
  localStorage.setItem("siteTheme", true);
}

function switchDarkTheme() {
  document.getElementById("site").className = "darkTheme";
  localStorage.setItem("siteTheme", false);
}
