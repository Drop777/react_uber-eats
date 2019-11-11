export const ACTION_TYPES = {
  SAVE_DATA: 'SAVE_DATA',
};

const saveData = data => ({
  type: ACTION_TYPES.SAVE_DATA,
  payload: data,
});

export const loadData = () => (dispatch) => {
  fetch('https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants')
    .then(resp => resp.json())
    .then(({ data }) => {
      dispatch(saveData(data));
    });
};
