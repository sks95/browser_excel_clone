let save = document.querySelector(".download");
let clear = document.querySelector(".new");
let open = document.querySelector(".open");
let input = document.querySelector(".inputButton");

save.addEventListener("click", function () {
	const data = JSON.stringify(sheetDB);
	console.log(data);
	// blob
	// excel -> npm xlsx hw
	const blob = new Blob([data], { type: "application/json" }); // converts data to file of this type
	const url = window.URL.createObjectURL(blob); // creates file to url

	let a = document.createElement("a");
	// download
	a.download = "file.json"; // downloads in this file
	a.href = url; // url contains data
	a.click();
});

// OPEN
/* <input type="file" class="open-file"> */
input.addEventListener("change", function () {
	let files = input.files;
	let reqFileObj = files[0];

	var fr = new FileReader();
	fr.readAsBinaryString(reqFileObj);
	// fr.readAsText(reqFileObj);

	fr.addEventListener("load", function () {
		let data = fr.result;
		console.log(JSON.parse(data));
		// let newWorkDB = XLSX.read(data, { type: "binary" });

		let activeSheet = document.querySelector(".active-sheet");
		let sheetIdx = activeSheet.getAttribute("sheetidx") - 1;

		let openSheet = JSON.parse(data);
		sheetDB = openSheet;
		workSheetDb[sheetIdx] = openSheet;
		// console.log(openSheet);
		// console.log(workSheetDb[sheetIdx]);
		setUI(openSheet);
	});
});

// NEW
// ui empty ->worksheetDB empty
clear.addEventListener("click", function (e) {
	// console.log(sheetDB);
	initUI();
	let newSheetDB = cleanSheetDB();
	let activeSheet = document.querySelector(".active-sheet");
	let sheetIdx = activeSheet.getAttribute("sheetidx") - 1;
	sheetDB = newSheetDB;
	workSheetDb[sheetIdx]= newSheetDB;
});

function cleanSheetDB() {
	let newSheetDB = []; // Stores data of all cells present in the sheet
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
				fontColor: "black",
				cellColor: "white",
			};
			row.push(cell);
		}
		newSheetDB.push(row);
	}
	return newSheetDB;
}

// Adding hover effect
(function hoverEffect() {
	clear.addEventListener("mouseover", function () {
		clear.classList.add("hover-active-btn");
	})
	clear.addEventListener("mouseout", function () {
		clear.classList.remove("hover-active-btn");
	})
	
	open.addEventListener("mouseover", function () {
		open.classList.add("hover-active-btn");
	})
	open.addEventListener("mouseout", function () {
		open.classList.remove("hover-active-btn");
	})
	
	save.addEventListener("mouseover", function () {
		save.classList.add("hover-active-btn");
	})
	save.addEventListener("mouseout", function () {
		save.classList.remove("hover-active-btn");
	})
})();