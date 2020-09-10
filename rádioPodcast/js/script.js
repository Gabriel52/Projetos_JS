//-----------------INICIALIZADOR---------------
window.addEventListener('load', start);

function start(){
    rangeFrequency.addEventListener('input', handleRangeValue);
}

//-----------------GLOBAL---------------
let inputCurrentFrequency = document.getElementById('inputCurrentFrequency');
let rangeFrequency = document.getElementById('rangeFrequency');
let divPodcasts = document.getElementById('divPodcasts');

function handleRangeValue(){
    
    inputCurrentFrequency.value = rangeFrequency.value
    findPodcast(rangeFrequency.value)
}
function findPodcast(frequency){
    let foundPodCast = null;
    for(let i =0; i < podcastsData.length; i++){
        let currentPodcast  = podcastsData[i];
        
        if(frequency === currentPodcast.id){
            foundPodCast = currentPodcast;
        }
    }
    if(!!foundPodCast){
        renderItems(foundPodCast);
    }else{
        divPodcasts.innerHTML = '';
        divPodcasts.innerHTML = '<p>Nenhum Podcast localizado nesta frequencia</p>'
    }
    
}
function renderItems(podcast){
    divPodcasts.innerHTML = '';
    
    let connect = document.createElement('h4')
    connect.textContent =  'Quer ter acesso ao site oficial do podcast ?'     

    let link = document.createElement('a');
    link.href = podcast.link;
    link.textContent = 'Clique aqui'

    let img = document.createElement('img');
    img.src ='assets/'+ podcast.img;
    img.alt = 'Logo do Podcast: ' + podcast.title;
    img.title = podcast.title;


    let h2 = document.createElement('h2');
    h2.textContent = podcast.title;

    let p = document.createElement('p');
    p.textContent = podcast.description;

    divPodcasts.append(connect);
    divPodcasts.append(link);
    divPodcasts.append(h2);
    divPodcasts.append(img);
    divPodcasts.append(p);
    
    
}
