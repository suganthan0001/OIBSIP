const value = document.getElementById("value");

let result = "0";

function ac(){
    result="0";
    over()
}

function over(){
    let resultstr =  result.toString().replace('/','÷').replace('*','×');
    if(resultstr.length > 10){
        resultstr= 'Syntax Error';
    }
    value.textContent=resultstr;    
}

function numbers(num){
    if((result==="0")||(result==='Syntax Error')){
        result=num;
    }
    else{
        result+=num
    }
    over()
}
function equal(){
    try{
        result = eval(result)
    }
    catch(Error){
        result = 'Syntax Error'
    }
    over()
}

function plusminus(){
    result = parseInt(result);
    result-=result+result;
    over()
}

function root(){
    result = Math.sqrt(result);
    result = result.toFixed(4);
    over();
}