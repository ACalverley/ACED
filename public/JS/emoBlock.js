// block formation 
// make count (for block) a global scope  
//count starts at 0 since values start at 0
//make blockSize a global scope  

// posi = position in the parsed data where emotions start 
//make posi a global scope 
// posi = 1;

// emoCount will be set as number of emotions we plan on taking in 
// emoCount = 3; 
//blockCount starts at 0;

//increment global

// cBlock will be initiallized as global 

array = require('parsetxt');
function emoBlock(){

// adds block in order of neutral, happy, sad etc
// loop through each emotion
    for (i = posi; i < pso + emoCount; i++){
        // each emotion, go through each new data piece      
            for (k = count; k < count + blockSize; k++){
            eBlock = eBlock + array[i, k];
            }       
        //increment along x axis 
        cBlock[increment, i] = (eBlock*(2/3))/blockSize; // time TBD 
        eBlock = 0; // reset it for next round 
    }

    
    //updating globals for next run 
    blockCount = blockCount + blockSize;
    increment ++;
    return cBlock;
}
