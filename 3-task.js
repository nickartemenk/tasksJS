const students = [

    { name: 'alex', age: 20 },
    
    { name: 'mike', age: 24 },
    
    { name: 'masha', age: 20 },
    
    { name: 'stas', age: 18 },
    
    ];

// const studentsAge = (students) => {
//     const groupStudents = {};

//     for (let i = 0; i < students.length; i++) {
//         const student = students[i];
//         const age = student.age;

//         if (!groupStudents[age]) {
//             groupStudents[age] = [];
//         }

//         groupStudents[age].push(student);

//     }

//     return groupStudents;
// }   

// console.log(studentsAge(students));


const studentsAge = (students) => {
    const groupStudents = {};
  
    students.forEach(student => {
      const age = student.age;
      
      if (!groupStudents[age]) {
        groupStudents[age] = [];
      }
      
      groupStudents[age].push(student);
    });
  
    return groupStudents;
}
console.log(studentsAge(students));