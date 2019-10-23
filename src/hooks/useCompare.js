export default function useCompare(value, order = "MIN") {
  return function(a, b) {
    let comparison = 0;
    a = a[value];
    b = b[value];
    if (a > b) {
      comparison = 1;
    } else if (a < b) {
      comparison = -1;
    }
    if (order === "MAX") {
      return comparison * -1;
    }
    return comparison;
  };
}

// value czyli np sortuj po id albo title
// oder min / max
