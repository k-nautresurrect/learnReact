import React, { Component } from "react";
import "./App.css";
import { getMovies } from "./services/fakeMovieService";

class App extends Component {
  state = {
    movies: getMovies(),
  };
  constructor() {
    super();
    console.log(this.state.movies);
  }
  render() {
    return (
      <main className="container">
        <h1>Vidly</h1>
        {this.handleMovie()}
      </main>
    );
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  handleMovie = () => {
    if (this.state.movies.length === 0) {
      return <p>there are no movies in the Database</p>;
    }
    return (
      <div>
        <p>there are {this.state.movies.length} movies</p>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
}

export default App;
