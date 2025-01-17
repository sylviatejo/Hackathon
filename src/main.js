
//navegacion entre secciones/botones
document.getElementById("imagen-logo").addEventListener("click", () => {
    document.getElementById("home-container").style.display = "block";
    document.getElementById("reviews-container").style.display = "none";
    document.getElementById("rooms-container").style.display = "none";
    document.getElementById("results-container").style.display = "none";
    document.getElementById("root").innerHTML = "";
});
document.getElementById("buttonReviews").addEventListener("click", () => {
    document.getElementById("home-container").style.display = "none";
    document.getElementById("reviews-container").style.display = "block";
    document.getElementById("rooms-container").style.display = "none";
    document.getElementById("results-container").style.display = "none";
    document.getElementById("root").innerHTML = "";
});
document.getElementById("buttonPlay").addEventListener("click", () => {
    document.getElementById("home-container").style.display = "none";
    document.getElementById("reviews-container").style.display = "none";
    document.getElementById("rooms-container").style.display = "block";
    document.getElementById("results-container").style.display = "none";
    document.getElementById("root").innerHTML = "";
});
document.getElementById("buttonRoom1").addEventListener("click", () => {
    document.getElementById("home-container").style.display = "none";
    document.getElementById("reviews-container").style.display = "none";
    document.getElementById("rooms-container").style.display = "none";
    document.getElementById("results-container").style.display = "block";
    document.getElementById("root").innerHTML = "";
});
document.getElementById("buttonRoom2").addEventListener("click", () => {
    document.getElementById("home-container").style.display = "none";
    document.getElementById("reviews-container").style.display = "none";
    document.getElementById("rooms-container").style.display = "none";
    document.getElementById("results-container").style.display = "block";
    document.getElementById("root").innerHTML = "";
});
document.getElementById("buttonRoom3").addEventListener("click", () => {
    document.getElementById("home-container").style.display = "none";
    document.getElementById("reviews-container").style.display = "none";
    document.getElementById("rooms-container").style.display = "none";
    document.getElementById("results-container").style.display = "block";
    document.getElementById("root").innerHTML = "";
});
let searchEl = document.getElementById('searchResult');
let tqllr = document.getElementById('movie-container');

document.getElementById('searchData').addEventListener('click', function() {
    tqllr.innerHTML = " ";
    const titleSearch = document.getElementById('searchBar').value;
    const request = new Request('http://www.omdbapi.com/?i=tt3896198&apikey=f37c3cde&s=' + titleSearch);
    
    fetch(request).then(function(result) {
        return result.json();
    }).then(function(data) {
        console.log(data);
        var len = data.Search.length;
        for (var i = 0; i < len; i++) {
            var movieContainer = document.createElement('div');
            movieContainer.className = 'search-result--item';
            var titleEl = document.createElement('div');
            titleEl.innerText = data.Search[i].Title;
            var yearEl = document.createElement('div');
            yearEl.innerText = data.Search[i].Year;
            var typeEl = document.createElement('div');
            typeEl.innerText = data.Search[i].Type;
            var posterEl = document.createElement('img');
            posterEl.src = data.Search[i].Poster;
            movieContainer.appendChild(posterEl);
            movieContainer.appendChild(titleEl);
            movieContainer.appendChild(yearEl);
            movieContainer.appendChild(typeEl);
            searchEl.appendChild(movieContainer);
        }
    });
});
//---------------- Descubrir-----------------------------------------------------------------------
document.getElementById("buttonReviews").addEventListener("click", () => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=71949b65aff64acdb6a0fce55fb7fb1d&sort_by=popularity.desc&page=1&primary_release_date.gte=2019-01-01')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                //let searchEl = document.getElementById("root");
                const listmovie2 = data.results.map(element => {
                    return `<div class="results">
                                <div class="movie-card">
                                    <img class="movie-img" src= "${'https://image.tmdb.org/t/p/w500'+element.poster_path}"> 
                                    <div class="movie-text"> 
                                        <p class="movie-tittle"> ${element.title}</p>
                                        <p class="movie-year">Year: ${element.release_date}</p>
                                        <p class="movie-review"> Reseña: ${element.overview}</p>
                                    </div>
                                </div>
                            </div>`
                }).join('');
                tqllr.innerHTML = listmovie2;
            })
    })
    //------------------------   /SALA 1/  ------------------------------------------------------------
    // Primera pelicula
document.getElementById("buttonRoom1").addEventListener("click", () => {
        fetch('http://www.omdbapi.com/?i=tt0120903&apikey=f37c3cde&s=')
            .then(res => res.json())
            .then(data => {
                let contMovie1 = document.createElement("div");
                contMovie1.className = "question";
                searchEl.appendChild(contMovie1);
                contMovie1.innerHTML += `<img src='https://m.media-amazon.com/images/M/MV5BZmIyMDk5NGYtYjQ5NS00ZWQxLTg2YzQtZDk1ZmM4ZDBlN2E3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'>
                                    <h1>¿Quién es el director de la película X-Men?</h1>`
                let imputQuestion1 = document.createElement("button");
                imputQuestion1.className = "butQ";
                imputQuestion1.textContent = "Opcion A: fkjhsdfgfkjdjsdvkdvkjnds";
                searchEl.appendChild(imputQuestion1);
                let imputQuestion2 = document.createElement("button");
                imputQuestion2.className = "butQ";
                imputQuestion2.textContent = "Opcion B: fkjhsdfgfkjdjsdvkdvkjnds";
                searchEl.appendChild(imputQuestion2);
                let imputQuestion3 = document.createElement("button");
                imputQuestion3.className = "butQ";
                imputQuestion3.textContent = "Opcion C: fkjhsdfgfkjdjsdvkdvkjnds";
                searchEl.appendChild(imputQuestion3);
                console.log(data);
            }); //Cierre then data peli1 
    }) //Cierre sala 1
// Segunda pelicula
document.getElementById("buttonRoom1").addEventListener("click", () => {
        fetch('http://www.omdbapi.com/?i=tt0076759&apikey=f37c3cde&s=')
            .then(res => res.json())
            .then(data => {
                let contMovie = document.createElement("div");
                contMovie.className = "question";
                searchEl.appendChild(contMovie);
                contMovie.innerHTML += `<img src='https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'>
                                <h1>Quien es el director de la pelicula?</h1>`
                let imputQuestion1 = document.createElement("button");
                imputQuestion1.className = "butQ";
                imputQuestion1.textContent = "Opcion A: fkjhsdfgfkjdjsdvkdvkjnds";
                searchEl.appendChild(imputQuestion1);
                let imputQuestion2 = document.createElement("button");
                imputQuestion2.className = "butQ";
                imputQuestion2.textContent = "Opcion B: fkjhsdfgfkjdjsdvkdvkjnds";
                searchEl.appendChild(imputQuestion2);
                let imputQuestion3 = document.createElement("button");
                imputQuestion3.className = "butQ";
                imputQuestion3.textContent = "Opcion C: fkjhsdfgfkjdjsdvkdvkjnds";
                searchEl.appendChild(imputQuestion3);
                console.log(data);
            }); //Cierre then data peli1 
    }) //Cierre sala 1
