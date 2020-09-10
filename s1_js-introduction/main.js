console.log('Learn Javascript ❤');



// const: không thể thay đổi giá trị sau khi gán
// let: có thể thay đổi giá trị sau khi gán
// Luôn dùng const trong thực tế, chỉ dùng let khi muốn thay đổi giá trị sau này

const name = 'Thuan';
console.log('Xin chao', name);


let name = 'Thuan';
name = 'Nam';
console.log('Xin chao', name)


// Function (luôn thực hiện 3 bước sau)
// 1. Validate params
// 2. Thực thi tính toán cho function (Processing)
// 3. Trả về kết quả output (Return)

function sum(a, b) {
    // 1. Validate params
    if (a < 0 || b < 0) {
        return -1;
    }

    // 2. Thực thi tính toán cho function (Processing)
    const result = a + b;

    // 3. Trả về kết quả output (Return)
    return result;
}

const r1 = sum(-1, 2);
console.log('R1:', r1);

const r2 = sum(4, 3);
console.log('R2:', r2);



// Validate dữ liệu sai trước. Hạn chế dùng if else lồng nhau, nếu dùng chỉ tối đa 2 cấp độ
function calculateMyAge(year){
    if (year < 1900 || year > 2020) return -1;
    
    return 2020 - year;
}

console.log('SN: ', calculateMyAge(2000));



// Arrow function
const tinhChuViHinhTron = (r) => {
    if(r <= 0) return -1;

    return 2 * Math.PI * r;
}

console.log('Chu vi: ', tinhChuViHinhTron(5));


// Viết function tính giá trị lớn nhất của một cạnh tam giác khi biết 2 cạnh còn lại. Lưu ý giá trị 2 tham số đầu vào là số nguyên dương
function triangle(side1, side2){
    if (side1 <= 0 || side2 <= 0 || Number.isInteger(side1) == false || Number.isInteger(side2) == false) return false;

    return side1 + side2 - 1;
}

console.log('max side3:', triangle(5, 8));
console.log('max side3:', triangle(-1, 5));
console.log('max side3:', triangle(4, 0));
console.log('max side3:', triangle(1.5, 5));