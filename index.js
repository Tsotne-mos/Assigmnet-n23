let user;

console.log(user ?? "Anonymous");

let person = "John";

console.log(person ?? "Anonymous");

let firstName = null;
let lastName = null;
let nickName = "Supercoder";


console.log(firstName ?? lastName ?? nickName ?? "Anonymous");

let first = null;
let last = null;
let nick = "Supercoder";


console.log(first || last || nick || "Anonymous")

let height = 0;

console.log(height || 100);
console.log(height ?? 100);

let tall = null;
let width = null;

let area = (tall ?? 100) * (width ?? 50);

console.log(area);

let x = (1 && 2) ?? 3;

console.log(x);

height = height ?? 100;

let i = 0;
while (i < 3) {
    console.log( i );
    i++;
}

let a = 3;
while (a) {
    console.log( a );
    a--;
}

let b = 3;
while (b) console.log(b--);

let c = 0;
do {
    console.log( c );
    c++;
} while (c < 3);

for (let i = 0; i < 3; i++) {
    console.log(i);
}

let d = 0
if (d < 3) { console.log(d); d++ }
if (d < 3) { console.log(d); d++ }
if (d < 3) { console.log(d); d++ }

for (let i = 0; i < 3; i++) {
    console.log(i);
}
console.log(i);

let e = 0;

for (e = 0; e < 3; e++) {
    console.log(e);
}

console.log(e);

let f = 0;

for (; f < 3; f++) {
    console.log( f );
}

let g = 0;

for (; g < 3;) {
    console.log( g++ );
}

for (let i = 0; i < 10; i++) {


    if (i % 2 == 0) continue;

    console.log(i);
}

for (let i = 0; i < 10; i++) {

    if (i % 2) {
        console.log( i );
    }

}

let h = 3;

while (h) {
    console.log( h-- );
}

let j = 0;
while (++j < 5) console.log( j );

let k = 0;
while (k++ < 5) console.log( k );

for (let i = 0; i < 5; i++) console.log( i );

for (let i = 0; i < 5; ++i) console.log( i );

for (let i = 0; i < 3; i++) {
    console.log( `number ${i}!` );
}

let l = 3;

while (l) {
    console.log( l-- );
}

let long = null;
let lenght = null;


let arena = (long ?? 100) * (lenght ?? 50);

console.log(arena);