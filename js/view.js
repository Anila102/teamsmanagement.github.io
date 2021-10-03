showTeams();
function type() {
    let seo = document.getElementById("seo");
    let development = document.getElementById("development");
    let programming = document.getElementById("programming");
    let type;
    if (seo.checked) {
        type = seo.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (development.checked) {
        type = development.value;
    }
    return type;

}
let createTeam = document.getElementById("createTeam");
createTeam.addEventListener("click", createNewTeam)
function createNewTeam() {

    let teamName = document.getElementById("teamName");

    let teamType = type();



    // console.log(teamType);
    let team = localStorage.getItem("team");
    // console.log(team)
    let teamObj;
    if (team == null) {
        teamObj = [];

    }
    else {
        teamObj = JSON.parse(team);
    }
    let myObj = {
        teamTitle: teamName.value,
        typeTitle: teamType
    }
    // console.log(myObj.typeTitle)

    teamObj.push(myObj);
    localStorage.setItem("team", JSON.stringify(teamObj));
    // console.log(teamObj);
    teamName.value = "";
    teamType.value = "";

 




    showTeams();

}

function showTeams() {
    let team = localStorage.getItem("team");
    let createdTeams = document.getElementById("createdTeams");
    let teamObj;
    if (team == null) {
        teamObj = [];

    }
    else {
        teamObj = JSON.parse(team);
    }
    let html = "";
    teamObj.forEach(function (element, index) {
        // console.log(element.teamTitle)
        // console.log(element.typeTitle)

        html += `  <div id=${index+1} class="noteCard card mx-2 my-2 " style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${index + 1}. ${element.teamTitle.toUpperCase()}</h5>
                <p class="card-text">${element.typeTitle.toUpperCase()}</p>
                <button id="${index}" onclick="deleteTeam(this.id)"  class="btn btn-primary">Delete</button>
                <button id="details"  class="btn btn-primary">Details</button>

            </div>
        </div> `;
    });
    createdTeams.innerHTML = html;



    let newuser = localStorage.getItem("newuser");
    let userObj;
    if (newuser == null) {
        userObj = [];
    }
    else {
        userObj = JSON.parse(newuser);
    }

    let membersName = document.querySelector("#membersName");
    let membersNameHtml = "";
    // let membersName = document.getElementById("membersName");
    userObj.forEach(function (element, index) {
 
        membersNameHtml += `
                            <ul id="member" class="list-group">
                            <li id="${index + 1}" class="list-group-item">
                            <input id="memberCheck" class="form-check-input me-1" type="checkbox" value="" aria-label="..."></input><b> ${element.name}</b> </li>
                            </ul> `;
    });

    membersName.innerHTML = membersNameHtml;
    console.log(membersName)









    

}

function deleteTeam(index) {

    let team = localStorage.getItem("team");
    let teamObj;
    if (team == null) {
        teamObj = [];

    }
    else {
        teamObj = JSON.parse(team);
    }
    teamObj.splice(index, 1);
    localStorage.setItem("team", JSON.stringify(teamObj));
    showTeams();
}


