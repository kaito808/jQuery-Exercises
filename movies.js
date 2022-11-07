let movies = [];
let currentId = 0;

$(function() {

  $("#add").on("submit", function(evt) {
    evt.preventDefault();

    let title = $("#title").val();
    let rating = $("#rating").val();

    let movieData = { title, rating, currentId };

    const newMovie = addMovie(movieData);

    currentId++
    movies.push(movieData);

    $("#movieInfo").append(newMovie);
    $("#add").trigger("reset");
  });


  $("tbody").on("click", function(evt) {
    
    let movieId = movies.findIndex(movie => movie.currentId === +$(evt.target).data("deleteId"))
    movies.splice(movieId, 1)

    $(evt.target)
      .closest("tr")
      .remove();
  });
});


function addMovie(data) {
  return `
    <tr>
      <td>${data.title}</td>
      <td>${data.rating}</td>
      <td>
        <button>Remove</button>
      </td>
    <tr>
  `;
}
