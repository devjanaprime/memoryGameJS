// are we listing for user input?
let listening = true;
let selections = {
    computer: [ 1,2,3,2,3,1],
    user: []
}

// game only ends when the user makes an incorrect guess
let endGame = () =>{
    console.log( 'gameOver. correct guesses:', selections.user.length );
    selections.computer = [];
    selections.user = [];
}

// used to select a block
let selectBlock = ( num ) =>{
    console.log( 'selecting block:', num );
    // deselect all 3 blocks
    for( let i=1; i<=3; i++){
        const block = 'block' + i;
        document.getElementById( block ).classList.remove( 'block-selected' );
        document.getElementById( block ).classList.remove( 'block-correct' );
        document.getElementById( block ).classList.remove( 'block-incorrect' );
    }
    const selected = 'block' + num;
    if( listening ){
        console.log( 'checking:', selections.computer[ selections.index ], selections.user[ selections.index ] );
        if( selections.computer[ selections.index ] === num ){
            selections.user.push( num );
            document.getElementById( selected ).classList.add( 'block-correct' );
            selections.index++;
        }
        else{
            document.getElementById( selected ).classList.add( 'block-incorrect' );
            endGame();
        }
    }
    else{
        document.getElementById( selected ).classList.add( 'block-selected' );
    }
} // end selectBlock

let startListening = () => {
    listening = true;
    selections.index = 0;
    selections.user = [];
}

let newSelection = () =>{
    listening = false;
} //end newSelections