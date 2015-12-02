//BUBBLE SORT:- one of the slowest sorting algorithms
function bubbleSort() {
  var numElements = this.dataStore.length;
  var temp;
  for (var outer= numElements; outer >= 2; outer--) {
    for (var inner = 0; inner <= outer-1; inner++) {
      if (this.dataStore[inner] > this.dataStore[inner+1]) {
      swap (this.dataStore, inner, inner+1)
      }
    }
  }
}
//SELECTION SORT - starts at the begining ofthe array and compares the first element
// with the remaining elements. after examining all the elements, the smallest element is placed
// inthe first positon of the array an the algorithm move to the second position.
// the outerloop moves from the first element in the array to the next to last element
// the inner loop moves from the second array element to the last element looking for values that are smaller than the element currently being pointed to by the outer loop.

function selectionSort() {
  var min, temp;
  for (var outer = 0; outer <= this.dataStore.length-2; outer++) {
    min = outer;
    for (var inner = outer + 1; inner <= this.dataStore.length-1; inner++) {
      if (this.dataStore[inner] < this.dataStore[min]) {
        min = inner;
      }
    }
    swap(this.dataStore, outer, min);
  }
}

//INSERTION SORT -
//outerloop moves element by element through the array, while the inner loop
//compares the element chosen in the outer loop to the element nest to it in the array.
// if the element selected by the outer loop is less than the element selectedby
//the innerloop, array element are shifted ovet to the right to make room for the innerloop element
function insertionSort() {
  var temp, inner;
  for (var outer = 1; outer <= this.dataStore.length-1; outer++) {
    temp = this.dataStore[outer];
    inner = outer;
    while (inner > 0 && (this.dataStore[inner-1] >= temp)) {
      this.dataStore[inner] = this.dataStore[inner-1];
      inner--;
    }
    this.dataStore[inner] = temp;
  }
}
//it moves larger array elements to the right to make room for the smaller elements on the leftside of the array.

//SHELLSORT ALGORITHM.- it compares distant elements first, rather than adjacent elements, as is done in the insertion sort.
//elements that are far out of place can be put into place more efficiently using this scheme than by simply compareing neighboting elements.
function shellsort() {
  for (var g = 0; g < this.gaps.length; g++) {
    for(var i = this.gaps[g]; i < this.dataStore.length; i++) {
      var temp = this.dataStore[i];
      for (var j = i; j >= this.gaps[g] && this.dataStore[j - this.gaps[g]] >temp;  j -= this.gaps[g]) {
        this.dataStore[j] = this.dataStore[j - this.gaps[g]];
      }
      this.dataStore[j] = temp;
    }
  }
}
// the outerloop controls the movement withing the gap sequence.


//MERGESORT - works by merging sorted sublists together to form a larger completely sorted list.
function mergeSort(arr) {
  if (arr.length < 2) {
    return ;
  }
  var step = 1;
  var left, right;
  while (step < arr.length) {
    left = 0;
    right = step;
    while (right + step <= arr.length) {
      mergeArrays(arr, left, left + step, right, right + step);
      left = right + step;
      right = left + step;
    }
    if (right < arr.length) {
      mergeArrays(arr, left, left+step, right, arr.length);
    }
    step *=2;
  }
}

function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
  var rightArr = new Array ( stopRight - startRight + 1);
  var leftArr = new Array (stopLeft - startLeft + 1);
  k = startRight;
  for ( var i = 0; i < (rightArr.length-1); i++) {
    rightArr[i] = arr[k];
    k++;
  }
  k = startLeft;
  for ( var i = 0; i < (leftArr.length-1); i++) {
    leftArr[i] = arr[k];
    k++;
  }

  rightArr[rightArr.length-1] = infinity;
  leftArr[leftArr.length-1] = infinity;
  var m = 0;
  var n = 0;
  for ( var k = startLeft; k < stopRight; k++) {
    if ( leftArr[m] <= rightArr[n]) {
      arr[k] = leftArr[m];
      m++;
    } else {
      arr[k] = rightArr[n];
      n++;
    }
  }
  console.log("left array - ", leftArr);
  console.log("right array - ", rightArr);
}
// the step variable is used to control the size of the leftArr and rightArr subarrays
//found in the mergeArrays() function.controlling the size of subarrays makes the process
//efficient since it doesnt take much time to sort a small array.



//QUICKSORT - divides the sublists by selection one element of the list as a pivot
//data is the n sorted around the pivot by moving elements less than teh pivot to the
//bottom of the list and elements that are greater than the pivot to the top of the list.
// its best for large data sets.
function qSort(list) {
  if (list.length == 0) {   //testing whether the array has a length of 0. if it does the array does not need sorting.
    return [];
  }
  var lesser = [];
  var greater = [];
  var pivot = list[0];
  for (var i = 1; i < list.length; i++) {
    if (list[i] < pivot){
      lesser.push(list[i]);
    } else {
      greater.push(list[i]);
    }
  }
  return qSort(lesser).concat(pivot, qSort(greater))
}
