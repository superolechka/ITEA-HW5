const positions = ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA', 'Middle QA', 'Senior QA', 'Project manager'];

let names;

function getNames(positions) {
    names = new Array(positions.length);
    for (let i = 0; i < positions.length; i += 1) {
        names[i] = prompt("Введіть ім'я працівника:")
    }
}
getNames(positions);

let team = {};

function createTeam (positions, names) {
    for (let i = 0; i < positions.length; i += 1) {
        let person = {};
        person.name = names[i];
        person.position = positions[i];
        let n = i + 1;
        let index = `person${n}`
        team[index] = person;  
    }
} 
createTeam(positions, names);

function setSalary(team) { 
    for (let i = 0; i < positions.length; i += 1) {
        let salary;
        let n = i + 1;
        if (team[`person${n}`]['position'].indexOf('Junior') !== -1) {
            salary = Math.floor(Math.random()*(1000-500))+500;
        } else if (team[`person${n}`]['position'].indexOf('Middle') !== -1) {
            salary = Math.floor(Math.random()*(2000-1500))+1500;
        } else if (team[`person${n}`]['position'].indexOf('Senior') !== -1) {
            salary = Math.floor(Math.random()*(3000-2500))+2500;
        } else {
            salary = Math.floor(Math.random()*(4500-4000))+4000;
        }
        team[`person${n}`]['salary'] = salary;
    }
}
setSalary(team);
console.log(team);

function showPerson(team) {
    for (let i = 0; i < positions.length; i += 1) {
        let n = i + 1;
        team[`person${n}`].tellAboutYourSelf = function () {
            console.log(`Мене звати ${team[`person${n}`]['name']} і я - ${team[`person${n}`]['position']}. Я заробляю $${team[`person${n}`]['salary']}.`);
        } 
        team[`person${n}`].tellAboutYourSelf();
    }
}
showPerson(team);

team.showTeam = function() {
    for (let i = 0; i < positions.length; i += 1) {
        let n = i + 1;
        console.log(`${team[`person${n}`]['name']} - ${team[`person${n}`]['position']}. Заробітна плата - $${team[`person${n}`]['salary']}.`);
    }
}

team.showTeam();

