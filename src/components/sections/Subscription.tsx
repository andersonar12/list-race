"use client";
import { useCreateAccount } from "@/hooks/useCreateAccount";
import { useState } from "react";
import { Alert } from "../Alert";
import { Spinner } from "../Spinner";
export const Subscription = () => {
  const [email, setEmail] = useState("");
  const { result, postRequest, open, setOpen, loading } = useCreateAccount();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postRequest(email);
  };

  return (
    <>
      {/* <!--subscription strat --> */}
      <section id="contact" className="subscription">
        <div className="container">
          <div className="subscribe-title text-center">
            <h2>do you want to add your business listing with us?</h2>
            <p>
              Listrace offer you to list your business with us and we very much able to promote your
              Business.
            </p>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="subscription-input-group">
                <form onSubmit={handleSubmit} action="#">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="subscription-input-form"
                    placeholder="Enter your email here"
                  />
                  <button disabled={loading} type="submit" className="appsLand-btn subscribe-btn">
                    {loading && <Spinner pixel={40} />} create account
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--/subscription-->	 */}
      {/* <!--subscription end --> */}
      <Alert result={result} open={open} setOpen={setOpen} />
    </>
  );
};
