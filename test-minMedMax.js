function minMedMax(num1, num2, num3) {
    // หา min
    let min = num1
    if (num2 < min) {
        min = num2
    }
    if (num3 < min) {
        min = num3
    }

    // หา max
    let max = num1
    if (num2 > max) {
        max = num2
    }
    if (num3 > max) {
        max = num3
    }

    // หา med
    let med = num1;
    if ((num2 > min && num2 < max) || (num2 < min && num2 > max)) {
        med = num2;
    }
    if ((num3 > min && num3 < max) || (num3 < min && num3 > max)) {
        med = num3;
    }

    return { min, med, max }
}

// ตัวอย่าง
console.log(minMedMax(85, 30, 1)); // { min: 1, med: 30, max: 85 }
console.log(minMedMax(10, 0, 20)); // { min: 0, med: 10, max: 20 }
console.log(minMedMax(-5, 0, 10)); // { min: -5, med: 0, max: 10 }
console.log(minMedMax(-5, 1, 1)); //  { min: -5, med: 1, max: 1 }
console.log(minMedMax(-1, -8, 0)); // { min: -8, med: -1, max: 0 }


// test-minMedMax
// ให้เขียน Function ชื่อ minMedMax (numl, num2, num3) โดยส่งเลข 3 ตัว แล้วหาค่าน้อยที่สุด ค่ากลาง และค่ามากทีสุด
// โดยให้ return ผลลัพธ์เป็นชนิดข้อมูล object เพื่อแสดงค่าน้อยที่สุด ค่ากลาง และค่ามากที่สุด ดังนี้

// ตัวอย่างเช่น
// 85, 30, 1 จะได้ ( min: 1, mid: 30, max: 85 )
// 10, 0 20 จะได้ ( mint 0, mic: 10, max 20 )
// -5, 0, 10 จะได้ (min: -5, mid: 0, max: 10)
// -5, 1, 1 จะได้ (min: 1, mid: 1, max: 5 )
// -1, -8, 0 จะได้(min: 8 midi 1, max. 0)

// หมายเหตุ ให้พยายามออกแบบวิธีการแก้ปัญหาโดยหลีกเลี่ยงการใช้ฟังก์ขับสําเร็จรูปจาก library เช่น Math หรือ Sort เป็นต้น