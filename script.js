document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then(response => response.json())
    .then(data => {
      displayStudents(data.students);
      displayTeachers(data.teachers);
    })
    .catch(error => console.error("Error fetching data:", error));
});

function displayStudents(students) {
  const studentSection = document.getElementById("students");
  let tableHTML = `<h2>Students</h2>
                   <table>
                       <tr>
                           <th>ID</th>
                           <th>Name</th>
                           <th>Age</th>
                           <th>Grade</th>
                       </tr>`;

  students.forEach(student => {
    tableHTML += `<tr>
                     <td>${student.id}</td>
                     <td>${student.name}</td>
                     <td>${student.age}</td>
                     <td>${student.grade}</td>
                   </tr>`;
  });

  tableHTML += `</table>`;
  studentSection.innerHTML = tableHTML;
}

function displayTeachers(teachers) {
  const teacherSection = document.getElementById("teachers");
  let tableHTML = `<h2>Teachers</h2>
                   <table>
                       <tr>
                           <th>ID</th>
                           <th>Name</th>
                           <th>Subject</th>
                       </tr>`;

  teachers.forEach(teacher => {
    tableHTML += `<tr>
                     <td>${teacher.id}</td>
                     <td>${teacher.name}</td>
                     <td>${teacher.subject}</td>
                   </tr>`;
  });

  tableHTML += `</table>`;
  teacherSection.innerHTML = tableHTML;
}
