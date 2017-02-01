import { ADD_IMG, DELETE_IMG, SET_TOOLTIP } from '../actions/index';

let inc = 0;

function genId() {
  inc += 1;
  return inc;
}

const initialState = [
  {
    id: genId(),
    src: 'https://c1.staticflickr.com/4/3041/2750903492_fe8f56943f_n.jpg',
    tooltip: 'Highlighted tooltip',
  },
  {
    id: genId(),
    src: 'https://c1.staticflickr.com/4/3041/2750903492_fe8f56943f_n.jpg',
    tooltip: '',
  },
];


function images(state = initialState, action) {
  switch (action.type) {
    case ADD_IMG:
      return [{
        id: genId(),
        src: action.payload.src,
        tooltip: '',
      }, ...state,
      ];

    case DELETE_IMG:
      return state.filter(el => el.id !== action.payload.id);

    case SET_TOOLTIP:
      return state.map((el) => {
        if (el.id !== action.payload.id) {
          return el;
        }
        return Object.assign({}, { id: el.id, src: el.src, tooltip: action.payload.text });
      });

    default:
      return state;
  }
}


export default images;
