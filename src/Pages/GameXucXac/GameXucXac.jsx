import React from 'react';
import './GameXucXac.css';
import KetQua from './KetQua';
import XucXac from './XucXac';

function GameXucXac(props) {
    return (
        <div className="bgGame p-2">
            <h1 className="display-4 mb-4">Game Xúc Xắc</h1>
            <XucXac />
            <KetQua />
        </div>
    );
}

export default GameXucXac;