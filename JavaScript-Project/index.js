/* 1-> Ways to print in javascript:
alert("hello sidhu");
console.log("Hello World",2+6,"this is another tag");
document.write('document.write use to prinnt on document');

 2-> Javascript console API:
console.warn('this is warning');
console.error("this is an error");
console.assert(4==(2+2));

3-> Javascript Variables :
containers to sotre data values
var number1=32;
var number2=36;
console.log(number1+number2);
*/
//4-> Data types in Javascript :

//Numbers: 
// var num=11;
// var num2=112.22;

//Strings :
// var str="this is string ";
// var str2='this is also a string :'

//Objects :
// var marks= 
// {
//    ravi: 39,
//    rahul : 49,
//    harry :99.9
// }

//Bool :
// var a=true;
// var b=false;
// console.log(a,b);

// var und = undefined;
// console.log(und);

// var n=null;
// console.log(n);

/*TWO types of data types are there in javaScript
1-> Primtive: Undefined,Null,Bool,Number,String,Symbol;

2-> Refrence data tipes:Arrays And Objects;
*/

//Arrays In JavaScript :
// var arr = [1,2,'string ',4,5];
// console.log(arr);

// Operators :
//Arithmatic Operators:
// var a=5;
// var b=6;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);

//Assignment Operator;

/*var c=b;
c+=2;
c-=2;
c/=2;
c*=2;
console.log(c);
*/

/*var x=36 ;
var y=23;
console.log(x==y);
console.log(x>y);
console.log(x<y);
console.log(x<=y);
*/

// Logical operator
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(false && false);

// console.log(true  || true);
// console.log(true  || false);
// console.log(false ||  false);
// console.log(false ||  false);

// Logical Not;

// console.log(!true);
// console.log(!false);

// Functions :
// function avg(a,b)
// {
//    c=(a+b)/2;
//    return c;
// }

// c1=avg(4,6);
// console.log(c1);

// Conditionals operators:
/*var x=19;
if(x>8)
{
   console.log('you are not a child');
}
else if(x>18)
{
   console.log('you are teen');
}
else
{
   console.log('you are teen');
}
*/

// Loops In JavaScript :------------------------------------------------------------------------------------------->
// var arr = [1, 2, 3, 4, 5, 6, 7, 8]
// for(var i=0;i<arr.length;i++)
// {
//    console.log(arr[i]);
// }

// arr.forEach(function(element)
//    {
//       console.log(element);
//    })

// While loop we will use let keyword because let key word has a limited scope and can not be changed by outside of its scope:

// let a=1;
// while(a<=10)
// {
//    console.log(a);
//    a++;
// }

//If any variable is decleared as const. Then its value can not be changed:
// const j=10;
// j++;
// console.log(j);

// var arr = [1, 2, 3, 4, 5, 6, 7, 8]
// let j=0;
// while(j<arr.length)
// {
//    console.log(arr[j]);
//    j++;
// }

// let k=0;
// do{
//    console.log(arr[k]);
//    k++;
// }while(k<arr.length);

// BreAK and Continue--------------------------------------------------------------------------------------->

// for(let i=0;i<arr.length;i++)
// {

//    if(i==3)
//    {
//       continue;
//    }
//    else if(i==6)
//    {
//       break;
//    }
//    console.log(arr[i]);
// }

// Array Methods :-------------------------------------------------------------------------------------------->

// let myarr = ["fan", "camera", 34, null];
// console.log(myarr.length);
// myarr.pop();
// myarr.push("sidhu");
// console.log(myarr);
// myarr.shift();
// console.log(myarr);
// const x = myarr.unshift();
// console.log(x);
// myarr.toString();
// myarr.sort();

// String Method:---------------------------------------------------------------------------------------------->

// let str="sidhu is a good good boy";
// console.log(str.length);
// console.log(str.indexOf("good"));
// console.log(str.lastIndexOf("good"));
// console.log(str.slice(1,3));
// d=str.replace("sidhu","harry");
// console.log(d.replace("good","bad"));

