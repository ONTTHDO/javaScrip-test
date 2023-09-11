function concatArray(array1, array2) {
    // กรณีที่ array1 หรือ array2 เป็น null หรือ undefined
    if (array1 === null || array1 === undefined || array2 === null || array2 === undefined) {
        return undefined
    }
    // สร้างตัวแปร result เพื่อเก็บผลลัพธ์
    const result = []

    // เพิ่มสมาชิกจาก array1 ลงใน result
    for (const item of array1) {
        result.push(item)
    }

    // เพิ่มสมาชิกจาก array2 ลงใน result
    for (const item of array2) {
        result.push(item)
    }

    return result

}

// ตัวอย่าง
console.log(concatArray([15, 10, 151, 12, 4, 6, 7], [2, 4, 6, 7])); // [15, 10, 151, 12, 4, 6, 7, 2, 4, 6, 7]
console.log(concatArray([1, "item2", "item3"], [10, 6, 51, 1])); // [1, "item2", "item3", 10, 6, 51, 1]
console.log(concatArray(undefined, [2, 4, 6, 7])); // undefined
console.log(concatArray([2, 4, 6, 7], null)); // undefined
console.log(concatArray(undefined, undefined)); // undefined
console.log(concatArray(null, undefined)); // undefined
console.log(concatArray(undefined, null)); // undefined


// test-concatArray
// ให้เขียน Function a concatArray {array1, array2) เพื่อ return เป็น array ที่ประกอบด้วยสมาชิกทั้งหมดและเรียงลำดับ จาก element ใน array1 และตามด้วย element ใน array2
// • กรณี array 1 และ array2 ทั้ง คา null หรือ undefined ใ น ากลับเป็น undefined •กรณี array1 และ array: ทั้งคู่เป็น empty array ทั้งคู่ ให้ return empty array
// • กรณี array หรือ array2 อันใดอันหนึ่ง มีค่าเป็น empty array หรือ มิคาเปิบ ull หรือ undefined ให้ returnt element ของ array ที่มีรายการแทน

// ตัวอย่างเช่น
// i.concatArray([5, 10, 15], [2, 4, 6, 7]) return [5, 10, 15, 2, 4, 6, 7]
// ii.concatArray([ 1. I'item1, item2", item3]) return [item1", "item2", "item3']
// in concatArray([10, 6, 51. 1) return | 10, 6, 5]
// iv. concatArray([], []) return [ ]
// V. concatArray(undefined, (2, 4, 6, 7]) return (2, 4, 6, 7]
// vi. concatArray([2, 4, 6, 71, null) return (2, 4, 6, 7)
// vii..concatArray(undefined, undefined) return.undefined
// viii, concatArray(null, undefined) return undefined ix. concatArray(undefined, null) return undefined