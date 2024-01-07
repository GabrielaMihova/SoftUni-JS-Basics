function movieRatings (input) {
    let movieCount = Number (input[0]);
  
    let maxRating = Number.MIN_SAFE_INTEGER;
    let maxRatingTtile = " ";
    let minRating = Number.MAX_SAFE_INTEGER;
    let minRatingTitle = " ";
    let averageRating = 0;

    let i = 1;
    while (true) {
        if (i >= movieCount * 2) {
            break;
        }

        let title = input[i++];
        let rating = Number(input[i++]);

        if (rating > maxRating) {
            maxRating = rating;
            maxRatingTtile = title;
        }

        if (rating < minRating) {
            minRating =rating;
            minRatingTitle = title;
        }

        averageRating += rating;        
    }
    let average = averageRating/movieCount;
    console.log(`${maxRatingTtile} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${minRatingTitle} is with lowest rating: ${minRating.toFixed(1)}`);
    console.log(`Average rating: ${average.toFixed(1)}`);
}
movieRatings ([5,

"A Star is Born",

7.8,

"Creed 2",

7.3,

"Mary Poppins",

7.2,

"Vice",

7.2,

"Captain Marvel",

7.1])