// are we listing for user input?
let listening = true;
let selections = {
    index: 0,
    computer: [ 1, 2, 3 ],
    user: []
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
        selections.user[selections.index] = num;
        console.log( 'checking:', selections.computer[ selections.index ], selections.user[ selections.index ] );
        if( selections.computer[ selections.index ] === selections.user[ selections.index ] ){
            document.getElementById( selected ).classList.add( 'block-correct' );
        }
        else{
            document.getElementById( selected ).classList.add( 'block-incorrect' );
        }
        selections.index++;
    }
    else{
        document.getElementById( selected ).classList.add( 'block-selected' );
    }
}