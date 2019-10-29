// are we listing for user input?
let listening = true;
let selections = {
    computer: [],
    user: []
}

let deselectAll = () => {
    // deselect all 3 blocks
    for( let i=1; i<=3; i++){
        const block = 'block' + i;
        document.getElementById( block ).classList.remove( 'block-selected' );
        document.getElementById( block ).classList.remove( 'block-correct' );
        document.getElementById( block ).classList.remove( 'block-incorrect' );
    }
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
    deselectAll();
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

let showSelections = () => {
    listening = false;
    if( selections.index < selections.computer.length ){
        setTimeout( deselectAll, 1500);
        setTimeout( showSelections, 2000);
        selectBlock( selections.computer[ selections.index ] );
        selections.index++;
    } //end repeat
    else{
        deselectAll();
        startListening();
    }
}

let newSelection = () =>{
    listening = false;
    selections.computer.push( Math.floor(Math.random() * (3)) + 1);
} //end newSelections