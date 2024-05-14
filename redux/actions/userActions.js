// userActions.js
export const setUser = (userInfo) => ({
    type: 'SET_USER',
    payload: userInfo,
  });


// logoutAction.js
export const logoutUser = () => ({
    type: 'LOGOUT_USER',
  });
  