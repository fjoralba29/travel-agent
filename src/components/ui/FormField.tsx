import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type BaseProps = {
    label: string;
    name: string;
};

type InputProps = BaseProps &
    InputHTMLAttributes<HTMLInputElement> & { as?: "input" };
type TextareaProps = BaseProps &
    TextareaHTMLAttributes<HTMLTextAreaElement> & { as: "textarea" };

export default function FormField(props: InputProps | TextareaProps) {
    const { label, name } = props;
    const sharedClasses =
        "w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900";

    return (
        <div>
            <label
                htmlFor={name}
                className='block text-sm font-semibold text-slate-900'
            >
                {label}
            </label>
            {props.as === "textarea" ? (
                <textarea
                    id={name}
                    name={name}
                    rows={5}
                    className={`mt-2 resize-y ${sharedClasses}`}
                    {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
                />
            ) : (
                <input
                    id={name}
                    name={name}
                    className={`mt-2 ${sharedClasses}`}
                    {...(props as InputHTMLAttributes<HTMLInputElement>)}
                />
            )}
        </div>
    );
}
