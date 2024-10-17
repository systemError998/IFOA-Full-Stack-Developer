import { Component } from 'react'
import {urlApi , apiKey } from '../dati/dati'


import './Movies.css'
export default class MoviesHome extends Component {

        state = {
            moviez: []
        }

    componentDidMount() {
        fetch(`${urlApi}${this.props.urlMovies}`)
            .then(response => response.json())
            .then(result => {
                this.setState({ moviez: result.Search })
            })
            .catch(error => console.log('error', error));
        }

    render() {

        console.log(this.state.moviez);
        // const { moviez } = this.state;

        return (
            <>
                <h3 className="text-start movieSection text-white fs-3 ms-4">{this.props.sectionTitle}</h3>
                <div className='mx-auto movieContainer '>
                    <div className='moviesDiv carouselContainer'>
                        {this.state.moviez.map(movie => (
                            <div className="col mb-2 movieDiv carouselSlide" key={movie.imdbID}>
                                <img onClick={} className="img-fluid" src={movie.Poster} alt="movie picture"/>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}