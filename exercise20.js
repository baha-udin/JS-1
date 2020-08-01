let set = new Set();

let akhdani = { name: "Akhdani" };
let reka = { name: "Reka" };
let solusi = { name: "Solusi" };

set.add(akhdani);
set.add(reka);
set.add(solusi);
set.add(reka);
set.add(solusi);

console.log( set.size ); // 3

for (let user of set) {
  console.log(user.name);
}