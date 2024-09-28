import classNames from "classnames";
import { useState } from "react";

import { forwardRef, ForwardRefRenderFunction } from "react";
import Hide from "./hide.svg";
import Show from "./show.svg";
import Clear from "./clear.svg";


interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  placeholder?: string;
  initial?: string;
  handleInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: ForwardRefRenderFunction<HTMLInputElement, TextInputProps> = (
  props,
  ref
) => {
  const {
    label,
    className,
    error,
    placeholder,
    initial,
    handleInput,
    type,
    ...rest
  } = props;

  const [inputValue, setInputValue] = useState(
    initial !== undefined ? initial : ""
  );
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    handleInput?.(event);
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const clearInput = () => {
    setInputValue("");
    handleInput?.({
      target: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className={className}>
      {label && (
        <div className="font-pretendard-regular mb-[10px] text-sm text-[#747474]">
          {label}
        </div>
      )}
      <div className="flex justify-center relative">
        <input
          {...rest}
          ref={ref}
          className={classNames(
            "w-full outline-none transition rounded-[8px] text-[#343434]",
            "text-[14px] px-3 py-[10px] bg-[#F6F6F6]",
            "placeholder:text-[#AFB8C0]",
            rest.disabled
              ? "opacity-60"
              : "hover:border-primary-300 focus:bg-[#EAEAFF]"
          )}
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          value={inputValue}
          onFocus={() => setIsFocused(true)}
          onInput={handleInputChange}
          onBlur={() => setIsFocused(false)}
          onReset={(event) => {
            setInputValue(event.currentTarget.value);
            console.log("rrrr ", event.currentTarget.value);
          }}
        />

        {inputValue && isFocused && type != "password" && (
          <button
            type="button"
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            onClick={clearInput}
          >
            <Clear />
          </button>
        )}

        {type === "password" && (
          <button
            type="button"
            className="absolute top-1/2 right-4 transform -translate-y-1/2"
            onClick={toggleShowPassword}
          >
            {showPassword ? <Show /> : <Hide />}
          </button>
        )}
      </div>
      {error && <div className="px-2 mt-1 text-sm text-red-500">{error}</div>}
    </div>
  );
};

export default forwardRef(TextInput);