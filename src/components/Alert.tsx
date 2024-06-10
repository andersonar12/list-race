import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useEffect } from "react";

interface AlertProps {
  result: Array<any> | string;
  successMessage?: string;
  errorMessage?: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const Alert = ({ result, successMessage, errorMessage, open, setOpen }: AlertProps) => {
  useEffect(() => {
    console.log("Modal Result", result);
  }, [result]);
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      center
      styles={{ modal: { minWidth: "400px" } }}
    >
      {!Array.isArray(result) ? (
        <h3>{result}</h3>
      ) : result.length > 0 ? (
        <div>
          <h3>{successMessage}</h3>
          {/* <pre>{JSON.stringify(result, null, 2)}</pre> */}
          <ul className="w-full text-sm font-medium  bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {result.map((item) => (
              <li
                key={item.id}
                className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600"
              >
                <p className="text-white">{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h3>{errorMessage}</h3>
      )}
    </Modal>
  );
};
