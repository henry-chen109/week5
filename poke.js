$( function() {
    function callPokeApi(pokeID) {
        let pokeData;
        $.ajax({
            'url': `https://pokeapi.co/api/v2/pokemon/${pokeID}`,
            'type': 'get',
            'dataType': 'json',
            'async': false,
        }).done(function(data){
            pokeData = data;
        }).fail(function() {
            alert("No such pokemon!");
        })

        return pokeData;
    }

    function getRandomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let pokeImgClass = document.querySelector('.container').querySelectorAll('.poke-img');

    for(let i=0; i < 5; i++) {
        let randomPokeID = getRandomNum(1, 898);
        let pokeData = callPokeApi(randomPokeID);
        pokeImgClass[i].src = pokeData['sprites'].front_default;
    }

})

