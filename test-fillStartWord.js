// function fillStartWord(startWord, word) {
//     if (word === undefined || word === null) return undefined
//     return word?.startsWith(startWord) ? word : `${startWord}${word}`
// }  
//ตรวจสอบว่า word ไม่เป็น undefined หรือ null และหาก word ไม่ขึ้นต้นด้วย startWord จะเติม startWord ข้างหน้า word และคืนค่าผลลัพธ์

function fillStartWord(startWord, word) {
    // ถ้า word เป็น null หรือ undefined ให้คืนค่าเป็น undefined
    if (word === null || word === undefined) {
        return undefined;
    }

    // ตรวจสอบว่า word ขึ้นต้นด้วย startWord หรือไม่
    if (word.startsWith(startWord)) {
        return word;
    } else {
        // ถ้าไม่ขึ้นต้นด้วย startWord ให้เติม startWord ไปข้างหน้า word
        return startWord + word;
    }
}

// ตัวอย่างการใช้งาน
console.log(fillStartWord("1-2565-", "Hello World")); // "1-2565-Hello World"
console.log(fillStartWord("JS", "beginner")); //  "JSbeginner"
console.log(fillStartWord("first", "firststep")); // "firststep"
console.log(fillStartWord("first", null)); // undefined
console.log(fillStartWord("first", undefined)); // undefined


// ให้เขียน Function ชื่อ fillStartWord (startWord, word) เพื่อรับข้อความใด ๆ โดยให้ return word ข้อความที่รับเข้ามา
// และเติม startWord ก่อนหน้าข้อความนั้น โดยถ้า word นั้นมี startword นั้นอยู่แล้ว ไม่ต้องเติม startword อีก
// โดยถ้า word มีค่า null หรือ undefined ให้ return เป็น undefined
// ตัวอย่างเช่น
// startWord = "1-2565-", word = "Hello World", จะได้ "1-2565-Hello World"
// startWord = "JS" , word = "beginner" จะได้ "JSbeginner"
// startWord = "first" , word = "firststep" จะได้ "firststep"
// startWord = "first" , word = null จะได้ undefined
// startWord = "first" , word = undefined จะได้ undefined