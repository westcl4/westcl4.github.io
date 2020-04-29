fetch("assets/js/data.json")
.then(response => { return response.json()})
.then(data =>{
    let music = data["data"]
    let artists = document.getElementsByClassName

})

function topTenTracks(data){
    if (typeof(data) == 'object') {
        document.write('ol');

        for (var i in data){
            
        }
    }
}