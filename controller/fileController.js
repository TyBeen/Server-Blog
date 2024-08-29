const fs = require("fs");


// Gets all data in file
exports.getAllData = (req, res) => {
    const data = fs.readFileSync("api/blog.json", { encoding: "utf8", flag: "r" })
    const dataResponse = JSON.parse(data);

    res.json(dataResponse);

}

// Gets specific data by the "postid"
exports.getDataById = (req, res) => {
    const data = fs.readFileSync("api/blog.json", { encoding: "utf8", flag: "r" })
    const dataFiles = JSON.parse(data);

    for (let dataFile of dataFiles) {
        if (dataFile.postid === parseInt(req.params.postid)) {
            return res.status(200).send(dataFile);
        }
    }

    res.status(404).send("Data not found.")
}

// Adds new data to the end of the file
exports.addNewData = (req, res) => {
    const data = fs.readFileSync("api/blog.json", { encoding: "utf8", flag: "r" })
    const dataResponse = JSON.parse(data);

    const newID = dataResponse[dataResponse.length - 1].postid + 1;

    const newDataFile = {
        postid: newID,
        title: req.body.title,
        author: req.body.author,
        body: req.body.body
    };

    dataResponse.push(newDataFile)

    const fileContent = JSON.stringify(dataResponse);

    fs.writeFile("api/blog.json", fileContent, function (err) {
        if (err) {
            console.log(err)
        }

        console.log("Added to file");
    })

    res.send(newDataFile);
}

// Updates specific data in the file
exports.updateData = (req, res) => {
    const data = fs.readFileSync("api/blog.json", { encoding: "utf8", flag: "r" })
    const dataFiles = JSON.parse(data);

    for (let dataFile of dataFiles) {
        if (dataFile.postid === parseInt(req.params.postid)) {
            dataFile.title = req.body.title

            const fileContent = JSON.stringify(dataFiles);

            fs.writeFile("api/blog.json", fileContent, function (err) {
                if (err) {
                    console.log(err)
                }

            console.log("Updated file");
        });

            res.status(200).send("Update Successful");
            return;
        }
    }

    res.send(404).send("Data not found")
}

// deletes specific data in the file
exports.deleteData = (req, res) => {
    const data = fs.readFileSync("api/blog.json", { encoding: "utf8", flag: "r" })
    const dataFiles = JSON.parse(data);

    for (let i = 0; i < dataFiles.length; i++) {
        if (dataFiles[i].postid === parseInt(req.params.postid)) {
            dataFiles.splice(i, 1);

            const fileContent = JSON.stringify(dataFiles);

            fs.writeFile("api/blog.json", fileContent, function (err) {
                if (err) {
                    console.log(err)
                }

            console.log("Updated file");
        });

            res.status(200).send("Data deleted");
            return;
        }
    }

    res.send(404).send("Data not found")
}