import "./style.css";
import { AiOutlineClose } from "react-icons/ai";
import ReactModal, { Styles } from "react-modal";
import Form from "../Form";
import { useState } from "react";

const styles: Styles = {
    overlay: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0000007F",
    },
    content: {
        width: "100%",
        maxWidth: "42rem",
        maxHeight: "28rem",
        backgroundColor: "white",
        position: "unset",
        borderRadius: "0.5rem",
        padding: "0",
        animation: "dropTop .3s linear",
    },
};

export default function Modal(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    const [event, setEvent] = useState(false)
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            <ReactModal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Modal example"
                appElement={document.getElementById("root") as HTMLElement}
                style={styles}
            >
                <div className="flex items-start justify-between p-4 border-b rounded-t">
                    <h3 className="text-xl font-semibold text-gray-900">Informações do evento</h3>
                    <button
                        onClick={closeModal}
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                    >
                        <AiOutlineClose />
                    </button>
                </div>
                <div className="px-6 pt-6">
                    <Form closeModal={closeModal} />
                </div>
            </ReactModal>
            <div className="flex justify-center">
                {event ? (
                    <button
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        onClick={openModal}
                    >
                        Criar evento
                    </button>
                ) : (
                    <button
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Cancelar evento
                    </button>
                )}
            </div>
        </>
    );
}
