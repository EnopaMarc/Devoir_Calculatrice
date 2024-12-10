var bouton: any = document.getElementById('bouton');
        var section: any  = document.getElementById('section');
        var estAffiche: any  = false;
        bouton.addEventListener('click', function () {
        if (!estAffiche) {
                section.style.display = 'block';
                bouton.innerHTML="Nr"
                estAffiche = true;
        }
        else {
                section.style.display = 'none';
                estAffiche = false;
        }
        });

        function afficherHeure() {
                const maintenant:any = new Date();
                const heures:any = maintenant.getHours().toString().padStart(2, '0');
                const minutes:any = maintenant.getMinutes().toString().padStart(2, '0');
                const secondes:any = maintenant.getSeconds().toString().padStart(2, '0');
                const heureActuelle = `${heures}:${minutes}:${secondes}`;
                document.getElementById('heure').innerText = ` ${heureActuelle}`;
            }
            
            // Mettre à jour l'heure toutes les secondes
            setInterval(afficherHeure, 1000);
            

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

function sin() : void {
        var ecrant:any= document.getElementById("result")?.innerHTML;
        var result:any= Math.sin(eval(ecrant));
        if (!result) {
                alert("Veillez saisir un chifre avant d'appliquer le sinus");
        } else {
                var Mms:any=document.getElementById("result");
                Mms.innerHTML=result;
        }
        
       
} 
 
function cos() : void {
        var ecrant:any= document.getElementById("result")?.innerHTML;
        var result:any= Math.cos(eval(ecrant));
        if (!result) {
                alert("Veillez saisir un chifre avant d'appliquer le cosinus");
        } else {
                var Mms:any=document.getElementById("result");
                Mms.innerHTML=result;
        }
}

function tan() : void {
        var ecrant:any= document.getElementById("result")?.innerHTML;
        var result:any= Math.tan(eval(ecrant));
        if (!result) {
                alert("Veillez saisir un chifre avant d'appliquer la tangente");
        } else {
                var Mms:any=document.getElementById("result");
                Mms.innerHTML=result;
        }
} 

function ln() : void {
        var ecrant:any= document.getElementById("result")?.innerHTML;
        var result:any= Math.log(eval(ecrant));
        if (!result) {
                alert("Veillez saisir un chifre avant d'appliquer le logarithme");
        } else {
                var Mms:any=document.getElementById("result");
                Mms.innerHTML=result;
        }
} 

function puissance() :void { 
        var ecrant:any=document.getElementById("resultat")?.innerHTML;
        var result:any="**";
        var Mms:any=document.getElementById("result");
        Mms.innerHTML+=result;

}

function exp() :void { 
        var ecrant:any= document.getElementById("result")?.innerHTML;
        var result:any= Math.exp(eval(ecrant));
        if (!result) {
                alert("Veillez saisir un chifre avant d'appliquer l'exponentiel");
        } else {
                var Mms:any=document.getElementById("result");
                Mms.innerHTML=result;
        }

}

function racine() :void { 
        var ecrant:any= document.getElementById("result")?.innerHTML;
        var result:any= Math.sqrt(eval(ecrant));
        if (!result) {
                alert("Veillez saisir un chifre avant d'appliquer racine");
        } else {
                var Mms:any=document.getElementById("result");
                Mms.innerHTML=result;
        }

}

function factorielle(): void {
        var ecrant:any= document.getElementById("result")?.innerHTML;
        var Mms:any= document.getElementById("result");
        var result:any=1;
        if (!ecrant) {
                alert("Veillez saisir un chifre avant d'appliquer le factorielle");
        } else {
                if (ecrant == 0 || ecrant== 1) {
                        result=1;
                        Mms.innerHTML=result;
                } else {
                        for (let i = 1; i <= ecrant; i++) { 
                                result *= i; 
                        }
                        Mms.innerHTML=result;  
                }
                
                
               
        }
       
    }

function baseb() :any { 
        var ecrant:any=Number(document.getElementById("result")?.innerHTML);
        if (!ecrant) {
                alert("Veillez saisir un chifre avant d'appliquer la conversion en binaire");
        } else {
                var result:any= ecrant.toString(2);
                var Mms:any=document.getElementById("result");
                Mms.innerHTML=result;
        }
        
}
 
function based() :any { 
        var ecrant:any=document.getElementById("result")?.innerHTML;
        if (!ecrant) {
                alert("Veillez saisir un chifre avant d'appliquer la conversion en décimal");
        } else {
                if (ecrant) {
                        var result:any= parseInt(ecrant,16);
                        var Mms:any=document.getElementById("result");
                        Mms.innerHTML=result;
                } else {
                        var result:any= parseInt(ecrant,2);
                        var Mms:any=document.getElementById("result");
                        Mms.innerHTML=result;
                }
                
        }
}

function baseh() :void { 
        var ecrant:any=Number(document.getElementById("result")?.innerHTML);
        if (!ecrant) {
                alert("Veillez saisir un chifre avant d'appliquer la conversion en hexadecimal");
        } else {
                var result:any= ecrant.toString(16).toUpperCase();
                var Mms:any=document.getElementById("result");
                Mms.innerHTML=result;
        }
}