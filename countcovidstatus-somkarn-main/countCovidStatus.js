const { template } = require('@babel/core')

//code here
function countCovidStatus(covidStatusArray) {
    //กรณี covidStatusArray เป็น null หรือ undefined ให้คืนค่าเป็น undefined
    if (covidStatusArray === null || covidStatusArray === undefined) {
        return undefined
    }
    //สร้างobject เก็บresult
    const result = {}

    //วนลูปเพื่อนับสถานะ
    for (const status of covidStatusArray) {
        //กรณีที่ status เป็นสถานะที่ไม่ใช่สถานะโควิดที่กำหนด
        if (status !== 'negative and low risk' &&
            status !== 'negative and high risk' &&
            status !== 'positive') {
            continue
        }
        //ถ้า status ยังไม่ถูกนับใน result ให้เริ่มจาก 0
        if (result[status] === undefined) {
            result[status] = 0
        }
        //// เพิ่มจำนวนคนใน status นี้ขึ้นไป 1
        result[status]++

    }
    
    // ถ้าไม่มีสถานะโควิดที่ถูกนับ ให้คืนเป็น empty object
    if (Object.keys(result).length === 0) {
        return {};
    }

    return result

}

module.exports = countCovidStatus

// ข้อ 1. ให้เขียน Function ชื่อ countCovidStatus (covidStatusArray) เพื่อ return object ที่แสดงรายการสถานะที่แตกต่างกันและจำนวนคนที่อยู่ในสถานะนั้น โดยสถานะโควิดของทุกคนเก็บอยู่ในพารามิเตอร์ covidStatusArray ซึ่งมี 3 สถานะ ได้แก่ 'negative and low risk', 'negative and high risk', 'positive' (case sensitive)

// - กรณี covidStatusArray เป็น null หรือ undefined ให้คืนค่าเป็น undefined
// - กรณี covidStatusArray เป็น empty array [ ] ให้คืนเป็น empty object { }
// - กรณี covidStatusArray ปรากฎรายการที่ไม่ใช่สถานะโควิดที่กำหนด ไม่ต้องนับรายการนั้น และถ้าไม่มีรายการอื่นที่ต้องนับ ให้คืนเป็น empty object { }

// - ตัวอย่างเช่น
//   - covidStatusArray = ['negative and low risk', 'positive', 'negative and low risk', 'negative and high risk', 'positive', 'negative and low risk' ] return { 'negative and low risk': 3, positive: 2, 'negative and high risk': 1}
//   - covidStatusArray = ['positive', 'negative and low risk', 'positive' ] return { 'negative and low risk’: 1, 'positive' : 2}
//   - covidStatusArray = ['negative and low risk', 'positive', 'negative and low risk', 'abnormal', 'negative and high risk', 'positive', ' normal' ] return { 'negative and low risk’: 2, positive: 2, 'negative and high risk': 1}
//   - covidStatusArray = ['covid'] return { }
//   - covidStatusArray = [ ] return { }
//   - covidStatusArray = null return undefined
//   - covidStatusArray = undefined return undefined
