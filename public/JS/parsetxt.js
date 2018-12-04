var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function main () {
    text = readTextFile("file:///Users/willmcarthur/Documents/ACED/ACED/Logs/Participant1.txt");
    values = removeExcess(text);
    // console.log(values);
}
// There are 93 0 values in this test

function removeExcess(text){
    var video = text.search("00:00:00.000");    // Find the start of the data
    var short = text.slice(video);      // Remove the the header contents
    var lines = short.split('\n');      // Create array of lines
    var values = [];
    for (i = 0; i < lines.length; i ++){
        values.push(lines[i].split('\t', 4));   // Create 2D array w/ last value as sad
    }
    missedData = 0;
    for (i = 0; i < values.length; i ++){
        for (j = 0; j < values[i].length; j++){
            if (values[i][j] === "FIND_FAILED" || values[i][j] === "FIT_FAILED"){
                values[i][j] = '0';
                missedData++;
            }   // Clean up non number values
        }
    }
    console.log(missedData);
    return values;
}

function readTextFile(file, callback){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    // rawFile.onreadystatechange = function () {
    //     // console.log(rawFile);
    //     var text = rawFile.responseText;
    //     if (rawFile.readyState === 4){
    //         if (rawFile.status === 200 || rawFile.status === 0){

    //         }
    //     }
    // }
    rawFile.send();
    return rawFile.responseText;
}

module.exports = main;