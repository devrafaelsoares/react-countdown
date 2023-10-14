import { useEffect, useState } from "react";
import { CountdownHookProps, TimeProps } from "../../types";

const getDateCurrent = (): string => new Date().toISOString();

const checkReachedDate = (currentDate: string, requestedDate: string): boolean => {
    return new Date(currentDate).getTime() >= new Date(requestedDate).getTime() ? true : false;
};

const getDifferenceDate = (requestedDate: string, currentDate: string): number =>
    new Date(requestedDate).getTime() - new Date(currentDate).getTime();

const getValuesDate = (date: number) => {
    const days = Math.floor(date / (24 * 60 * 60 * 1000));
    const hours = Math.floor((date / (60 * 60 * 1000)) % 24);
    const minutes = Math.floor((date / (60 * 1000)) % 60);
    const seconds = Math.floor(date / 1000) % 60;

    return [days, hours, minutes, seconds];
};

const getTimeUnit = (date: number[]): (string | number)[] => {
    const dateFormatted = date.map((element) => {
        return element < 10 ? "0" + element : element;
    });
    return dateFormatted;
};

const dateFactory = (date: number[]) => {
    const dateFormatted = getTimeUnit(date);
    const [formattedDays, formattedHours, formattedMinutes, formattedSeconds] = dateFormatted;

    return [formattedDays, formattedHours, formattedMinutes, formattedSeconds].map((field) => String(field));
};

export function useCountdown({ date: dateTarget }: CountdownHookProps) {
    const [isArrived, setIsArrived] = useState(false);
    const defaultValue = {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    };

    const [time, setTime] = useState<TimeProps>(defaultValue);

    useEffect(() => {
        function countdown() {
            const nowDate = getDateCurrent();
            const differenceDate = getDifferenceDate(dateTarget as string, nowDate);
            const valuesDate = getValuesDate(differenceDate);
            const [days, hours, minutes, seconds] = dateFactory(valuesDate);
            if (checkReachedDate(nowDate, dateTarget as string)) {
                setIsArrived(true);
            }
            setTime({ days, hours, minutes, seconds });
        }
        countdown();
        const interval = setInterval(() => countdown(), 1000);
        if (isArrived) {
            clearInterval(interval);
            setTime(defaultValue);
        }
        return () => clearInterval(interval);
    }, [dateTarget, isArrived, setIsArrived]);

    return dateTarget ? time : defaultValue;
}
