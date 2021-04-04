import axios from "axios";
import { domain } from "../../configs/setting";

export const getMovieList = () => {
  return async (dispatch) => {
    let result = await axios({
      url: `${domain}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
      method: "GET",
    });
    dispatch({
      type: "GET_MOVIE_LIST",
      arrFilm: result.data,
    });
  };
};

export const getMovieDetail = (filmId) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `${domain}/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${filmId}`,
        method: "GET",
      });
      dispatch({
        type: "GET_MOVIE_DETAIL",
        FilmDetail: result.data,
      });
    } catch (errors) {
        console.log('errors', errors.respone.data);
    }
  };
};
