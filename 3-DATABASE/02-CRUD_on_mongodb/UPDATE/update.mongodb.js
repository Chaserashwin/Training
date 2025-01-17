use("updatedb");

db.student.insertMany([
  {
    _id: 1,
    firstname: "ashwin",
    lastname: "jaiswal",
    email: "ashwin@gmail.com",
    rollno: 100,
    age: 22,
  },
  {
    _id: 2,
    firstname: "nikhil",
    lastname: "sharma",
    email: "nikhil@gmail.com",
    rollno: 101,
    age: 21,
  },
  {
    _id: 3,
    firstname: "parag",
    lastname: "tayal",
    email: "parag@gmail.com",
    rollno: 102,
    age: 20,
  },
]);

db.student.find();

db.student.updateOne({ firstname: "parag" }, { $set: { age: 34 } });

db.student.updateMany({ age: { $gt: 20 } }, { $set: { age: 34 } });
