import { useState, createContext, useContext } from "react";
import { ChildrenProps, CountdownProps, EventProps } from "../../types";

export const CountdownContext = createContext<CountdownProps>({} as CountdownProps);

export const EventContext = () => {
    const context = useContext(CountdownContext);
    return context;
};

export function CountdownProvider({ children }: ChildrenProps) {
    const [event, setEvent] = useState<EventProps>({} as EventProps);

    const addEvent = (sendEvent: EventProps): void => {
        setEvent(sendEvent);
        localStorage.setItem("event", JSON.stringify(sendEvent));
    };

    const getEvent = (): EventProps | null => {
        const eventFound = localStorage.getItem("event") as string;

        if (eventFound) {
            const event: EventProps = JSON.parse(eventFound);
            return event;
        }
        return null;
    };

    const cleanEvent = (): void => {
        setEvent({} as EventProps);
        localStorage.clear();
    };

    return (
        <CountdownContext.Provider value={{ addEvent, cleanEvent, event, getEvent }}>
            {children}
        </CountdownContext.Provider>
    );
}
