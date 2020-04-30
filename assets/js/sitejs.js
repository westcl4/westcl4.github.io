
 
fetch("../assets/js/artists.json")
 

    .then(artistsResponse => {
        return artistsResponse.json();
    })

    .then (artistData => {
        console.log(artistData["Artists"])
        artistData["Artists"].forEach(Artist => {
            
        });
    })

        
fetch("../assets/js/songs.json")
    
    .then(songsResponse =>{
        return songsResponse.json();
    })
    
    .then(songdata => {
        console.log(songdata["Songs"])
    })
    
   

    /*data ["img"][0].forEach(Img =>{

    });

    for (let i = 0; i < "Data"[0]["Artists"]; i++) {
        Artists[i].src = (data["Data"][0]["Artist"][i]["img"][i]);
    
    }
    
    for (let i = 0; i < "Data"[0]["Songs"]; i++) {
        Songs[i].src = (data["Data"][0]["Artist"][i]["Song"][i]["Scrobbles"][i]);
    
    
    }
    for (let i = 0; i < data.length; i++) {
        musicdata = data[i];
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(musicdata.))
    }

/*for (let i = 0; i < "Data"[0]["Artists"]; i++) {
    Artists[i].src = (data["Data"][0]["Artist"][i]["img"][i]);

}

for (let i = 0; i < "Data"[0]["Songs"]; i++) {
    Songs[i].src = (data["Data"][0]["Artist"][i]["Song"][i]["Scrobbles"]);


}*/