import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { MdError } from "react-icons/md";
import { isFormInvalid } from "../utils/isFormInvalid";
import { findInputError } from "../utils/findInputError";

export const Input = ({ label, type, placeholder, validation, name }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputError);

  const getInput = (type) => {
    switch (type) {
      case "checkbox":
        return (
          <div className="flex items-center gap-2">
            <input type={type} name={name} {...register(name, validation)} />
            <label htmlFor={name}>{label}</label>
          </div>
        );

      default:
        return (
          <input
            type={type}
            className="w-full py-2 px-3 font-medium bg-slate-200 border rounded-md border-slate-300 outline-primary"
            placeholder={placeholder}
            {...register(name, validation)}
          />
        );
    }
  };

  return (
    <div className="flex flex-col w-full gap-2">
      {getInput(type)}

      <AnimatePresence mode="wait" initial={false}>
        {isInvalid && (
          <InputError
            message={inputError?.error?.message}
            key={inputError?.error?.message}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const InputError = ({ message }) => {
  return (
    <motion.p
      className="w-fit flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
      {...framer_error}
    >
      <MdError />
      {message}
    </motion.p>
  );
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};
