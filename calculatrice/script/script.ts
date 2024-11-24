function nb0() : void{
    var nb0= document.getElementById("0")?.innerHTML;
       const Mms:any= document.getElementById("result");
        const result: any|number= nb0;
        Mms.innerHTML+=result;

}

function nb1() : void{
    var nb1= document.getElementById("1")?.innerHTML;
       const Mms:any= document.getElementById("result");
        const result: any|number= nb1;
        Mms.innerHTML+=result;

}

function nb2() : void{
    var nb2= document.getElementById("2")?.innerHTML;
       const Mms:any= document.getElementById("result");
        const result: any|number= nb2;
        Mms.innerHTML+=result;

}

function nb3() : void{
    var nb3= document.getElementById("3")?.innerHTML;
       const Mms:any= document.getElementById("result");
        const result: any|number= nb3;
        Mms.innerHTML+=result;

}

function nb4() : void{
    var nb4= document.getElementById("4")?.innerHTML;
       const Mms:any= document.getElementById("result");
        const result: any|number= nb4;
        Mms.innerHTML+=result;

}

function nb5() : void{
    var nb5= document.getElementById("5")?.innerHTML;
       const Mms:any= document.getElementById("result");
        const result: any|number= nb5;
        Mms.innerHTML+=result;

}

function nb6() : void{
    var nb6= document.getElementById("6")?.innerHTML;
       const Mms:any= document.getElementById("result");
        const result: any|number= nb6;
        Mms.innerHTML+=result;

}

function nb7() : void{
    var nb7= document.getElementById("7")?.innerHTML;
       const Mms:any= document.getElementById("result");
        const result: any|number= nb7;
        Mms.innerHTML+=result;

}

function nb8() : void{
    var nb8= document.getElementById("8")?.innerHTML;
       const Mms:any= document.getElementById("result");
        const result: any|number= nb8;
        Mms.innerHTML+=result;

}

function nb9() : void{
    var nb9= document.getElementById("9")?.innerHTML;
       const Mms:any= document.getElementById("result");
        const result: any|number= nb9;
        Mms.innerHTML+=result;

}

function add() : void{
    var add= document.getElementById("+")?.innerHTML;
       const Mms:any= document.getElementById("result");
        const result: any|string= add;
        Mms.innerHTML+=result;

}

function soustraction() : void{
    var soustraction= document.getElementById("-")?.innerHTML;
       const Mms:any= document.getElementById("result");
        const result: any|string= soustraction;
        Mms.innerHTML+=result;

}

function multiplication() : void{
    var multiplication= document.getElementById("*")?.innerHTML;
       const Mms:any= document.getElementById("result");
        const result: any|string= multiplication;
        Mms.innerHTML+=result;

}

function div() : void{
    var div= document.getElementById("/")?.innerHTML;
       const Mms:any= document.getElementById("result");
        const result: any|string= div;
        Mms.innerHTML+=result;

}

function mod() : void{
    var mod= document.getElementById("%")?.innerHTML;
       const Mms:any= document.getElementById("result");
        const result: any|string= mod;
        Mms.innerHTML+=result;

}

function del() : void{
       var ecrant:any= document.getElementById("result")?.innerHTML;
        var result: any= ecrant.slice(0,-1);
        var Mms:any= document.getElementById("result");
        Mms.innerHTML=result;
       
       
}

function clr() : void{
        var ecrant:any= ' ';
         var Mms: any= document.getElementById("result");
         var result : any= ecrant;
         Mms.innerHTML=result;
        
 }

 function egual() : void{
        var ecrant:any= document.getElementById("result")?.innerHTML;
        var result:any= eval(ecrant);
        var Mms:any=document.getElementById("result");
        if (result=="Infinity" || result=="-Infinity") {
                Mms.innerHTML='ERROR';
        }else{
                Mms.innerHTML=result;
        }
        
        
 }