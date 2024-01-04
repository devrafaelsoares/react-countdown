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
    date: Date;
}
export interface CountdownProps {
    event: EventProps | null;
    addEvent: (sendEvent: EventProps) => void;
    cleanEvent: () => void;
    getEvent: () => EventProps | null;
}

export interface TimeProps {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
}

export interface CountdownHookProps {
    date?: string;
}
