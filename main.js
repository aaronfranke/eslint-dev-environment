const budget = {
	myBudget: [
		{
			title: "Phone",
			budget: 35,
		},
		{
			title: "Internet",
			budget: 45,
		},
		{
			title: "Education",
			budget: 80,
		},
		{
			title: "Eat out",
			budget: 25,
		},
		{
			title: "Rent",
			budget: 275,
		},
		{
			title: "Grocery",
			budget: 110,
		},
		{
			title: "Pharmacy",
			budget: 40,
		},
		{
			title: "Donations",
			budget: 10,
		},
	],
};

function generateTable(b) {
	const p = document.getElementById("list");
	p.innerHTML = "";
	for (var i = 0; i < b.length; i++) {
		const div = document.createElement("div");
		div.innerHTML = `${b[i].title} - ${b[i].budget}`;
		p.appendChild(div);
	}
}

generateTable(budget.myBudget);

function aZ() {
	const newArray = [...budget.myBudget];
	newArray.sort((a, b) => (a.title > b.title ? 1 : -1));
	generateTable(newArray);
}

function zA() {
	const newArray = [...budget.myBudget];
	newArray.sort((a, b) => (a.title < b.title ? 1 : -1));
	generateTable(newArray);
}

function biggerBudget() {
	const newArray = [...budget.myBudget];
	newArray.sort((a, b) => (a.budget < b.budget ? 1 : -1));
	generateTable(newArray);
}

function smallerBudget() {
	const newArray = [...budget.myBudget];
	newArray.sort((a, b) => (a.budget > b.budget ? 1 : -1));
	generateTable(newArray);
}
