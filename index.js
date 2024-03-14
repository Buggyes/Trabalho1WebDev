var courseCount = 0;

class Course{
  id;
  name;
  time;
  instructor;
  education;
  Course(id, name, time, instructor, education){
    this.id = id;
    this.name = name;
    this.time = time;
    this.instructor = instructor;
    this.education = education;
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
  getLastSessionTheme();
});

function redirectToHomePage() {
    window.location.href = "index.html";
}

function getCourses() {
  let table = document.getElementById("courseTable");
  courseCount = Number(localStorage.getItem("courseCount"));
  for (let i = 1; i <= courseCount; i++) {

    if(localStorage.getItem("courseName"+i) == null){
      continue;
    }

    console.log(i);
    console.log(localStorage.getItem("courseName" + i));
    console.log(localStorage.getItem("courseTime" + i));
    console.log(localStorage.getItem("courseInstructor" + i));
    console.log(localStorage.getItem("courseEducation" + i));

    tray = document.createElement("tr");
    tray.id = i;
    
    let courseName = document.createElement("td");
    let courseNameText = document.createTextNode(localStorage.getItem("courseName" + i));
    let courseTime = document.createElement("td");
    let courseTimeText = document.createTextNode(localStorage.getItem("courseTime" + i));
    let courseInstructor = document.createElement("td");
    let courseInstructorText = document.createTextNode(localStorage.getItem("courseInstructor" + i));
    let courseEducation = document.createElement("td");
    let courseEducationText = document.createTextNode(localStorage.getItem("courseEducation" + i));
    let courseOptions = document.createElement("td");
    let courseEdit = document.createElement("button");
    let courseEditText = document.createTextNode("Editar");
    let courseDelete = document.createElement("button");
    let courseDeleteText = document.createTextNode("Deletar");

    courseEdit.addEventListener('click', () => {

    });

    courseDelete.addEventListener('click', () => {
      let tray = document.getElementById(i);
      tray.remove();

      let name = localStorage.getItem("courseName" + i);
      localStorage.removeItem("courseName" + i);
      localStorage.removeItem("courseTime" + i);
      localStorage.removeItem("courseInstructor" + i);
      localStorage.removeItem("courseEducation" + i);

      localStorage.setItem("courseCount", courseCount);

      window.alert("Curso de " + name + " deletado com sucesso!");

      location.reload();
    });

    courseName.appendChild(courseNameText);
    courseTime.appendChild(courseTimeText);
    courseInstructor.appendChild(courseInstructorText);
    courseEducation.appendChild(courseEducationText);
    courseEdit.appendChild(courseEditText);
    courseDelete.appendChild(courseDeleteText);

    courseOptions.appendChild(courseEdit);
    courseOptions.appendChild(courseDelete);

    tray.appendChild(courseName);
    tray.appendChild(courseTime);
    tray.appendChild(courseInstructor);
    tray.appendChild(courseEducation);
    tray.appendChild(courseOptions);

    table.appendChild(tray);
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

// function getLastSessionTheme() {
//   let currentTheme = localStorage.getItem("siteTheme");
//   if (currentTheme == 1) {
//     switchLightTheme();
//   }
//   else {
//     switchDarkTheme();
//   }
// }

// function switchLightTheme() {
//   document.getElementById("site").className = "lightTheme";
//   localStorage.setItem("siteTheme", 1);
// }

// function switchDarkTheme() {
//   document.getElementById("site").className = "darkTheme";
//   localStorage.setItem("siteTheme", 0);
// }

function toggleTheme() {
  const body = document.body;
  const lightTheme = "lightTheme";
  const darkTheme = "darkTheme";

  if (body.classList.contains(lightTheme)) {
    body.classList.remove(lightTheme);
    body.classList.add(darkTheme);

    localStorage.setItem("theme", darkTheme);
  } else {
    body.classList.remove(darkTheme);
    body.classList.add(lightTheme);

    localStorage.setItem("theme", lightTheme);
  }
}


window.onload = function () {
  const theme = localStorage.getItem("theme");
  if (theme) {
    document.body.classList.add(theme);
  }
};


document.getElementById("lightTheme").addEventListener("click", toggleTheme);
document.getElementById("darkTheme").addEventListener("click", toggleTheme);
