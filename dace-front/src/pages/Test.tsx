import asc, { options } from 'assemblyscript/dist/asc';

function Test() {
  asc.compileString("export function add(a: i32, b: i32): i32 {  return a + b;}").then((result) => {
    console.log(result);
  });
  return (
    <div>
      <h1>Test</h1>
    </div>
  )
}

export default Test;