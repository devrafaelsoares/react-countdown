import { CountdownProvider } from "./Countdown";
import { ChildrenProps } from "../types";

export default function AppProvider({ children }: ChildrenProps) {
    return <CountdownProvider>{children}</CountdownProvider>;
}
