import React from "react";
import RicemenuPresenter from "./RicemenuPresenter";

const RiceMenuContainer = ({ rice }) => {
  const studentFoodStore = rice.filter(rice => rice[0] !== "교직원");
  const professorFoodStore = rice.filter(rice => rice[0] === "교직원");
  const dormitoryFoodStore = rice.filter(
    rice => rice[0] === "조식" || rice[0] === "석식"
  );

  return (
    <RicemenuPresenter
      studentFoodStore={studentFoodStore}
      professorFoodStore={professorFoodStore}
      dormitoryFoodStore={dormitoryFoodStore}
    />
  );
};

export default RiceMenuContainer;
