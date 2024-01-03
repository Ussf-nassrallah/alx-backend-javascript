export default function createIteratorObject(report) {
  const output = [];
  for (const value in report.allEmployees) {
    output.push(...report.allEmployees[value]);
  };

  return output;
}
