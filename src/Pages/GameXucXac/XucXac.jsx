import React from 'react';

function XucXac(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <button className="btnChoose">Tài</button>
                </div>
                <div className="col-4">
                    <div className="row">
                        <div className="col-4">
                            <img src="./img/xucXac/1.png" />
                        </div>
                        <div className="col-4">
                            <img src="./img/xucXac/1.png" />
                        </div>
                        <div className="col-4">
                            <img src="./img/xucXac/1.png" />
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <button className="btnChoose">Xỉu</button>
                </div>
            </div>
        </div>
    );
}

export default XucXac;