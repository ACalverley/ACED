/*
    Global variables will be 
        bDiff, Parameteres (currently valence and energy), WIndowSize (how many blocks we want), 
        WinLoco is location of the window 

*/
function blockDifference(){

    for (i = 0; i < 2; i++){
        for (j = WinLoco; j < WindowSize; j++){
            //neuBlock = cBlock[]
            happBlock = happBlock + cBlock[(posi + 1), j]
            sadBlock = sadBlock + cBlock[(posi + 2),j]

        }
    }
    bDiff = happBlock - sadBlock;

    //means algo is not doing its job 
        if (bDiff < 0){
            //increase parameters to try to improve state 
            valence = valence + 0.10;
            energy = energy + 0.10;
        }
    WinLoco ++;
    // will be using cBlock;
    return bDiff;
}