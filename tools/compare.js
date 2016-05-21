"use strict";
const fs = require('fs');
const results1 = JSON.parse(fs.readFileSync(process.argv[2]).toString());
const results2 = JSON.parse(fs.readFileSync(process.argv[3]).toString());
const benchmarks = Object.keys(results1);

benchmarks.forEach(function(bm) {
  const result1 = results1[bm];
  const result2 = results2[bm];
  const speedup = 100*((result1 - result2)/result1);
  console.log(`${bm}: ${speedup.toPrecision(4)}% speedup`);
});
