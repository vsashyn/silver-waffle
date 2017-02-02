export const ADD_IMG = 'ADD_IMG';
export const DELETE_IMG = 'DELETE_IMG';
export const SET_TOOLTIP = 'SET_TOOLTIP';

// STUBS for async
/*
function addImgReq({ src }) {
  return fetch('images/', {
    method: ' POST',
    body: src,
  });
}
function deleteImgReq({ id }) {
  return fetch(`images/${id}`, {
    method: 'DELETE',
  });
}
function setTooltipReq({ id, text }) {
  return fetch(`images/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ tooltip: text }),
  });
}
*/

export function addImg({ src }) {
  return {
    type: ADD_IMG,
    payload: Promise.resolve({ src }),
  };
}

export function deleteImg({ id }) {
  return {
    type: DELETE_IMG,
    payload: Promise.resolve({ id }) };
}

export function setTooltip({ id, text }) {
  return {
    type: SET_TOOLTIP,
    payload: Promise.resolve({ id, text }) };
}


export function readImgAsURL(payload) {
  return function (dispatch) {
    return new Promise((resolve, reject) => {
      const reader = new window.FileReader();

      reader.onload = function (e) {
        const dataURL = e.target.result;
        payload.value = '';
        resolve(dataURL);
      };

      reader.onerror = function (e) {
        reject(e);
      };

      reader.readAsDataURL(payload.files[0]);
    },
    )
      .then(dataURL => dispatch(addImg({ src: dataURL })));
  };
}
