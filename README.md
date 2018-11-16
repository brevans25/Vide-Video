# The Vide Video Project

This project was created as part of the necessary requirements for completion of the JavaScript React September 2018 Class offered by Code Louisville.<br>
For now, it is just a simple prototype of a movie rental service where you can browse movies fetched from the "The Movie Database API", add them to the cart and "rent" them if they are available.
At the moment, there are some bugs that (I hope) will be squashed in the future, when I get more comfortable using React.
When I compare this project to the Front-End project I submitted four months ago, in which I had barely two JavaScript functions written, I see how much I learned from this class.

Please, download the repo associated with this project to your computer, run `npm i` to install it and from the project directory, run `npm start` to run the app in the development mode.
In the project directory, you can run:

### Endpoints used in the project:

### [Trending Movies](https://developers.themoviedb.org/3/trending/get-trending)

In the `CATALOG` tab in the NavBar, the user can find a selection of weekly trending movies. The weekly list tracks items over a 7 day period, with a 7 day half life.

### [Search Movies](https://developers.themoviedb.org/3/search/search-movies)

Still in the `CATALOG` page, the user can search for movie titles and retrieve a list of movies from the API.<br>
This list will be displayed in a table where the user can check the movies id, title, availability and price.<br>
`Availability` was generated using a boolean value. If Available, the user will see an `ADD` button. If Not Available, the button will be disabled.<br>
The `Price` column was generated using a method to iterate through an array with three random prices.<br>

Using `localStorage` I sent the movies added by the user to the tab `MY SELECTION`.<br>
In this tab the users can see the total amount they should pay for the movies they selected and also delete movies from the table.

### [Discover Movies](hhttps://developers.themoviedb.org/3/discover/movie-discover)

In the tab `MOVIE CURIOSITIES`, the user can type a year and retrieve a list of the most watched movies in that year.
