//responseType ce uvek biti json i method je uvek post, jedino sto mora da se prosledi je url!
 async function callFetch( {url= '', data = {}, func = (result) => {}} ){
    //responseType ce uvek biti json i method je uvek post, jedino sto mora da se prosledi je url!   
    let options = {
        method : 'POST',
        header : {'Content-Type': 'application/json;charset=utf-8'},
        body   : JSON.stringify(data)
    }
    let response = await fetch(url, options)
    let result = await response.json()
    func(result)        
}

function showCon(conId, func = () => {}){
    if(document.querySelector("#right_part p").style.display != 'none'){
        $("#right_part p").fadeOut(()=>{
            $('#'+conId).fadeIn(()=>{
                func()
            })
            .css('display','grid')
            .addClass('activeCon')
        })
    }else{
        $('.activeCon').fadeOut(()=>{
            $('.activeCon').removeClass('activeCon')
            $('#'+conId).fadeIn(()=>{
                func()
            })
            .css('display','grid')
            .addClass('activeCon')
        })
    }
}
