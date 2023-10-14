import "./App.css";
import Countdown from "./components/Countdown";
import Title from "./components/Countdown/components/Title";
import Modal from "./components/Modal";
import AppProvider from "./context";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center gap-3 bg-primaryDark">
      <AppProvider>
        <Title />
        <Countdown />
        <Modal />
      </AppProvider>
    </div>
  );
}
