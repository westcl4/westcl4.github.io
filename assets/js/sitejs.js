
let data = fetch("../assets/js/data.json")

    .then(res => {
        return res.json();
    })

    .then(data => {
        console.log(data["Data"])
    });



for (let i = 0; i < "Data"[0]["Artists"]; i++) {
    Artists[i].src = (data["Data"][0]["Artist"][i]["img"][i]);

}

for (let i = 0; i < "Data"[0]["Songs"]; i++) {
    Songs[i].src = (data["Data"][0]["Artist"][i]["Song"][i]["Scrobbles"]);


}