async function getPlayerCount(serverUrl = "mc.cinderquest.net") {
    try {
        // Make the API request
        const response = await fetch(`https://api.mcsrvstat.us/3/${serverUrl}`);
        
        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`API is down!`);
        }
        
        // Get the JSON data from the API
        const data = await response.json();
        
        // Check if the server is online
        if (!data.online) {
            return `Server ${serverUrl} is offline`;
        }

                                    // UPDATE THE DIV/IMG TIMES! //

        // Update the player-count div
        document.getElementById("player-count").innerHTML = `<span style="color: #a8a8a8;">${data.players.online}</span><span style="color: #545454;">/<span><span style="color: #a8a8a8;">${data.players.max}</span>`;

        // Update the mc-version div
        document.getElementById("mc-version").textContent = data.protocol.name;

        // Update the mc-icon img
        document.getElementById("mc-icon").src = data.icon;

        // Update the mc-motd img
        document.getElementById("mc-motd1").innerHTML = data.motd.html[0];
        document.getElementById("mc-motd2").innerHTML = data.motd.html[1];

                                        // Okay it's done //
        // console logging time!
        console.log(`${data.players.online}/${data.players.max} Online`);
        console.log(data.protocol.name)
        console.log(data.icon)
        console.log(data.motd.html)

        // Okay now return that everything is okay
        return `Server ${serverUrl} is online`;

    } catch (error) { // If something stupid happens
        return `Error connecting to server: ${error.message}`;
    }
}

// Prints if it's online or not or an error
getPlayerCount().then(result => console.log(result));


