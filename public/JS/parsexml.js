function readXML(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        var text = rawFile.responseText;
        if (rawFile.readyState === 4){
            if (rawFile.status === 200 || rawFile.status === 0){

            }
        }
    }
    rawFile.send();
    return rawFile.responseText;
}