import { useState } from "react";

const validateEmail = (email: string) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(String(email).toLowerCase());
};

export const useCreateAccount = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const validateAccount = async (email: string): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (validateEmail(email)) {
          resolve("Account valid ✅");
        } else {
          resolve("Account invalid ⛔");
        }
      }, 1500);
    });
  };

  const postRequest = async (email: string) => {
    try {
      setLoading(true);
      const message = await validateAccount(email);
      setResult(message);
      setOpen(true);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return { result, postRequest, open, setOpen, loading };
};
