import React from "react";
import { useSelector } from "react-redux";
import ProgressBar from "./ProgressBar";

const Monster = () => {
  const monster = useSelector((state) => state.fight.monster);

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="card-monstre col-sm-12">
            <div id="monsterCard">
              <div className="text-center">
                <div className="row">
                  <div className="col-sm-2 offset-sm-3">
                    <span
                      className="badge badge-danger ml-2 "
                      id="degatSpanMonster"
                    ></span>
                    <img
                      className="img-fluid"
                      src="https://cdn.pixabay.com/photo/2014/12/21/23/40/yeti-575808_960_720.png"
                      alt="monster"
                    />
                  </div>

                  <div id="comboOnMonster" className="col-sm-6"></div>
                </div>
              </div>
              <ProgressBar
                pv={monster.pv}
                pvMax={monster.pvMax}
                /* bgType={state.fight.monster.bgType}
                faType={state.fight.monster.faType}
                barName={state.fight.monster.barName} */
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Monster;
