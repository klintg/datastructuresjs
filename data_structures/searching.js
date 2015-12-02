//sequential or linear - when items are in a random order.
//binary - when items are in sorted order.

function seqSearch(arr, data) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == data) {
      return true;
    }
  }
  return false;
}

//finding the minimum value;
function findMin(arr) {
  var min = arr[0];
  for ( var i = 1; i < arr.length; i++) {
    if ( arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

//finding the maximum value:
function findMax(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if ( arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

//sequential search with self organiztion
function seqSearch(arr, data) {
  for ( var i = 0; i < arr.length; i++) {
    if (arr[i] == data) {
      if ( i > 0){           //its cheking to make sure that the found data is not already in the positon 0.
        swap(arr, i, i-1);
      }
      return true;
    }
  }
  return false;
}

function swap ( arr, index, index1) {
  temp = arr[index];
  arr[index] = arr[index1];
  arr[index1] = temp;
}
