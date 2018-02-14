var katzDeli = [];

function takeANumber(katzDeli,name) {
  katzDeli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}
function nowServing(katzDeli, name) {
  let n = 0;
  while (n < katzDeli.length) {n++}
  if (katzDeli.length === 0) {
  return "There is nobody waiting to be served!";
}
else return (`Currently serving ${katzDeli.shift()}.`)
}

fucntion currentLine(line) {
  let i = 0;
  while ()
}