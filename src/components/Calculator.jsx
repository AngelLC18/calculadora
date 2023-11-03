import { useState } from "react";
const Calculator = () => {
  const [result, setResult] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [inputStyle, setInputStyle] = useState(
    "w-full p-2 mb-4 border-2 rounded"
  );

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
    setInputStyle("w-full p-2 mb-4 border-2 rounded");
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
      setShowModal(true);
    } catch (err) {
      setResult("Error");
      setShowModal(true);
    }
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9\b]+$/;
    if (value === "" || regex.test(value)) {
      setResult(e.target.value);
      setInputStyle("w-full p-2 mb-4 border-2 rounded");
    } else {
      alert("Solo se permiten caracteres numéricos");
      setInputStyle("w-full p-2 mb-4 border-2 rounded bg-red-100");
    }
  };

  return (
    <div className="container flex justify-center items-center flex-col gap-2">
      <h1 className="font-bold text-xl">Calculadora</h1>
      <div className="w-[500px] h-[700px] bg-cyan-200 p-4 rounded-lg">
        <form>
          <input
            type="text"
            value={result}
            onChange={handleInputChange}
            className={inputStyle}
          />
        </form>

        <div className="grid grid-cols-4 gap-4">
          <button
            onClick={clear}
            className="col-span-4 bg-red-500 text-white p-2 rounded"
          >
            Borrar
          </button>
          <button
            name="+"
            onClick={handleClick}
            className="bg-blue-500 text-white p-2 rounded"
          >
            +
          </button>
          <button
            name="-"
            onClick={handleClick}
            className="bg-blue-500 text-white p-2 rounded"
          >
            -
          </button>
          <button
            name="*"
            onClick={handleClick}
            className="bg-blue-500 text-white p-2 rounded"
          >
            *
          </button>
          <button
            name="/"
            onClick={handleClick}
            className="bg-blue-500 text-white p-2 rounded"
          >
            /
          </button>
          <button
            name="**"
            onClick={handleClick}
            className="bg-blue-500 text-white p-2 rounded"
          >
            ^
          </button>
          <button
            name="Math.sqrt("
            onClick={handleClick}
            className="bg-blue-500 text-white p-2 rounded"
          >
            √
          </button>
          <button
            onClick={calculate}
            className="col-span-4 bg-green-500 text-white p-2 rounded"
          >
            Resultado
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      Resultado
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">{result}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={() => setShowModal(false)}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calculator;
