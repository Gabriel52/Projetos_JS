function criarCalculadora() {    
    return{
        display:document.querySelector('.display'),

        // Metodos
        inicia: function(){
            this.clickButton()
            this.pressEnter()
        },

        pressEnter(){
            this.display.addEventListener("keyup", e =>{
                console.log(e.keyCode)
                if(e.keyCode === 13){
                    this.realizaConta()
                }
            })
        },

        clearDisplay(){
            this.display.value = ""
        },

        deleteOne(){
            this.display.value = this.display.value.slice(0, -1)
        },

        realizaConta(){
            let conta = this.display.value

            try{
                conta = eval(conta)
                if(!conta){
                    alert("conta invalida")
                    return
                }
                this.display.value = String(conta);
            }catch(error){
                console.log(error)
                return
            }
        },
        clickButton(){
            document.addEventListener("click", function(e){
                const element = e.target

                // Verificar se o que está sendo clicado é um botão
                if(element.classList.contains("btn-num")){
                    this.btnToDisplay(element.innerText) //pegando o valor do botão
                    
                }
                
                if(element.classList.contains("btn-clear")){
                    this.clearDisplay() //pegando o valor do botão
                    
                }
                if(element.classList.contains("btn-del")){
                    this.deleteOne() //pegando o valor do botão
                    
                }
                if(element.classList.contains("btn-eq")){
                    this.realizaConta() //chamando a função
                    
                }
                
                
            }.bind(this));//Dizer que o this é da calculadora
        },

        btnToDisplay(value){
            this.display.value += value
        }
    }
}

const calculadora = criarCalculadora();
calculadora.inicia();