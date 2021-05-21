import "./styles.css";
import { useState } from "react";

import useInterval from "./useInterval";
import { countdown } from "./utils";

const DATE = "May 31, 2021 00:00:00";

export default function App() {
  const [state, setState] = useState(() => countdown(DATE));

  const { textDay, textHour, textMinute, textSecond } = state;

  useInterval(() => setState(countdown(DATE)), 1000);

  return (
    <section className="coming-soon">
      <h2>
        Скоро мой День Рождения (31.05)
        <span role="img" aria-label="salut">
          🎉
        </span>
        <span role="img" aria-label="salut-2">
          🎊
        </span>
        <span role="img" aria-label="cake">
          🎂
        </span>
      </h2>
      <div className="countdown">
        <div className="container-day">
          <h3 class="day">Дней</h3>
          <h4 className="time-value">{textDay}</h4>
        </div>
        <div className="container-hour">
          <h3 class="hour">Часов</h3>
          <h4 className="time-value">{textHour}</h4>
        </div>
        <div className="container-minute">
          <h3 class="minute">Минут</h3>
          <h4 className="time-value">{textMinute}</h4>
        </div>
        <div className="container-second">
          <h3 class="second">Секунд</h3>
          <h4 className="time-value">{textSecond}</h4>
        </div>
      </div>
      <img
        className="waiting"
        src="/cake.svg"
        alt="woman is waiting near calendar"
      />
    </section>
  );
}
