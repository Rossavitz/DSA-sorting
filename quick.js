/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, leftIndex = 0, rightIndex = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  const pivotIndex = arr[leftIndex];
  let swapIdx = leftIndex;

  for (let i = leftIndex + 1; i <= rightIndex; i++) {
    if (pivotIndex > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, leftIndex, swapIdx);
  return swapIdx;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, leftIndex = 0, rightIndex = arr.length - 1) {
  if (leftIndex < rightIndex) {
    let pivotIndex = pivot(arr, leftIndex, rightIndex);
    quickSort(arr, leftIndex, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, rightIndex);
  }

  return arr;
}

module.exports = { pivot, quickSort };
