// BTVN
// Câu 1: Cho một chuỗi str, tìm ký tự không lặp lại đầu tiên trong chuỗi đó và trả về chỉ số của nó.Nếu nó không tồn tại, trả về -1.
// Ví dụ:
// case1
// Input: str = "tranduong"
// Output: 0
// case2
// Input: str = "hitclubhiuhiu"
// Output: 2
// case3
// Input: str = "aabb"
// Output: -1
// Gợi ý: dùng indexOf và lastIndexOf


// Câu 2:
// Cho mảng các thành viên sau:
// const listPersons = [
//     { name: "Hoàng Duy Khánh", age: 18, gender: "nam" },
//     { name: "Lê Văn Nam", age: 60, gender: "nam" },
//     { name: "Trần Chiến Công", age: 8, gender: "nam" },
//     { name: "Bùi Việt Hoàng", age: 22, gender: "nam" },
//     { name: "Phạm Minh Chiến", age: 16, gender: "nam" },
//     { name: "Ngô Thị Thanh Tình", age: 45, gender: "nữ" },
//     { name: "Nguyễn Mai Hường", age: 8, gender: "nữ" }, 
//     { name: "Nguyễn Mai Phương", age: 14, gender: "nữ" },
//     { name: "Lê Văn Hà", age: 55, gender: "nam" },
//   ]


// Yêu cầu:
// Đếm số lượng thành viên nam và nữ
// Thống kê số lượng người già, thanh niên và trẻ con và in ra một object có cấu trúc như sau: 
// {
//     treCon: 0,
//     thanhNien: 0,
//     nguoiGia : 0
// }
// Biết rằng: age >=30 => người già
// 	      age >= 18 => thanh niên
// còn lại là trẻ con  
// Gợi ý: dùng for và if else cơ bản








const array = [
  { name: "Hoàng Duy Khánh", age: 18, gender: "nam" },
  { name: "Lê Văn Nam", age: 60, gender: "nam" },
  { name: "Trần Chiến Công", age: 8, gender: "nam" },
  { name: "Bùi Việt Hoàng", age: 22, gender: "nam" },
  { name: "Phạm Minh Chiến", age: 16, gender: "nam" },
  { name: "Ngô Thị Thanh Tình", age: 45, gender: "nữ" },
  { name: "Nguyễn Mai Hường", age: 8, gender: "nữ" },
  { name: "Nguyễn Mai Phương", age: 14, gender: "nữ" },
  { name: "Lê Văn Hà", age: 55, gender: "nam" },
]
const friends = ["nam"];

let con = 0;
const users = array.filter((item) => friends.indexOf(item.gender) !== -1);
for (let i = 0; i < users.length; i++) {
  if (users[i] !== -1) {
    con++;
  }
}
console.log(con);
let tuoi = [];
let gia = 0;
let tre = 0;
let nho = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i].age >= 30) {
    gia++;    
  } else if (array[i].age >= 18) {  
    tre++;
  } else {
    nho++;
  }
}
console.log("Số Lượng ")
console.log("Người Già:" +gia)
console.log("Thanh Niên:" +tre)
console.log("Trẻ con:", +nho)