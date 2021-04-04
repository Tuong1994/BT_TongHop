import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetail } from '../../redux/action/FilmAction';
import './Details.css';
import '../Common.css'

function Details(props) {

    let { FilmDetail } = useSelector(state => state.FilmReducer);
    console.log(FilmDetail);
    let dispatch = useDispatch();

    useEffect(() => {
        let { id } = props.match.params;
        dispatch(
            getMovieDetail(id)
        )
    }, {})

    return (
        <div className="bg-common">
            <div className="container detail-container">
                <div className="row mb-5 movie-detail">
                    <div className="col-5 detail-img">
                        <img src={FilmDetail.hinhAnh} alt={FilmDetail.hinhAnh} />
                    </div>
                    <div className="col-7 detail-body">
                        <hr />
                        <h4 className="movie-name">Tên Phim : <span style={{ textTransform: 'uppercase' }}>{FilmDetail.tenPhim}</span></h4>
                        <hr />
                        <p style={{ fontSize: '25px' }}><u>Tóm tắc nội dung :</u></p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque qui architecto incidunt velit facilis quidem, praesentium modi ratione nobis delectus inventore commodi, quisquam officiis aspernatur suscipit pariatur molestias ex. Excepturi doloremque nobis vel? Recusandae officiis distinctio modi illum totam? Doloribus quod suscipit, ex nulla voluptas dolores eum quis vero impedit!</p>
                        <hr />
                    </div>
                </div>

                <hr />

                <div className="row cinema-detail">
                    <div className="col-3">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            {FilmDetail.heThongRapChieu?.map((heThongRap, index) => {
                                let activeClass = index === 0 ? 'active' : "";

                                return <a className={`nav-link ${activeClass}`} id="v-pills-home-tab" data-toggle="pill" href={heThongRap.maHeThongRap} role="tab" aria-controls="v-pills-home" aria-selected="true" key={index}>
                                    <span>
                                        <img src={heThongRap.logo} alt={heThongRap.logo} style={{ width: '50px', height: '50px', marginRight: '20px' }} />
                                    </span>
                                    <span>{heThongRap.tenHeThongRap}</span>
                                </a>
                            })}
                        </div>
                    </div>

                    <div className="col-9">
                        <div className="tab-content" id="v-pills-tabContent">
                            {FilmDetail.heThongRapChieu?.map((heThongRap, index) => {
                                let showActiveClass = index === 0 ? 'show active' : '';

                                <div key={index} className={`tab-pane fade ${showActiveClass}`} id={heThongRap.maHeThongRap} role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    {heThongRap.cumRapChieu?.map((cumRap, index) => {
                                        return <div key={index}>
                                            <h3>{cumRap.tenCumRap}</h3>
                                        </div>
                                    })}
                                </div>
                            })}
                            {/* 
                            
                            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Details;