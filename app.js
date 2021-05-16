'use strict';
function randomAge(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let userArr = [];
function User(name, salary) {
    this.name = name;
    this.salary = salary;
    this.age = randomAge(20, 55);
    userArr.push(this);
    console.log(userArr);

}

function storeIteam() {
    let stringData = JSON.stringify(userArr);
    localStorage.setItem('userArr', stringData);
}

let here = document.getElementById('here');
let table = document.createElement('table');
here.appendChild(table);

function header1() {
    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);

    let header = ['name', 'salary', 'age'];
    for (let i = 0; i < header.length; i++) {

        let headerR1 = document.createElement('th');
        headerRow.appendChild(headerR1);
        headerR1.textContent = header[i];


    }
}
User.prototype.renderFun = function () {
  
    let trElement = document.createElement('tr');
    table.appendChild(trElement);
    let tdElement = document.createElement('td');
    trElement.appendChild(tdElement);
    tdElement.textContent = this.name;
    let tdSalary = document.createElement('td');
    trElement.appendChild(tdSalary);
    tdSalary.textContent = this.salary;
    let tdAge = document.createElement('td');
    trElement.appendChild(tdAge);
    tdAge.textContent = this.age;
}
// ahmad.renderFun();
header1();

let form = document.getElementById('form');
form.addEventListener('submit', submitter);

function submitter(event) {

    event.preventDefault();
    let name = event.target.name.value;
    let salary = event.target.salary.value;
    let newObj = new User(name, salary);
    console.log(newObj);
    // newObj.header1();

    newObj.renderFun();
    storeIteam();

}
// storeIteam();

function getData() {
    let data = localStorage.getItem('userArr');
    // console.log(data);
    let parseData = JSON.parse(data);
    // console.log('before',parseData);
    if (parseData) {


        for (let i = 0; i < parseData.length; i++) {

            new User(parseData[i].name, parseData[i].salary);
        }

    } else {
        let ahmad = new User('ahmad', 500);
        let dana = new User('dana', 700);
    }
}

getData();
for (let i = 0; i < userArr.length; i++) {
    userArr[i].renderFun();
}