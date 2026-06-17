let companies =
JSON.parse(
localStorage.getItem("companies")
) || [];

function addCompany(){

let company =
document.getElementById("company").value;

let packageValue =
document.getElementById("package").value;

let deadline =
document.getElementById("deadline").value;

if(
company === "" ||
packageValue === "" ||
deadline === ""
){
alert("Please fill all fields");
return;
}

companies.push({
company,
packageValue,
deadline
});

localStorage.setItem(
"companies",
JSON.stringify(companies)
);

displayCompanies();
document.getElementById("company").value = "";
document.getElementById("package").value = "";
document.getElementById("deadline").value = "";
}

function displayCompanies(){

let output = "";

for(let i=0;i<companies.length;i++){

output += `

<div class="company">

<h3>${companies[i].company}</h3>

<p>
Package:
${companies[i].packageValue}
</p>

<p>
Deadline:
${companies[i].deadline}
</p>

<button onclick="deleteCompany(${i})">
Delete
</button>

</div>

`;

}

updateStats();

document.getElementById(
"companyList"
).innerHTML = output;

}

function deleteCompany(index) {
	companies.splice(index,1);

localStorage.setItem(
"companies",
JSON.stringify(companies)
);

displayCompanies();

}
displayCompanies();

function searchCompany(){

let searchText =
document.getElementById("search")
.value.toLowerCase();

let output = "";

for(let company of companies){

if(
company.company
.toLowerCase()
.includes(searchText)
){

output += `

<div class="company">

<h3>${company.company}</h3>

<p>
Package:
${company.packageValue}
</p>

<p>
Deadline:
${company.deadline}
</p>

</div>

`;

}

}


document.getElementById(
"companyList"
).innerHTML = output;

}

function updateStats(){

document.getElementById(
"totalCompanies"
).innerText = companies.length;

let highest = 0;

for(let company of companies){

let pkg = parseFloat(
company.packageValue
);

if(pkg > highest){
highest = pkg;
}

}

document.getElementById(
"highestPackage"
).innerText = highest + " LPA";

}