/* ----- ALL OUT OF SERVICE thanks to VUE.JS ----- */

function senateTable(senate) {
    console.log(senate);
    var tBody = document.getElementById("tBody");
    var dropdown = document.getElementById("state");
    var partyArr = partyCheck();
    tBody.innerHTML = "";
    tBody.insertRow("tRow");
    if (dropdown.selectedIndex != 0 && partyArr.length > 0) {
        for (var i = 0; i < senate.length; i++) {
            for (var j = 0; j < partyArr.length; j++) {
                if (senate[i].party == partyArr[j].value &&
                    senate[i].state == states[dropdown.selectedIndex].abbreviation) {
                    buildRow(senate[i]);
                }
            }
        }
    } else if (partyArr.length > 0) {
        for (var i = 0; i < senate.length; i++) {
            for (var j = 0; j < partyArr.length; j++) {
                if (senate[i].party == partyArr[j].value) {
                    buildRow(senate[i]);
                }
            }
        }
    } else if (dropdown.selectedIndex != 0) {

        for (var i = 0; i < senate.length; i++) {
            if (senate[i].state == states[dropdown.selectedIndex].abbreviation) {
                console.log(senate);
                buildRow(senate[i]);
            }
        }
    } else {
        for (var i = 0; i < senate.length; i++) {
            buildRow(senate[i]);
        }
    }
}



function memberTable(allMembers) {
    var tBody = document.getElementById("tBody");
    var dropdown = document.getElementById("state");
    var partyArr = partyCheck();
    tBody.innerHTML = "";
    tBody.insertRow("tRow");
    if (dropdown.selectedIndex != 0 && partyArr.length > 0) {
        for (var i = 0; i < allMembers.length; i++) {
            for (var j = 0; j < partyArr.length; j++) {
                if (allMembers[i].party == partyArr[j].value &&
                    allMembers[i].state == states[dropdown.selectedIndex].abbreviation) {
                    buildRow(allMembers[i]);
                }
            }
        }
    } else if (partyArr.length > 0) {
        for (var i = 0; i < allMembers.length; i++) {
            for (var j = 0; j < partyArr.length; j++) {
                if (allMembers[i].party == partyArr[j].value) {
                    buildRow(allMembers[i]);
                }
            }
        }
    } else if (dropdown.selectedIndex != 0) {

        for (var i = 0; i < allMembers.length; i++) {
            if (allMembers[i].state == states[dropdown.selectedIndex].abbreviation) {
                console.log(allMembers);
                buildRow(allMembers[i]);
            }
        }
    } else {
        for (var i = 0; i < allMembers.length; i++) {
            buildRow(allMembers[i]);
        }
    }
}

function buildRow(allMembers) {
    var tBody = document.getElementById("tBody");
    var tRow = tBody.insertRow();

    tBody.insertRow("tRow");
    tRow.insertCell().innerHTML = allMembers.title;
    
    if (allMembers.middle_name == null) { //accounts for members w/o middle names
        var repName =
            allMembers.last_name + ", " + allMembers.first_name;
        tRow.insertCell().innerHTML =
            repName.link(allMembers.url); //uses the result to hyperlink the string 
    } else {
        var repName =
            allMembers.last_name +
            ", " + allMembers.first_name +
            " " + allMembers.middle_name;
        tRow.insertCell().innerHTML =
            repName.link(allMembers.url); //uses the result to hyperlink the string
    }

    tRow.insertCell().innerHTML = allMembers.party;
    tRow.insertCell().innerHTML = allMembers.state;

    if (allMembers.seniority == 1) {
        tRow.insertCell().innerHTML = allMembers.seniority + " year";
    } else {
        tRow.insertCell().innerHTML = allMembers.seniority + " years";
    }

    tRow.insertCell().innerHTML = allMembers.votes_with_party_pct + "%";
}

function partyCheck() {
    var partyNode = document.querySelectorAll('input[type=checkbox]:checked'); //finds the values of all checkboxes on the page, places into a node
    var partyArr = Array.from(partyNode); //converts the node into an Array type variable 

    return partyArr;
}
