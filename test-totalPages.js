function totalPages(arrayitems, rowsPerPage) {
    if (arrayitems === null || arrayitems === undefined) {
        return undefined
    }

    if (rowsPerPage === null || rowsPerPage === undefined || rowsPerPage === 0){
        return 1
    }

    // คำนวณจำนวนหน้า โดยหารจำนวน arrayitem ทั้งหมดด้วย rowsPerPage
    const pageCount = Math.ceil(arrayitems.length / rowsPerPage)
    return pageCount
}

// ตัวอย่างการใช้งาน
console.log(totalPages(["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "item10"], 5)); // 2
console.log(totalPages(null, 20)); // undefined
console.log(totalPages(undefined, 20)); // undefined
console.log(totalPages(["item1", "item2", "item3", "item4", "item5"], 0)); // 1
console.log(totalPages(["item1", "item2", "item3", "item4", "item5"], null)); // 1
console.log(totalPages(["item1", "item2", "item3", "item4", "item5"], undefined)); // 1


// test-totalPages
// ให้เขียน Function ชื่อ totalPages (arrayitems, rowsPerPage) โดยที่ arrayitems คือ array ของรายการ items ทั้งหมด 
// และ rowsPerPage คือ จํานวนรายการ Item ที่จะแสดงต่อ 1 Page โดยฟังก์ชันจะ return จํานวน page ที่คำนวณได้

// • กรณี arrayitems เป็น null หรือ undefined return undefined 
// • กรณี rowsPerPage เป็น null หรือ undefined หรือเป็น 0 จะ return 1

// ตัวอย่างเช่น
// i, arrayltems = [item1, item2, item3,... item35], rowsPerPage = 15 return 3
// ii. arrayltems = [item1, item2, item3,..., item10], rowsPerPage = 20 return 1
// iii: arrayltems = [item1, item2, item3,.., item40], rowsPerPage = 10 return 4
// iv. arraylters = [item1, item2, item3,..., item25], rowsPerPage = 0 return 1
// v. arrayItems = [item 1, item2, item3,..., item25], rowsPerPage = null return 1
// vi. arrayItems = [item1, item2, item3,... item25], rowsPerPage = undefined return 1
// vil. arrayltems= null, rowsPerPage=20 return undefined
// viii. arrayltems = undefined, rowsPerPage = 20 return undefined