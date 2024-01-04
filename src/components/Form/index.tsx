import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import MaskedTextInput from "react-text-mask";
import DatePicker from "react-datepicker";
import PT_BR from "date-fns/locale/pt-BR";
import { BiErrorAlt } from "react-icons/bi";
import { EventProps, FormProps } from "../../types";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { maskDate } from "../../util/masks-input";
import { twMerge } from "tailwind-merge";
import { EventContext } from "../../context/Countdown";

const minDate = moment().add(1, "days").toDate();

const createEventFormSchema = z.object({
    title: z.string().min(1, "Campo obrigatório"),
    date: z.date({ required_error: "Campo obrigatório" }).min(minDate, { message: "Data inválida" }),
});

type CreateEventFormData = z.infer<typeof createEventFormSchema>;

export default function Form({ closeModal }: FormProps): JSX.Element {
    const { addEvent } = EventContext();
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateEventFormData>({
        resolver: zodResolver(createEventFormSchema),
    });

    const createEvent = (data: EventProps) => {
        addEvent(data);
        closeModal();
    };

    return (
        <form className="space-y-6" method="POST" onSubmit={handleSubmit(createEvent)}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div className="py-1">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">
                        Título
                    </label>
                    <input
                        type="text"
                        id="title"
                        className={twMerge(
                            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5",
                            errors.title && "border-red-600 focus:outline-red-600"
                        )}
                        placeholder="Informe o título do evento"
                        {...register("title")}
                    />
                    <div className="relative">
                        {errors.title && (
                            <div className="absolute flex items-center gap-1">
                                <BiErrorAlt className="text-red-600" />
                                <span className="text-red-600 text-sm ">{errors.title.message}</span>
                            </div>
                        )}
                    </div>
                </div>
                <div className="py-1">
                    <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900">
                        Data
                    </label>
                    <Controller
                        control={control}
                        name="date"
                        render={({ field }) => (
                            <DatePicker
                                dateFormat="dd/MM/yyyy"
                                locale={PT_BR}
                                minDate={minDate}
                                placeholderText="Informe a data do evento"
                                className={twMerge(
                                    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5",
                                    errors.date && "border-red-600 focus:outline-red-600"
                                )}
                                selected={field.value}
                                customInput={<MaskedTextInput type="text" mask={maskDate} {...register("date")} />}
                                onChange={(date) => field.onChange(date)}
                            />
                        )}
                    />
                    <div className="relative">
                        {errors.date && (
                            <div className="absolute flex items-center gap-1">
                                <BiErrorAlt className="text-red-600" />
                                <span className="text-red-600 text-sm ">{errors.date.message}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex items-center py-6 space-x-2 border-t border-gray-200 rounded-b">
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    Confirmar
                </button>
                <button
                    type="button"
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                    onClick={closeModal}
                >
                    Cancelar
                </button>
            </div>
        </form>
    );
}
