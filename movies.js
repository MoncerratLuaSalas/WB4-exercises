const favoriteMovies = [
    {
        movieTitle: "Grease",
        reason: "the soundtrack is fire",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/e2/Grease_ver2.jpg"
    },
    {
        movieTitle: "The Conjuring",
        reason: "it is best modern day horror film that actually spooks you",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_.jpg"
    },
    {
        movieTitle: "Cars",
        reason: "it is one of the first movies I ever remember watching and Radiator Springs is my favorite place on earth",
        imageUrl: "https://lumiere-a.akamaihd.net/v1/images/p_cars_19643_4405006d.jpeg"
    }
    ];

    function selectMovie(_movie) {
        const randomIndex = Math.floor(Math.random()*favoriteMovies.length);

        return _movie[randomIndex];
    }

    const randomMovie = selectMovie(favoriteMovies);
    console.log(`My favorite movie is ${randomMovie.movieTitle}`);
    console.log(`The reason is ${randomMovie.reason}`);
    console.log(`Movie image ${randomMovie.imageUrl}`)