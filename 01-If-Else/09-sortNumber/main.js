// - เขียนโปรแกรมสำหรับรับตัวเลขจากผู้ใช้งาน 3 ตัวเลข
// - แสดงผลลัพธ์เป็นตัวเลขที่เรียงกันจากมากไปน้อย  
//   เช่นรับค่าเป็น -1 ,4, 0 ให้แสดงผลเป็น 4, 0, -1

  // V1. Handle เลขที่ไม่เหมือนกัน
  // V1. Handle เลขที่เหมือนกัน

  let x = Numberprompt('Enter number 1');
  let y = +prompt('Enter number 2');
  let z = prompt('Enter number 3') * 1;

  // CASE1 : x มากสุด
  // CASE2 : y มากสุด
  // CASE3 : z มากสุด

//   if(x > y && x > z) {
//         console.log('MAX = ${x}');
//   } else if(y > x && y > z) {
//         console.log('MAX = ${y}');
//   } else if(z > x && y > y) {
//         console.log('MAX = ${z}');
//   }


//   if(x > y && x > z) {
//     MAX = x;
// } else if(y > x && y > z) {
//     MAX = y;
// } else if(z > x && y > y) {
//     MAX = z;
// }
//   console.log('MAX = $(max')


// let max;
// let mid;
// let min;

// if (x > y && x > z) {
//     max = x;
//     if (x > z) {
//         mid = x;
//         min = z;
//     } else {
//         mid = x;
//         min = z;
//     }
// } else if (y > x && y > z) {
//     max = y;
//     if (x > z) {
//         mid = x;
//         min = z;
//     } else {
//         mid = x;
//         min = z;
//     }
// } else if (y > x && y > z) {
//     max = z;
//     if (x > z) {
//         mid = x;
//         min = z;
//     } else {
//         mid = x;
//         min = z;
//     }
// }
//   console.log('${MAX} : ${mid} : ${min}' );



  if (x >= y && x >= z && y >= z); {
    max = x;
    mid = y;
    min = z;
  } else if (x >= y ) {
    
  }