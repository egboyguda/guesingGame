let numMax = prompt("enter the max random number");
while(true){
    if(!parseInt(numMax)){
        alert("please enter a valid number");
        numMax = prompt("enter the max random number")
    }else{
        let numRand = Math.floor(Math.random()*(numMax-1)+1)
        let num = prompt("enter your guess");
        while(true){
            if(!parseInt(num)){
                alert("you enter a invalid number");
                num = prompt("please enter a guess")
            }else{
                if(num>numRand){
                    num = prompt(`the number you enter is higher ${numRand}`);
                }else if(num<numRand){
                    num = prompt(`the number you enter is lower ${numRand}`)
                }else{
                    alert("you gues the number")
                    let pick= prompt("you want to continue?y/n")
                    if(pick==="y"){
                        numRand = Math.floor(Math.random()*(numMax-1)+1);
                        num = prompt("please enter a guess")
                    }else{
                        alert("thalnk u for playing")
                        break;
                    }
                }
            }
        }
    }break;
}



