
fetch('https://api.battlemetrics.com/servers/13971070')
    .then(res => {
        return res.json()
        if (res.ok) {
            console.log('SUCCESS')
        } else {
            console.log("Not Successful")
        }
    })
    .then(data => {
        console.log(data)
        var fuckthisse = data.data.attributes.name
        console.log(fuckthisse)
        document.getElementById("servername").innerHTML = data.data.attributes.name;
        document.getElementById("playernumber").innerHTML = data.data.attributes.players + "/100";

    })
    .catch(error => console.log('ERROR'))