export default function createIteratorObject(report) {
  const output = [];
  const keys = Object.keys(report.allEmployees);
  for (const key of keys) {
    output.push(...report.allEmployees[key]);
  };

  return output;
}
