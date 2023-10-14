import { EventContext } from "../../../../context/Countdown";

export default function Title(): JSX.Element {
    const { getEvent } = EventContext();
    const event = getEvent();
    return (
        <div>
            <h1 className="text-5xl text-primaryBlue text-center">{event?.title}</h1>
        </div>
    );
}
