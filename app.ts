 const num1Element = document.getElementById('num1') as HTMLInputElement;
 const num2Element = document.getElementById('num2') as HTMLInputElement;
 const buttonElement  = document.querySelector('button')!;

const numResult: Array<number> = [];
const textResult: string[] = [];

type NumOrString = number | string ;
type result = {val:number; timestamp:Date}

interface resultobj{
    val: number;
    timestamp:Date;
}

 function add(num1:number | string, num2:number |string){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2;
    }else if(typeof num1 === 'string' && typeof num2 === 'string'){
        return num1 + ''+ num2;
    }
    return +num1 + +num2;
 }

function printResult(resultobj:result){
    console.log(resultobj.val)
}


buttonElement.addEventListener('click',()=>{
    const num1 = num1Element.value;
    const num2 = num2Element.value;
const result = add(+num1,+num2);
numResult.push(result as  number)
const str = add(num1,num2)
textResult.push(str as string)
printResult({val: result as  number, timestamp:  new Date() });

   console.log(numResult,textResult);
})

const myPromise = new Promise<string>((resolve,reject)=>{
setTimeout(()=>{
resolve('it worked!')
},1000)
})

myPromise.then((result)=>{
    console.log(result.split('w'))
})