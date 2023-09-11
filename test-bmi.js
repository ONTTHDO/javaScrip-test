function calculateBMI(weight, height) {
    const BMI = weight / (height * height)
    return BMI
}

function getBMIMeaning(weight, height) {
    const BMI = calculateBMI(weight, height)

    if (BMI < 18.5) {
        return 'Underweight'
    } else if (18.5 <= BMI && BMI <= 24.9) {
        return 'Normal weight'
    } else {
        return 'Overweight'
    }
}

console.log(getBMIMeaning(65, 1.8)); // "Normal weight"
console.log(getBMIMeaning(80, 1.7)); // "Overweight"
console.log(getBMIMeaning(44, 1.6)); // "Underweight"

// test-bmi
// ให้เขียน function ในข้อ 1 และ ข้อ 2 เพื่อคำนวณและหาความหมายของค่าดัชนีมวลกาย (BMI) ดังต่อไปนี้

// 1. ให้เขียน Function ชื่อ calculateBMI (weight, height) เพื่อคำนวณดัชนีมวลกาย (BMI) โดยใช้สูตร ดังนี้
// ดัชนีมวลกาย (BMI) = น้ำหนักตัว(กิโลกรัม)/สวนสูง(เมตร)^2

// 2 ให้เขียน Function ชื่อ getBMIMeaning(weight, height) เพื่อเรียกใช้ฟังก์ชัน calculateBMI คำนวณดัชนีมวลกาย(BMI)
// ในข้อ 1 และให้ return ข้อความแสดงข้อความ (case sensitive) ที่เป็นกลุ่มภาวะน้ำหนักตัว ตามเงื่อนไข ดังนี้
// BMI < 18.5 จะแสดงขอความ "Underweight"
// BMI อยู่ในช่วง 18.5-24.9 จะแสดงขอความ "Normal weight"
// BMI > 25.0 จะแสดงขอความ "Overweight"

// • ตัวอย่างเช่น
// - getBMIMeaning(65, 1.8) จะได้ Normal weight
// - get8MIMeaning(80, 1.7) จะได้ Overweight
// - getBMIMeaning(44, 1.6) จะ Underweight