import axios from "axios";

const OUT_DORMITORY = "OUT_DORMITORY";

const dormitoryOut = (location, dormitoryOutState) => {
  return {
    type: OUT_DORMITORY,
    location,
    dormitoryOutState
  };
};

const postDormitoryOut = (
  collegeStudentId,
  collegeStudentPwd,
  dormitoryOutStartDay,
  dormitoryOutEndtDay,
  dormitoryOutReason,
  location
) => {
  return async (dispatch, getState) => {
    const {
      user: { token }
    } = getState();

    const res = await axios({
      url: "/crawler/dormitory/",
      method: "post",
      headers: {
        Authorization: `JWT ${token}`,
        "Content-type": "application/json"
      },
      data: {
        tu_id: collegeStudentId,
        tu_password: collegeStudentPwd,
        first_day: dormitoryOutStartDay,
        second_day: dormitoryOutEndtDay,
        apply_text: dormitoryOutReason
      }
    });
    const {
      data: { message }
    } = res;
    if (message.includes("비밀번호 입력")) {
      dispatch(dormitoryOut(location, "pwdwrong"));
    } else if (message.includes("비밀번호 5회")) {
      dispatch(dormitoryOut(location, "idlock"));
    } else if (message.includes("같은 기간에")) {
      dispatch(dormitoryOut(location, "overlap"));
    } else if (message.includes("생활관생만")) {
      dispatch(dormitoryOut(location, "notaccess"));
    } else {
      dispatch(dormitoryOut(location, "success"));
    }
  };
};

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OUT_DORMITORY:
      return applyDormitoryOut(state, action);

    default:
      return state;
  }
};

const applyDormitoryOut = (state, action) => {
  const { location, dormitoryOutState } = action;
  return {
    ...state,
    location: {
      ...location,
      pathname: "/admin"
    },
    dormitoryOutState: dormitoryOutState
  };
};

const actionCreators = {
  postDormitoryOut
};

export { actionCreators };

// default reducer export

export default reducer;
