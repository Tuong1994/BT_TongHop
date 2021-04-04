import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getMovieList } from '../../redux/action/FilmAction';
import './Home.css';

function Home(props) {

    let { arrFilm } = useSelector(state => state.FilmReducer);
    console.log(arrFilm);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieList());
    }, [])

    let renderFilm = () => {
        return arrFilm.map((film, index) => {
            return <Fragment>
                <div className="col-4" key={index}>
                    <div className="card text-left movie-card">
                        <img className="card-img-top movie-img" src={film.hinhAnh} alt={film.hinhAnh} />
                        <div className="card-body movie-body">
                            <h4 className="card-title movie-title">{film.tenPhim}</h4>
                            <NavLink className="btn-booking" to={`/detail/${film.maPhim}`}>Đặt vé</NavLink>
                        </div>
                    </div>
                </div>
            </Fragment>
        })
    }

    return (
        <div className="bg-home">
            <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                </ol>
                <div className="carousel-inner slider">
                    <div className="carousel-item active slides slide-1">
                        <img src="../../img/movie/kong_vs_godzilla.png" className="d-none" alt="Kong vs Godzilla" />
                    </div>
                    <div className="carousel-item slides slide-2">
                        <img src="../../img/movie/justice_league.jpg" className="d-none" alt="Justice League" />
                    </div>
                    <div className="carousel-item slides slide-3">
                        <img src="../../img/movie/endgame.jpg" className="d-none" alt="Avengers Endgame" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <div className="container">
                <div className="movie-list">
                    <h3>Danh sách bộ phim</h3>
                </div>
                <div className="row">
                    {renderFilm()}
                </div>
            </div>

        </div>
    );
}

export default Home;