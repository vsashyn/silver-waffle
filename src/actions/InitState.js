let inc = 0;

/**
 * Generates id for elements.
 * In real-world app it should be placed on backend,
 * so it's just for mock
 * @return {Number} Unique id
 */
export function genId() {
  inc += 1;
  return inc;
}

/**
 * Mocked init state for application, which in real-world application
 * we will get from backend
 * @type {Array}
 */
const initialState = [
  {
    id: genId(),
    src: 'https://c1.staticflickr.com/4/3771/13238553944_1c6c241732_b.jpg',
    tooltip: 'Highlighted tooltip',
  },
  {
    id: genId(),
    src: 'https://c1.staticflickr.com/6/5534/12026256495_3bbf270693.jpg',
    tooltip: '',
  },
];

export default initialState;
