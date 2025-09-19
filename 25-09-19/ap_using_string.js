let first = ".";
const last = "...................";
let out="";
for (;first!==last+".";first+=".") {
    out=out+first;
    console.log(first);
}

console.log(out.length)
