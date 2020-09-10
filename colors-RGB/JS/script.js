//############# INICIALIZADOR ###############
window.addEventListener('load', start);

function start(){
    sendInputRangeRed.addEventListener('input', handleRangeData);
    sendInputRangeGreen.addEventListener('input', handleRangeData);
    sendInputRangeBlue.addEventListener('input', handleRangeData);
    

}
//####### VARIAVEIS GLOBAIS ##################
 let sendInputRangeRed = document.getElementById('inputRangeRed');
 let sendInputRangeGreen = document.getElementById('inputRangeGreen');
 let sendInputRangeBlue = document.getElementById('inputRangeBlue');
 let sendLabelRed = document.getElementById('inputLabelRed');
 let sendLabelGreen = document.getElementById('inputLabelGreen');
 let sendLabelBlue = document.getElementById('inputLabelBlue');
 let box = document.querySelector('.box')
 

//#######JOGAR OS VALORES NA LABEL ###########
function handleRangeData(){
    sendLabelRed.value = sendInputRangeRed.value;
    sendLabelGreen.value = sendInputRangeGreen.value;
    sendLabelBlue.value = sendInputRangeBlue.value;
    getData();
}
//######### COLOCAR OS VALORES NA DIV ########
function getData(){
    box.style.background = 'rgb('+sendInputRangeRed.value+','+sendInputRangeGreen.value+','+sendInputRangeBlue.value+')';
}
