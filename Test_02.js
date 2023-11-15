let arr = [1, 25, 7, -7, -3, 12, -22, 0];
const absElement = (a) => {
  if (a >= 0) return a;
  else return -a;
};

const sortArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
const arrAfterSort = sortArr(arr);
console.log(`Mảng sau khi được sắp xếp là ${arrAfterSort}`);

const sortAbsArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (absElement(arr[j]) > absElement(arr[j + 1])) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
const arrAfterAbsSort = sortAbsArr(arr);
console.log(arrAfterAbsSort);
