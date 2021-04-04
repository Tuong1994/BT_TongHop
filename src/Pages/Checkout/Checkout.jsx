import React from 'react';
import './Checkout.css';

function Checkout(props) {

    let renderChair = () => {
        let arrChair = []
        for (let i = 1; i < 99; i++) {
            arrChair.push(<button>{i}</button>);
        }
        return arrChair;
    }
    return (
        <div className="bg-common">
            <div className='container cinema-container'>
                <div className="row">
                    <div className="col-7">
                        <div className="screen">
                            <img src="../../img/movie/screen.png" alt="sceen" />
                        </div>
                        <div>
                            {renderChair()}
                        </div>
                    </div>
                    <div className="col-5 film-info">
                        <div className="film-price">
                            <h4>Tổng tiền :</h4>
                        </div>
                        <hr />
                        <div className="film-img">
                            <img src="../../img/movie/kong_vs_godzilla.png" width='200px' height='200px'/>
                        </div>
                        <hr />
                        <div className="cinema-addr">
                            <p>Địa chỉ :</p>
                            <p>Lịch chiếu :</p>
                        </div>
                        <hr />
                        <div className="cinema-chair">
                            <p>Ghế : </p>
                        </div>
                        <hr />
                        <button className="btn-book">Đặt vé</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;