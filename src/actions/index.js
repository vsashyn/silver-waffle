export const ADD_IMG = 'ADD_IMG';
export const DELETE_IMG = 'DELETE_IMG';
export const SET_TOOLTIP = 'SET_TOOLTIP';


export function addImg(payload) {
  return { type: ADD_IMG, payload };
}

export function deleteImg(payload) {
  return { type: DELETE_IMG, payload };
}

export function setTooltip(payload) {
  return { type: SET_TOOLTIP, payload };
}


export function readImgAsURL(payload) {
  return function (dispatch) {
    return new Promise((resolve, reject) => {
      const reader = new window.FileReader();

      reader.onload = function (e) {
        const dataURL = reader.result;
        payload.value = '';
        resolve(dataURL);
      };
      reader.readAsDataURL(payload.files[0]);
    },
    ).then(dataURL => dispatch(addImg({ src: dataURL })));
  };
}
