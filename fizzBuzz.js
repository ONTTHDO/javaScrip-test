function fizzBuzz(max) {

  let result = ''

  for (let i = 1; i <= max; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result += 'FizzBuzz'
    } else if (i % 3 === 0) {
      result += 'Fizz'
    } else if (i % 5 === 0) {
      result += 'Buzz'
    } else {
      result += i
    }
  }
  return result

  console.log(fizzBuzz(15))

  // ตัวอย่าง
  //console.log(fizzBuzz(10)); // "12Fizz4BuzzFizz78FizzBuzz"
  //console.log(fizzBuzz(16)); // "12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz16"

}
module.exports = fizzBuzz

// # Problem: FizzBuzz
// Write a JavaScript function called _fizzBuzz(max)_ that takes a maximum value as input and generates the FizzBuzz pattern up to that value.
// The input value _max_ will be a positive integer. In the FizzBuzz pattern, replace numbers that are multiples of 3 with "Fizz,"
// numbers that are multiples of 5 with "Buzz," and numbers that are multiples of both 3 and 5 with "FizzBuzz."
// Return a single string that represents the entire pattern without spaces between terms.
// ===========================================================================================================================================
// เขียนฟังก์ชัน JavaScript ชื่อ fizzBuzz(max) ที่รับค่าเข้ามาเป็นจำนวนเต็มบวก max และสร้างรูปแบบ FizzBuzz จนถึงค่า max
// โดยในรูปแบบ FizzBuzz จะต้องแทนเลขที่เป็นตัวเลขหาร 3 ด้วย "Fizz" และหาร 5 ด้วย "Buzz" และหารทั้ง 3 และ 5 ด้วย "FizzBuzz"
// และคืนผลลัพธ์ในรูปของสตริงที่ไม่มีช่องว่างระหว่างข้อความ.

// ## Output
// A single string representing the FizzBuzz pattern without spaces between terms.

// ### Example 1
// Input: fizzBuzz(10)
// Output: "12Fizz4BuzzFizz78FizzBuzz"

// Explanation:
// Numbers 3, 6, and 9 are replaced by "Fizz."
// Numbers 5 and 10 are replaced by "Buzz."
// The pattern generated up to 10 is "12Fizz4BuzzFizz78FizzBuzz"

// ### Example 2
// Input: fizzBuzz(16)
// Output: "12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz16"

// Explanation:
// Numbers 3, 6, 9, 12, and 15 are replaced by "Fizz."
// Numbers 5 and 10 are replaced by "Buzz."
// Number 15 is replaced by "FizzBuzz."
// The pattern generated up to 16 is "12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz16"
