// Grid Container JS

// Adding all alphabets in each Top Coloumn
let topRow = document.querySelector(".top-row");
let str = "";
for (let i = 0; i < 26; i++) {
	str += `<div class='col'>${String.fromCharCode(65 + i)}</div>`;
}
topRow.innerHTML = str;

// Adding no.s from 1-100 in leftmost column
let leftCol = document.querySelector(".left-col");
str = "";
for (let i = 0; i < 100; i++) {
	str += `<div class='left-col_box'>${i + 1}</div>`;
}
leftCol.innerHTML = str;

// 2d array -> Generating our grid
let grid = document.querySelector(".grid");
str = "";
for (let i = 0; i < 100; i++) {
	str += `<div class="row">`;
	for (let j = 0; j < 26; j++) {
		str += `<div class='col' rid=${i} cid=${j} contenteditable="true"></div>`;
	}
	str += "</div>";
}
grid.innerHTML = str;

workSheetDb = []; // Stores data of every sheet
function initCurrentSheetDb() {
	let sheetDB = []; // Stores data of all cells present in the sheet
	for (let i = 0; i < 100; i++) {
		let row = [];
		for (let j = 0; j < 26; j++) {
			let cell = {
				bold: false,
				italic: "noraml",
				underline: "none",
				fontFamily: "Arial",
				fontSize: "16",
				halign: "left",
				value: "",
				children: [],
				formula: "",
				fontColor: "",
				cellColor: "",
			};
			row.push(cell);
		}
		sheetDB.push(row);
	}
	workSheetDb.push(sheetDB);
}
initCurrentSheetDb();