
function criaCalculadora(){

  return {

    display:document.querySelector(".display"),

    inicia(){
      this.cliqueBotoes();
      this.pressionaEnter()
    },

    cliqueBotoes(){

      document.addEventListener("click",e=>{
        let el = e.target;
        if(el.classList.contains("btn-num"))
          this.display.value += el.innerText
        if(el.classList.contains("btn-clear"))
          this.display.value = ""
        if(el.classList.contains("btn-del"))
          this.display.value = this.display.value.slice(0,-1)
        if(el.classList.contains("btn-eq"))
          this.conta(this.display.value)
      })

    },

    pressionaEnter(){
      this.display.addEventListener("keyup", e=>{
        if(e.keyCode === 13)
          this.conta(this.display.value)
      })
    },

    conta(texto){

      if(!texto){
        alert("Conta inválida...")
        return
      }
      try{

        let resultado = eval(texto);
        this.display.value = resultado

      }catch(e){
        alert("Conta inválida...");
        return
      }
    },

  }
}


let calculadora = criaCalculadora();
calculadora.inicia()





























/*

function criaCalculadora() {
  return {
    display: document.querySelector('.display'),

    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      this.display.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if(!conta) {
          alert('Conta inválida');
          return;
        }

        this.display.value = String(conta);
      } catch(e) {
        alert('Conta inválida');
        return;
      }
    },

    clearDisplay() {
      this.display.value = '';
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },


    cliqueBotoes() {
      document.addEventListener('click', e => {
        const el = e.target;

        if(el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')) {
          this.apagaUm();
        }

        if(el.classList.contains('btn-eq')) {
          this.realizaConta();
        }
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    }

  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
*/