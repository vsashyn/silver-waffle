import { LOAD_IMAGES, ADD_IMG, DELETE_IMG, SET_TOOLTIP } from '../actions/index';

const defaultState = [];

function images(state = defaultState, action) {
  switch (action.type) {

    case `${LOAD_IMAGES}_FULFILLED`:
      return action.payload.images.map(img => Object.assign({}, {
        id: img.id,
        src: img.src,
        tooltip: img.tooltip,
      }));

    case `${ADD_IMG}_FULFILLED`:
      return [...state,
        {
          id: action.payload.id,
          src: action.payload.src,
          tooltip: '',
        },
      ];

    case `${DELETE_IMG}_FULFILLED`:
      return state.filter(el => el.id !== action.payload.id);

    case `${SET_TOOLTIP}_FULFILLED`:
      return state.map((el) => {
        if (el.id !== action.payload.id) {
          return el;
        }
        return Object.assign({},
          {
            id: el.id,
            src: el.src,
            tooltip: action.payload.text,
          });
      });

    default:
      return state;
  }
}

export default images;
