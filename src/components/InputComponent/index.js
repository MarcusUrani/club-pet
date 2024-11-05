const InputComponent = (inputParams) => {
  return (
    <div>
      <label
        htmlFor={inputParams.inputId}
        className="block text-sm/6 font-medium text-gray-900 text-left"
      >
        {inputParams.inputText}
      </label>
      <div className="mt-2">
        <input
          id={inputParams.inputId}
          name={inputParams.inputId}
          type={inputParams.inputType}
          placeholder={inputParams.inputPlaceholder}
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
        />
      </div>
    </div>
  );
};

export default InputComponent;
