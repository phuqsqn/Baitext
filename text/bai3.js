/* 
1. Cho một mảng các số nguyên. Sử dụng forEach để in ra mỗi phần tử trong mảng.
2. Cho một mảng các số nguyên. Sử dụng map để tạo một mảng mới chứa bình phương của mỗi số.
3. Cho một mảng các số nguyên. Sử dụng filter để tạo một mảng mới chứa các số lẻ.
4. Cho một mảng các số nguyên. Sử dụng every để kiểm tra xem tất cả các số có phải là số dương không.
5. Cho một mảng các số nguyên. Sử dụng some để kiểm tra xem có số âm nào trong mảng không.
6. Cho một mảng các chuỗi. Sử dụng indexOf để tìm vị trí đầu tiên của một chuỗi cụ thể trong mảng.
7. Cho một mảng các số nguyên. Sử dụng lastIndexOf để tìm vị trí cuối cùng của một số cụ thể trong mảng.
8. Cho một mảng các số nguyên. Sử dụng find để tìm số đầu tiên lớn hơn 10 trong mảng.
9. Cho một mảng các số nguyên. Sử dụng includes để kiểm tra xem số 5 có trong mảng không.
10. Cho một mảng các số nguyên. Sử dụng reduce để tính tổng của các số trong mảng.
*/
const arr = [-1 ,0 ,1 ,2 ,3,4,5,6,7,8,9,10,11,12,13];
const arr2 =['Duong' , 'Phu','Quyen' ,'hanh']

const Fow = arr.forEach(Element=>console.log(Element));
// binh phuong
const one = arr.map(item => item * 2);
console.log(one)
// so le
const two = arr.filter(item => item%2)
console.log(two)
// so duong 
const tree = arr.every(item => item <= 0)
console.log(tree)
// so am
const four = arr.some(item => item < 0)
console.log(four)
// 
const five = arr2.indexOf('Duong')
console.log('Từ Dương được tìm thấy ở vị trí '+ five + ' trong chuỗi ' ,  arr2)
//
const six = arr.find(item => item > 10)
console.log(six);
//
const seven =arr.includes(5)
console.log(seven)
//
const node = 0 ;
const enght = arr.reduce((item1 , item2) => item1 + item2 , node )
console.log(enght)