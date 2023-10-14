import Counter from "./components/Counter";
import "./style.css";

import { useCountdown } from "../../hooks/Countdown/";
import { EventContext } from "../../context/Countdown";

export default function Countdown() {
    const { getEvent } = EventContext();
    const event = getEvent();
    const { days, hours, minutes, seconds } = useCountdown({
        date: event?.date,
    });

    return (
        <ul className="countdown gap-3 p-3 justify-center">
            <Counter name="Dias" time={days} />
            <Counter name="Horas" time={hours} />
            <Counter name="Minutos" time={minutes} />
            <Counter name="Segundos" time={seconds} />
        </ul>
    );
}
