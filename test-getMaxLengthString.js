function getMaxLengthString(arrayOfString) {
    if (arrayOfString === null || arrayOfString === undefined) {
        return undefined
    }

    // เก็บความยาวของสตริงที่ยาวที่สุด
    let maxLength = 0;

    // เก็บสตริงที่มีความยาวที่สุด
    let maxLengthStrings = [];

    // วนลูปผ่าน arrayOfString เพื่อหาสตริงที่มีความยาวที่สุด
    for (const str of arrayOfString) {
        if (typeof str === 'string') {
            const length = str.length;
            if (length > maxLength) {
                // หากความยาวใหม่มากกว่าความยาวสูงสุดเดิม
                maxLength = length;
                maxLengthStrings = [str]; // ล้างค่าเก่าและเก็บสตริงใหม่

            } else if (length === maxLength) {
                // หากความยาวเท่ากับความยาวสูงสุดเดิม
                maxLengthStrings.push(str); // เพิ่มสตริงลงในอาร์เรย์
            }
        }
    }

    return maxLengthStrings;
}

console.log(getMaxLengthString(['hello', 'hi', 'hey'])); // ['hello']
console.log(getMaxLengthString(['hello', 'hi', 'hey', 'Good Evening', 'Good Morning'])); // ['Good Evening', 'Good Morning']
console.log(getMaxLengthString(['hi'])); // ['hi']
console.log(getMaxLengthString(null)); // undefined
console.log(getMaxLengthString(undefined)); // undefined


// ให้เขียน Function ชื่อ getMaxLengthString (arrayOfString) เพื่อ return array ของ String เฉพาะที่มีความยาวของจำนวนตัวอักษรมากที่สุด
// กรณี arrayOfString มีค่าเป็น null หรือ undefined ให้ return undefined
// ตัวอย่างเช่น
// getMaxLengthString(['hello', 'hi', 'hey']) return ['hello']
// getMaxLengthString(['hello', 'hi', 'hey', 'Good Evening', 'Good Morning']) return ['Good Evening', 'Good Morning']
// getMaxLengthString(['hi']) return ['hi']
// getMaxLengthString(null) return undefined
// getMaxLengthString(undefined) return undefined

