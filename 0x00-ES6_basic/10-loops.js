export default function appendToEachArrayValue(array, appendString) {
  let output = [];

  for (let value of array) {
    value = appendString + value;
    output.push(value);
  }

  return output;
}