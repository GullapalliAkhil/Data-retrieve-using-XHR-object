
//Calling the function getUserData.
document.getElementById("button").addEventListener("click", getUserData);

//Function to get the Git Users Data and Render in UI.
function getUserData() {

    //API URL
    let URL = "https://api.github.com/users";

    //Intialize the XMLHttpRequest Object.
    let xhttp = new XMLHttpRequest();

    //Create a Open Request.
    xhttp.open("GET", URL, true);

    //Defining a function when readyStateProperty Changes.

    xhttp.onreadystatechange = function () {

        if (this.readyState === 4 && this.status === 200) {

            //Storing the Data in JSON Format.

            let Data = JSON.parse(this.responseText);

            let innerhtml = "";

            for (let i in Data) {

                innerhtml += '<div id="usersEach">' +
                    '<img src  = " ' + Data[i].avatar_url + ' "> ' +
                    '<ul>' +
                    '<li>Login :' + Data[i].login + '</li>' +
                    '<li>ID :' + Data[i].id + '</li>' +
                    '<li>Type :' + Data[i].type + '</li>' +
                    '<li>Site Admin :' + Data[i].site_admin + '</li>' +
                    '</ul>' +
                    '</div>';
                document.getElementById("show").innerHTML = innerhtml;
            }
        }
    }
    xhttp.send();
}