// Date methods:
// let mydate= new Date();
// console.log(mydate);
// console.log(mydate.getFullYear());
// console.log(mydate.getMonth());

// DOM MANIPULATION :-------------------------------------------------------------------------------------------->

//id will be unique and class may same for many div:

let elem=document.getElementById('click').style.background='blue';
console.log(elem);
// let elm=document.getElementById('div').style.background='yellow';
// elm=document.getElementById('div').style.border='5px solid red';
// console.log(elm);

// let elmclass=document.getElementsByClassName("container")
// elmclass[0].style.background='green';
// elmclass[0].style.border='10px solid red';
// //elmclass[1].style.background='yellow';
// elmclass[1].style.border='10px solid green';

// elmclass[1].classList.add("bg-primary");
// elmclass[0].classList.add("text-success");
// elmclass[0].classList.remove("text-success");
// console.log(elmclass[1]);

// console.log(elmclass[0].innerHTML);
// console.log(elmclass[0].innerText);

// selecting using selector:-> we can change the degine of document by using innerHTMl or innerText:
// sel=document.querySelectorAll('.container')
// sel=document.querySelector('.container')
// console.log(sel);

// Events in javascript:-------------------------------------------------------------------------------------------->
// function clicked()
// {
//    console.log("Button clicked");
// }
// window.onload=function() 
// {
//     console.log("Document was load:");
// }

// firstcontainer.addEventListener('click',function()
// {
//    console.log("click hua: ");
// })
// firstcontainer.addEventListener('mouseover',function()
// {
//    console.log("click ho gya: ");
// })
// firstcontainer.addEventListener('mouseout',function()
// {
//    console.log("mouse out container: ");
// })

// firstcontainer.addEventListener('mouseup',function()
// {
//    console.log("mouse up: ");
// })
// firstcontainer.addEventListener('mousedown',function()
// {
//    console.log("mouse down: ");
// })

// firstcontainer.addEventListener('click',function()
// {
//    document.getElementsByClassName('container')[0].style.background='yellow';
//    document.querySelectorAll('.container')[0].innerHTML="<b>We have Clicked </b>";
//    //document.querySelectorAll('.container')[0].innerText=" We have Clicked ";
//    console.log("click hua: ");
// })

// var prevhtml=document.getElementsByClassName('container')[0].innerHTML;
// firstcontainer.addEventListener('mouseup',function()
// {
//    document.getElementsByClassName('container')[0].style.background='yellow';
//    document.querySelectorAll('.container')[0].innerHTML=prevhtml;
//    //document.querySelectorAll('.container')[0].innerText=" We have Clicked ";
//    console.log("click hua: ");
// })
// firstcontainer.addEventListener('mousedown',function()
// {
//    document.getElementsByClassName('container')[0].style.background='green';
//    document.querySelectorAll('.container')[0].innerHTML="<b>We have Clicked </b>";
//    //document.querySelectorAll('.container')[0].innerText=" We have Clicked ";
//    console.log("click hua: ");
// })


//Arraow Function-------------------------------------------------------------------------------------------->
// function sum(a,b)
// {
//    return a+b;
// }
// sum=(a,b)=>
// {
//    return a+b;
// }

// setTimeout && setInterval---------------------------------------------------------------------------------->
// setTimeout(() => {
//    console.log("going to looged in:")
// },2000);

// logkaro=()=>{
//    document.querySelectorAll('.container')[0].innerHTML="<b>Set Interval Fired </b>";
//    console.log('going to log in');
// }
// // setTimeout(logkaro,2000);
// clr= setInterval(logkaro, 2000);
// clearInterval(clr);


// javaScript --------JSON (javascript object notation)------------------------------->

// Backtick literals in ES6:
a=34;
console.log(`This no is :->${a}`);