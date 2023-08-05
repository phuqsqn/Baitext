/*
Bài 1: Sắp xếp mảng sau theo thứ tự độ tuổi giảm dần
[
  { name: 'name1', age: 12 },
  { name: 'name2', age: 20 },
  { name: 'name3', age: 15 },
  { name: 'name4', age: 10 },
  { name: 'name4', age: 27 }
]

Bài 2: Viết code chuyển mảng đã sắp xếp ở bài 1 thành mảng tên
VD: [‘name4’, ‘name2’, ‘name3’]

Bài 3: Tạo 1 mảng có 100 phần tử toàn bộ là số 0, chuyển mảng vừa tạo thành mảng mới có giá trị từ 0->99, lọc ra những số chia hết cho 5 rồi tính tổng những số còn lại

Bài 4: Cho mảng sau
[
  { name: 'name1', count: 13 },
  { name: 'name3', count: 23 },
  { name: 'name1', count: 25 },
  { name: 'name2', count: 27 },
  { name: 'name3', count: 30 },
  { name: 'name2', count: 20 }
]

Viết code nhóm các user có cùng name và cộng tổng số count thành một mảng mới
VD:
[
  { name: 'name1', count: 38 },
  { name: 'name3', count: 53 },
  { name: 'name2', count: 47 }
]

*/
// bai1
const mag1 = [
  { name: 'name1', age: 12 },
  { name: 'name2', age: 20 },
  { name: 'name3', age: 15 },
  { name: 'name4', age: 10 },
  { name: 'name5', age: 27 }
];
function mag2(n1, n2) {
  return n2.age - n1.age
}

mag1.sort(mag2);
/* sort : sắp xếp thứ tự mãng */
// bai2
console.log(mag1);
const arrName = mag1.map(value => {
  /* Map : Tạo lại mãng mới */
  return value.age
})
console.log(arrName);
// bai3
const arr = new Array(50);
arr.fill(0);
/* Fill : Thay đổi tát cả các phần tử mãng thành giá trị tính bắt đầu từ số 0 */
for (var i = 1; i < 50; i++) {
  arr[i] = i;
}
console.log(arr);



//
const copyArr = arr.slice()

const ct5 = copyArr.filter((value, index) => {
  const check = value % 2 === 0;

  check && copyArr.splice(index, 1)
  //splice : thay đổi = loại bỏ hoặc thay thế các phần tử hiện có hoặc thêm
  return check;
})

const sumRemainNumbers = copyArr.reduce((pre, cur) => {
  //reduce : Kết quả cuối cùng của việc chạy bộ giảm tốc trên tất cả các phần tử của mảng là một giá trị duy nhất.
  return pre + cur;
}, 0)
console.log("Số chia hết cho 2 tư 0 - 50 :" + ct5);

// Chưa hiểu bài 4 
