// Crea l'objecte Clock, amb les següents propietats:
function Clock(hora,minutos,segundos, sentit , estat) {
    this.hora = hora;
    this.minutos = minutos;
    this.segundos = segundos;
    this.sentit = sentit
    this.estat = estat;

    // Funcio arrenca
    this.arrenca = function() { 
       if (estat==false) estat=true;
       this.ref = setTimeout(() => {
        if(this.sentit){
            this.segundos++;
            if (this.segundos == 60) {
            this.segundos = 0;
            this.minutos += 1;
            if (this.minutos == 60) {
                this.minutos = 0;
                this.hora += 1;
            }
            }
        }
       }, 1000);
    };

    this.iniciar = function(){
        return this.arrenca();
    }

    // Funcio atura
    this.atura = function() {
       if (this.estat==true) this.estat=false;
       clearInterval(this.ref);
    };

    // retorna la funcio per para el rellotge
    this.parar = function(){
        return this.atura();
    }

    // Funcion per posar el Rellotge a 0
    this.reset = function() {
        this.atura();
        this.segundos = 0;
        this.minutos = 0;
        this.hora = 0;
    }

    // Retorna la funcio reset
    this.resetear = function(){
        return this.reset();
    }

    // Mostra l'estructura
    this.formata = function() {
        let cad_segon = this.segundos.toString();
        let cad_minut = this.minutos.toString();
        let cad_hora = this.hora.toString();   
        return cad_hora + ':' + cad_minut + ':' + cad_segon;
    }
    // Retorna format del Rellotge
    this.format = function(){
        return this.formata();
    }
 }
 
let hor = new Clock(hora=new Date().getHours(),minutos=new Date().getMinutes(), segundos=new Date().getSeconds(), true, true);
let hor2 = new Clock(0,0,0, true, true);
let hor3 = new Clock(0,5,0, false, true);
let cronometro = 0;

function imprimirResultado(){
    let clock = document.querySelector(".reloj");
    let parar = document.querySelector(".parar");
    let start = document.querySelector(".start");
    clock.innerHTML = hor.format();
    if(cronometro > 10){
        hor2.iniciar();
        start.innerHTML = hor2.format();
    }
    parar.innerHTML = hor3.format();
    if(hor2.minutos % 2 == 0){
        hor3.atura();
    }else{
        hor3.arrenca();
    }
    cronometro++;
    hor.iniciar();
    inicio();
}

function inicio(){
    t = setTimeout(imprimirResultado,1000);
}
inicio();

console.log(hor);