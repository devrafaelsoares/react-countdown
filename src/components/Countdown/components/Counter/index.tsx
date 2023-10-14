import { CounterProps } from "../../../../types";

export default function Counter({ name, time }: CounterProps): JSX.Element {
    return (
        <li className="p-4 text-primaryBlue bg-secondDark rounded-md flex flex-col items-center">
            <span className="text-7xl">{time}</span>
            <span className="text-1xl">{name}</span>
        </li>
    );
}
