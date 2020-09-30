
exports.min = function min (array) {
  if (array && array.length) return Math.min.apply(null, array);
  else return 0;
}

exports.max = function max (array) {
  if (array && array.length) return Math.max.apply(null, array);
  else return 0;
}

exports.avg = function avg (array) {
  if (array && array.length) {
    let avg = 0
    array.forEach((item) => {
      avg += item / array.length 
    })
    return avg.toFixed(2)
  } else return 0
}
