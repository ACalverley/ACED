/*
    Global variables will be 
        bDiffSum, Parameteres (currently valence and energy), WIndowSize (how many blocks we want), 
        WinLoco is location of the window, WindowSize is how big the window is 
        and as we increment, we move by one block each time 

*/

// called each second, every 15 lines. 
function blockDifference(){
   var happBlock = 0;
   var sadBlock = 0;

    for (i = 0; i < 2; i++){
        for (j = WinLoco; j < WindowSize; j++){
            //neuBlock = cBlock[]
            happBlock = happBlock + cBlock[(posi + 1), j]
            sadBlock = sadBlock + cBlock[(posi + 2),j]

        }
    }
    var bDiff = happBlock - sadBlock;

    //means algo is not doing its job 
        if (bDiff < 0){
            //increase parameters to try to improve state 
            bDiffSum ++;
        }
        bDiff = 0;
    WinLoco ++;
    // will be using cBlock;
    return bDiffSum;
}

/*
    if bDiffSum is greater than a certain threshold, perform action
*/