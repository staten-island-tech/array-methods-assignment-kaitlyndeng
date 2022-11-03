const cats = [
  { name: "Angela", type: "siamese", adj: ["small", "loud", "mean"], age: 3 },
  { name: "Fluffy", type: "ragdoll", adj: ["tiny", "fluffy", "cute"], age: 9 },
  {
    name: "Bentley",
    type: "munchkin",
    adj: ["big", "sleepy", "quiet"],
    age: 12,
  },
  {
    name: "Fred",
    type: "russian-blue",
    adj: ["small", "calm", "friendly"],
    age: 7,
  },
];
 
cats.forEach((cat) => {
  console.log(cat.name);
});

cats.forEach((cats) => {
  cats.adj.forEach((adjs) => {
    console.log(adjs);
  });
});

const ages = cats.filter((cats) => cats.age <= 9);
  console.log(ages);

