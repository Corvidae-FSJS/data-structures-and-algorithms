const leftJoin = (table1, table2) => {
  let results = [];

  // for(let [key, value] of Object.entries(table1)) {
  //   if(table2[key]) {
  //     results.push([key, value, table2[key]]);
  //   } else {
  //     results.push([key, value, null]);
  //   }
  // }
  for(let i = 0; i < table1.bucket.length; i++) {
    if(table1.bucket[i] !== undefined) {

      results.push(table1.bucket[i]);
    }
  }
  for(let i = 0; i < table2.bucket.length; i++) {
    if(table2.bucket[i] !== undefined) {
      results.forEach(entry => {
        if(table2.bucket[i][0] === entry[0]) {
          entry.push(table2.bucket[i][1]);
        }
      });
    }
  }
  results.forEach(result => {
    if(result.length === 2) {
      result.push(null);
    }
  });
  return results;
};

module.exports = leftJoin;