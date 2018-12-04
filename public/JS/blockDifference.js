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

        for (j = WinLoco; j < WindowSize; j++){
            //neuBlock = cBlock[]
            happBlock = happBlock + cBlock[(posi + 1), j]
            sadBlock = sadBlock + cBlock[(posi + 2),j]
        }
    
    var bDiff = happBlock - sadBlock;

    //means algo is not doing its job 
        if (bDiff < 0){
            //increase parameters to try to improve state 
            bDiffSum ++;
            bDifferenceSum();
        }
        else{
            //positive trend
            bDiffSum --;
        }
        bDiff = 0;
    WinLoco ++;
}


function bDifferenceSum() {
    if (bDiffSum < bThresh) {
        //alter parameters here in the case of consistent decrease
        valence = valance + 0.1; 
    }
}
/*
    if bDiffSum is greater than a certain threshold, perform action
    action will be to switch songs right now 

*/