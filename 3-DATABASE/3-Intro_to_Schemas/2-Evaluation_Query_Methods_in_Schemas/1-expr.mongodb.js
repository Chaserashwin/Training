use("teacher");

// db.monthlyBudget.insertMany([
//   {
//     _id: 1,
//     category: "food",
//     budget: 400,
//     spent: 450,
//   },
//   {
//     _id: 2,
//     category: "drinks",
//     budget: 100,
//     spent: 150,
//   },
//   {
//     _id: 3,
//     category: "clothes",
//     budget: 100,
//     spent: 50,
//   },
//   {
//     _id: 4,
//     category: "misc",
//     budget: 500,
//     spent: 300,
//   },
//   {
//     _id: 5,
//     category: "travel",
//     budget: 200,
//     spent: 650,
//   },
// ]);

// db.monthlyBudget.find({ $expr: { $gt: ["$budget", "$spent"] } });

// db.monthlyBudget.find({ spent: { $mod: [2, 0] } });

// db.monthlyBudget.find({'category':{$regex:/^d/}})

db.monthlyBudget.find({ $text: { $search: "food" } });
