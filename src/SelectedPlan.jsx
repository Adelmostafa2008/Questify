import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useLocation } from "react-router-dom";
import { FaApplePay } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { FaPaypal } from "react-icons/fa6";
import { SiVodafone } from "react-icons/si";
import { useSnack } from "./SnackBarContext.jsx";
import { useState } from "react";

export default function SelectedPlan() {
  const location = useLocation();
  const Pname = location.state?.planName;
  const Pprice = location.state?.planPrice;
  const Pfeatures = location.state?.features;
  const [paymentMethod, SetPaymentMethod] = useState("Visa");

  const [cool, setCool] = useState(false);
  const { ShowSnackBar } = useSnack();
  const handelSnack = () => {
    setCool(true);
    ShowSnackBar("This service is still under construction", "info");
    setTimeout(() => { setCool(false); }, 5000);
  };

  const PaymentUI = () => {
    switch (paymentMethod) {
      case "Visa":
        return (
          <form
            className="flex flex-col gap-4 mt-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Card Number"
              className="bg-[var(--cardbg)] border border-[#444] rounded-lg p-3 text-[var(--tasktext)] focus:ring-2 focus:ring-[var(--ce7hover)]/50 outline-none"
            />
            <input
              type="text"
              placeholder="Cardholder Name"
              className="bg-[var(--cardbg)] border border-[#444] rounded-lg p-3 text-[var(--tasktext)] focus:ring-2 focus:ring-[var(--ce7hover)]/50 outline-none"
            />
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="MM/YY"
                className="bg-[var(--cardbg)] border border-[#444] rounded-lg p-3 text-[var(--tasktext)] flex-1 focus:ring-2 focus:ring-[var(--ce7hover)]/50 outline-none"
              />
              <input
                type="password"
                placeholder="CVV"
                className="bg-[var(--cardbg)] border border-[#444] rounded-lg p-3 text-[var(--tasktext)] flex-1 focus:ring-2 focus:ring-[var(--ce7hover)]/50 outline-none"
              />
            </div>
            <button
              onClick={() => cool ? null : handelSnack()}

              className="bg-[var(--text)] hover:cursor-pointer hover:bg-[var(--ce7hover)] text-white font-bold py-3 rounded-lg shadow-[0_0_10px_rgba(206,125,99,0.5)] transition-all duration-300"
            >
              Pay Now
            </button>
          </form>
        );

      case "VodafoneCash":
        return (
          <div className="mt-6 p-5 bg-[var(--cardbg)] rounded-lg border border-[#444] shadow-[0_0_15px_rgba(206,125,99,0.2)]">
            <p className="font-semibold mb-2 text-[var(--tasktext)]">Transfer to this number:</p>
            <p className="text-xl text-[var(--text)] font-bold">+20 10 xxxx xxxx</p>
            <p className="text-[var(--subtext)] mt-3 text-sm">
              After sending the money, enter the transaction ID:
            </p>
            <input
              type="text"
              placeholder="Transaction ID"
              className="bg-[var(--cardbg)] border border-[#444] rounded-lg p-3 w-full text-[var(--tasktext)] mt-4 focus:ring-2 focus:ring-[var(--ce7hover)]/50 outline-none"
            />
            <button
              onClick={() => cool ? null : handelSnack()}
              className="bg-[var(--text)] hover:cursor-pointer hover:bg-[var(--ce7hover)] w-[100%] my-3 text-white font-bold py-3 rounded-lg shadow-[0_0_10px_rgba(206,125,99,0.5)] transition-all duration-300"
            >
              Send Now
            </button>
          </div>
        );

      case "PayPal":
        return (
          <div className="mt-6 p-5 bg-[var(--cardbg)] rounded-lg border border-[#444] shadow-[0_0_15px_rgba(206,125,99,0.2)]">
            <p className="mb-4 text-[var(--subtext)]">
              You will be redirected to PayPal to complete your payment.
            </p>
            <button onClick={() => cool ? null : handelSnack()} className="bg-[var(--text)] hover:cursor-pointer hover:bg-[var(--ce7hover)] text-white font-bold py-3 rounded-lg w-full shadow-[0_0_10px_rgba(206,125,99,0.5)] transition-all duration-300">
              Pay with PayPal
            </button>
          </div>
        );

      case "ApplePay":
        return (
          <div className="mt-6 p-5 bg-[var(--cardbg)] rounded-lg border border-[#444] shadow-[0_0_15px_rgba(206,125,99,0.2)]">
            <p className="mb-4 text-[var(--subtext)]">
              Use Apple Pay on your device to complete payment.
            </p>
            <button onClick={() => cool ? null : handelSnack()} className="bg-black hover:cursor-pointer text-white font-bold py-3 rounded-lg w-full flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-transform duration-300">
              <FaApplePay size={30} /> Pay with Apple Pay
            </button>
          </div>
        );

      default:
        return (
          <p className="text-[var(--subtext)] mt-6">
            Please select a payment method to continue.
          </p>
        );
    }
  };

  return (
    <div className="bg-[var(--bg)]">
      <Header />

      <div className="text-white w-[85%] mx-auto my-16 p-10 rounded-2xl bg-[var(--cardbg)] border-2 border-[#333333] shadow-[0_0_40px_rgba(206,125,99,0.18)] relative overflow-hidden flex justify-between gap-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ce7d63]/8 via-transparent to-black/20 pointer-events-none"></div>
        <div className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full bg-[#ce7d63]/15 blur-3xl"></div>

        {/* Plan Preview */}
        <div className="w-[40%] relative z-10 p-8 rounded-2xl bg-[var(--cardbg)] border border-[#333333] shadow-[0_0_20px_rgba(206,125,99,0.15)] flex flex-col items-center text-center">
          <div className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full bg-[#ce7d63]/15 blur-3xl"></div>

          <h2
            className="text-6xl font-extrabold text-[var(--text)] drop-shadow-[0_0_8px_rgba(206,125,99,0.7)] tracking-wider uppercase"
            style={{ fontFamily: "'Pricedown', sans-serif" }}
          >
            {Pname} Plan
          </h2>
          <h3 className="mt-4 font-bold text-3xl text-[var(--tasktext)]">
            ${Pprice}.00 / Month
          </h3>
          <div className="flex items-center justify-center w-full my-6">
            <div className="flex-grow border-t border-gray-700"></div>
            <span className="px-3 text-sm font-semibold text-[var(--subtext)] uppercase">
              Features
            </span>
            <div className="flex-grow border-t border-gray-700"></div>
          </div>
          <ul className="flex flex-col gap-3 mx-auto pb-5 text-[var(--subtext)] text-lg">
            {Pfeatures?.length > 0 ? (
              Pfeatures.map((x, i) => (
                <li key={i} className="flex items-start gap-2">
                  <svg
                    className="mt-1 text-[var(--text)]/90"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                  </svg>
                  {x}
                </li>
              ))
            ) : (
              <li className="text-[var(--subtext)]">No features listed</li>
            )}
          </ul>
        </div>

        {/* Payment Section */}
        <div className="flex flex-col w-[40%] relative z-10">
          <h2 className="mx-auto mb-6 text-2xl text-[var(--tasktext)] font-bold tracking-wide">
            Select a Payment Method
          </h2>
          <div className="flex gap-x-5 items-stretch mb-6">
            {["Visa", "ApplePay", "PayPal", "VodafoneCash"].map(method => (
              <button
                key={method}
                onClick={() => SetPaymentMethod(method)}
                className={`border rounded-lg hover:cursor-pointer px-6 w-1/4 py-3 flex justify-center items-center transition-all duration-300 ${paymentMethod === method
                  ? "bg-[var(--text)] border-[var(--text)] shadow-[0_0_8px_#ce7d63]"
                  : "border-[#333333] hover:bg-[#ce7d630d] hover:border-[#ce7d63]"
                  }`}
              >
                {method === "Visa" && <RiVisaLine size={50} className={`${paymentMethod === "Visa" ? "text-white":"text-[var(--text)]"}`}/>}
                {method === "ApplePay" && <FaApplePay size={50} className={`${paymentMethod === "ApplePay" ? "text-white":"text-[var(--text)]"}`}/>}
                {method === "PayPal" && <FaPaypal size={40} className={`${paymentMethod === "PayPal" ? "text-white":"text-[var(--text)]"}`}/>}
                {method === "VodafoneCash" && <SiVodafone size={40} className={`${paymentMethod === "VodafoneCash" ? "text-white":"text-[var(--text)]"}`}/>}
              </button>
            ))}
          </div>


          {PaymentUI()}

        </div>
      </div>

      <Footer />
    </div>
  );
}
