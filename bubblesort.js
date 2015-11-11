function bubbleSort(array) {
  this.array = array;
  this.initial_array = array.slice(0);
  this.sorted_array = array.slice(0).sort(function(a, b) {
    return a - b;
  });
  this.count = 0;
}

bubbleSort.prototype.alg = function() {
  if (this.array.equals(this.sorted_array)) { return this.array; }
  for(var x = 0, len = this.array.length - this.count; x < len; x++) {
    if (this.array[x+1] !== undefined && this.array[x] > this.array[x+1]) {
      var temp = this.array[x];
      this.array[x] = this.array[x+1];
      this.array[x+1] = temp;
    }
  }

  this.count += 1;

  if (this.array.equals(this.sorted_array)) {
    return this.array;
  } else {
    this.alg();
  }
  return this.array;
};

bubbleSort.prototype.test = function() {
  var array_from_alg = this.alg();
  console.log("Test passed:   " + (this.alg().equals(this.sorted_array)));
  console.log("Initial array: " + this.initial_array);
  console.log("Sorted array:  " + array_from_alg);
};

function generateRandomArray(length, min_bound, max_bound) {
  var array = [];
  for (var x = 0; x < length; x++) {
    array.push(Math.floor((Math.random()*(max_bound - min_bound) + min_bound)));
  }
  return array;
}

Array.prototype.equals = function (array) {
  for (var i = 0, l=this.length; i < l; i++) {
      if (this[i] instanceof Array && array[i] instanceof Array) {
        if (!this[i].equals(array[i])) {
          return false;       
        }
      }           
      else if (this[i] != array[i]) { 
          return false;   
      }           
  }       
  return true;
};

var yo = new bubbleSort(generateRandomArray(8000, -1000000, 1000000));
yo.test();