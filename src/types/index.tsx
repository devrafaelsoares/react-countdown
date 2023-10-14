import { ReactNode } from "react";

export interface FormProps {
    closeModal: () => void;
}
export interface CounterProps {
    name: string;
    time: string;
}

export interface ChildrenProps {
    children: ReactNode;
}

export interface EventProps {
    title: string;
    date: string;
}
export interface CountdownProps {
    event: EventProps | null;
    addEvent: (sendEvent: EventProps) => void;
    cleanEvent: () => void;
    getEvent: () => EventProps | null;
}
