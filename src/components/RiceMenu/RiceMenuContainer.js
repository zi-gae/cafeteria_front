import React from "react";
import RicemenuPresenter from "./RicemenuPresenter";

const RiceMenuContainer = ({ rice = [] }) => {
  const studentFoodStore = rice.filter(
    rice => rice[0] !== "교직원식단" && rice[0] !== "조식" && rice[0] !== "석식"
  );
  const professorFoodStore = rice.filter(rice => rice[0] === "교직원식단");
  const dormitoryFoodStore = rice.filter(
    rice => rice[0] === "조식" || rice[0] === "석식"
  );
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  today = yyyy + "년 " + mm + "월 " + dd + "일";
  return (
    <RicemenuPresenter
      studentFoodStore={studentFoodStore}
      professorFoodStore={professorFoodStore}
      dormitoryFoodStore={dormitoryFoodStore}
      today={today}
    />
  );
};

export default RiceMenuContainer;
