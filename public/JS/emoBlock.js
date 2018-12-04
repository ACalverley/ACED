// block formation 
// make count (for block) a global scope  
//count starts at 0 since values start at 0
//make blockSize a global scope  
// posi = position in the parsed data where emotions start 
//make posi a global scope 
// whichi will be 1 since 0 is time 

// emoCount will be set as number of emotions we plan on taking in 
function emoBlock(){
     // set/reset block values
    emoBlock = 0;
    hBlock = 0; // happy block
    sBlock = 0; // sad block

    //for size of block, we go through that number of values 
    // sum up the values of the block 
    for (i = 0; i < blockSize; i++){
        //array variable subject to change based on Will's naming 
        //array[emotion column, place in section]
        //count will consistently increase as we progress down 
        nBlock = nBlock + array[posi, count];
        hBlock = hBlock + array[(posi+1),count]; 
        sBlock = sBlock + array[(posi+2),count]; 
        count++; //increment down through parsed data 

    }

// adds block in order of neutral, happy, sad etc
    for (i = 0; i < emoCount; i++){
        for (j = 1; j < blockSize; j++){
            for (k = count; k < count + 15; k++){
            eBlock = eBlock + array[j, k];
            }
        }
        cBlock[i,increment] = eBlock*0.66;
        eBlock = 0; // reset it for next round 
    }
    count = count + 15; // set count for next run 

    //0.66 is the time length of each increment, needed to get area 
    // cBlock will be an array with the corresponding block values 
    // cBlock will have size ( emotions by seconds )
    cBlock[0, increment] = nBlock*0.66;
    cBlock[1, increment] = hBlock*0.66; 
    cBlock[2,increment] = hBlock*0.66; 

    increment ++;

    //update global variable to indicate which block it is at 
    
}
