// Accept 1D array of songs 
// Apply weighting and return list of songs according to score
// Normalize track features
// Use extendable parameter function to determine a universal weighting
// Apply weighting to track feature objects
// Sum features to determine a "score"
// Sort output array based on "score" of each feature
// Reverse output?  Depending on order in which we want to play the songs, accept another parameter and agjust the list
// Valence, tempo,

function weightTracks(){
    // arguments object will contain the unlimited number of features
    var args = Array.from(arguments);
    for (i = 0; i < args.length; i++){
        if (typeof(args[i]) !== "number"){
            return "Argument " + i + " is not a number, aborting weighting process.";
        }
        if (args[i] < 0){ // Loudness normalization, can change range later
            args[i] = Math.abs(args[i]/60);  // Typical range for decibals is 0-60 right now
        }
        else if (args[i] > 40){ // Tempo normalization
            args[i] = (args[i]-40)/160;     // Typical range, but again, 50-200 is extremely large
        }                                   // Should probably change this to be more precise
    }                                       // from user to user

    // Args are now all normalized to some value between 0-1
    // Straight sum it from here?
    
    return sum(args);
}

function sum(args){
    total = 0;
    for (i = 0; i < args.length; i ++)
        total += args[i];
    return total;
}

console.log(weightTracks(50,45,0.2));