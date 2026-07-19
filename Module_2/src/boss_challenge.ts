function welcome(): void{
    console.log("Welcome to TS");
    
}

function crashGame(): never {
    throw new Error("Game Over")
}

welcome()

crashGame()