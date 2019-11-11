export const ACTION_TYPES = {
  SAVE_DATA: 'SAVE_DATA',
};

const saveData = data => ({
  type: ACTION_TYPES.SAVE_DATA,
  payload: data,
});

const BASE_URL = 'https://mate-uber-eats-api.herokuapp.com/api/v1/';

export const loadData = () => (dispatch) => {
  fetch(`${BASE_URL}restaurants`)
    .then(resp => resp.json())
    .then(({ data }) => {
      dispatch(saveData(data));
    });
};
