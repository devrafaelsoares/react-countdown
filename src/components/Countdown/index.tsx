import Counter from "./components/Counter";
import "./style.css";


export default function Countdown() {

    return (
        <ul className="countdown gap-3 p-3 justify-center">
            <Counter name="Dias" time={"00"} />
            <Counter name="Horas" time={"00"} />
            <Counter name="Minutos" time={"00"} />
            <Counter name="Segundos" time={"00"} />
        </ul>
    );
}
