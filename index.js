var courses = [];

class Course{
  constructor(name, workload, instructorName, educationLvl){
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
});

function addCourse() {
  
}

function switchLightTheme() {
  document.getElementById("site").className = "lightTheme";
}

function switchDarkTheme() {
  document.getElementById("site").className = "darkTheme";
}
