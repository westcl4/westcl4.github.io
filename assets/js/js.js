 function showTheList(json) {
        var arrItems = [];
        arrItems = JSON.parse(json); 	// Fill JSON data to an array.
        // Now you can use the data in the array for different purpose.
        // I am simply showing the data on my web page using the <p> element.
        for (i = 0; i <= arrItems.length - 1; i++) {
            var p = document.getElementById('birds');
            p.innerHTML = p.innerHTML + ' <br > ' + arrItems[i].Name;
        }
    }