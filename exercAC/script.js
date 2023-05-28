/* function sum (num1, num2) {
    return num1 + num2;
}

function sub (num1, num2) {
    return num1 - num2;
}

function mult (num1, num2) {
    return num1 * num2;
}

function div (num1, num2) {
    return num1 / num2;
}

function pow (num1, num2) {
    return num1 ** num2;
}


let arry = ['a', 'b', true, NaN, undefined, 2];

for (let i = 0; i < arry.length; i++) {
    const element = arry[i];
    console.log(`Índice ${i} é : ${element}`);

    for (let j = 0; j < arry.length; j++) {
        const element = arry[j];
        console.log(`Índice i :${i} e Índice j :${j}`);

        for (let z = 0; z < arry.length; z++) {
            const element = arry[z];
            console.log(`Índice i :${i} e Índice z :${z}`);
        }
    }

}


 */

/* linear search */

/* let list = [1, 2, 3, 4, 5, 6, 7];

let target = 4;

for (let i = 0; i < list.length; i++) {
  if (target === list[i]) {
    console.log(`The element in the position ${i} its equal to target ${target}`);
    break;
  } else {
    console.log(`The element in the position ${i} its not equal to target ${target}`);
  }
} */

/* ----------------- */

/* binary search */

/* let list2 = [1, 2, 3, 4, 5, 6, 7, 18, 22,31];
let target2 = 22;
let min = 0;
let max = list2.length - 1;
while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    if (target2 === list2[mid]) {
        console.log(`The element in the position ${mid} its equal to target ${target2}`);
        break;
        } else if (target2 < list2[mid]) {
            max = mid - 1;
            } else {
                min = mid + 1;
            }
} */

/* --------------- */

/* selection sort */

let listNotOrdered = [3, 14, 1, 55, 32, 21, 12, 5, 7, 90];

for (let i = 0; i < listNotOrdered.length; i++) {
  let min = i;
  console.log(`valor de min ${min}`);
  for (let j = i + 1; j < listNotOrdered.length; j++) {
    console.log(`valor de j ${j}`);
    if (listNotOrdered[j] < listNotOrdered[min]) {
      min = j;
      console.log(`min se tornando j: ${j} | lista na posicao j: ${listNotOrdered[j]} < lista na posicao min ${listNotOrdered[min]}`);
    }
  }
  let temp = listNotOrdered[i];
  listNotOrdered[i] = listNotOrdered[min];
  listNotOrdered[min] = temp;

  console.log(`valor de lista na posicao i :${listNotOrdered[i]} valor de temp: ${temp}`);
}
console.log(listNotOrdered);

/* ------------------- */

/* insertion sort */

/* let list3 = [3, 14, 32, 1, 67, 32 , 24, 46, 22, 12];
for (let i = 1; i < list3.length; i++) {
    let j = i - 1;
    let temp = list3[i];
    while (j >= 0 && list3[j] > temp) {
        list3[j + 1] = list3[j];
        j = j - 1;
    }
        list3[j + 1] = temp;
}
        console.log(list3);
 */
