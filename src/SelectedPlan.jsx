import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useLocation } from "react-router-dom";
import { FaApplePay } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { FaPaypal } from "react-icons/fa6";
import { SiVodafone } from "react-icons/si";
import { useState } from "react";

export default function SelectedPlan() {
    const location = useLocation();
    const Pname = location.state?.planName;
    const Pprice = location.state?.planPrice;
    const Pfeatures = location.state?.features;
    const [paymentMethod, SetPaymentMethod] = useState("Visa");

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
                            className="bg-[#2a2a2a] border border-[#444] rounded-lg p-3 text-white focus:ring-2 focus:ring-[#ce7d63]/50 outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Cardholder Name"
                            className="bg-[#2a2a2a] border border-[#444] rounded-lg p-3 text-white focus:ring-2 focus:ring-[#ce7d63]/50 outline-none"
                        />
                        <div className="flex gap-3">
                            <input
                                type="text"
                                placeholder="MM/YY"
                                className="bg-[#2a2a2a] border border-[#444] rounded-lg p-3 text-white flex-1 focus:ring-2 focus:ring-[#ce7d63]/50 outline-none"
                            />
                            <input
                                type="password"
                                placeholder="CVV"
                                className="bg-[#2a2a2a] border border-[#444] rounded-lg p-3 text-white flex-1 focus:ring-2 focus:ring-[#ce7d63]/50 outline-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-[#ce7d63] hover:bg-[#b96b53] text-white font-bold py-3 rounded-lg shadow-[0_0_10px_rgba(206,125,99,0.5)] transition-all duration-300"
                        >
                            Pay Now
                        </button>
                    </form>
                );

            case "VodafoneCash":
                return (
                    <div className="mt-6 p-5 bg-[#2a2a2a] rounded-lg border border-[#444] shadow-[0_0_15px_rgba(206,125,99,0.2)]">
                        <p className="font-semibold mb-2">Transfer to this number:</p>
                        <p className="text-xl text-[#ce7d63] font-bold">+20 10 xxxx xxxx</p>
                        <p className="text-gray-400 mt-3 text-sm">
                            After sending the money, enter the transaction ID:
                        </p>
                        <input
                            type="text"
                            placeholder="Transaction ID"
                            className="bg-[#1f1f1f] border border-[#444] rounded-lg p-3 w-full text-white mt-4 focus:ring-2 focus:ring-[#ce7d63]/50 outline-none"
                        />
                    </div>
                );

            case "PayPal":
                return (
                    <div className="mt-6 p-5 bg-[#2a2a2a] rounded-lg border border-[#444] shadow-[0_0_15px_rgba(206,125,99,0.2)]">
                        <p className="mb-4 text-gray-300">
                            You will be redirected to PayPal to complete your payment.
                        </p>
                        <button className="bg-[#ce7d63] hover:bg-[#b96b53] text-white font-bold py-3 rounded-lg w-full shadow-[0_0_10px_rgba(206,125,99,0.5)] transition-all duration-300">
                            Pay with PayPal
                        </button>
                    </div>
                );

            case "ApplePay":
                return (
                    <div className="mt-6 p-5 bg-[#2a2a2a] rounded-lg border border-[#444] shadow-[0_0_15px_rgba(206,125,99,0.2)]">
                        <p className="mb-4 text-gray-300">
                            Use Apple Pay on your device to complete payment.
                        </p>
                        <button className="bg-black text-white font-bold py-3 rounded-lg w-full flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-transform duration-300">
                            <FaApplePay size={30} /> Pay with Apple Pay
                        </button>
                    </div>
                );

            default:
                return (
                    <p className="text-gray-500 mt-6">
                        Please select a payment method to continue.
                    </p>
                );
        }
    };

    return (
        <>
            <Header />

            <div className="text-white w-[85%] mx-auto my-16 p-10 rounded-2xl bg-[#1f1f1f] border-2 border-[#333333] shadow-[0_0_50px_rgba(206,125,99,0.25)] relative overflow-hidden flex justify-between gap-10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ce7d63]/10 via-transparent to-black/40 pointer-events-none"></div>
                <div className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full bg-[#ce7d63]/20 blur-3xl"></div>

                <div className="w-[40%] relative z-10 p-8 rounded-2xl bg-gradient-to-b from-[#2b2b2b] to-[#1f1f1f] border border-[#333333] shadow-[0_0_25px_rgba(206,125,99,0.2)] flex flex-col items-center text-center">
                    <h2
                        className="text-6xl font-extrabold text-[#ce7d63] drop-shadow-[0_0_10px_rgba(206,125,99,0.8)] tracking-wider uppercase"
                        style={{ fontFamily: "'Pricedown', sans-serif" }}
                    >
                        {Pname} Plan
                    </h2>
                    <h3 className="mt-4 font-bold text-3xl text-white">
                        ${Pprice}.00 / Month
                    </h3>
                    <div className="flex items-center justify-center w-full my-6">
                        <div className="flex-grow border-t border-gray-700"></div>
                        <span className="px-3 text-sm font-semibold text-gray-400 uppercase">
                            Features
                        </span>
                        <div className="flex-grow border-t border-gray-700"></div>
                    </div>
                    <ul className="flex flex-col gap-3 mx-auto pb-5 text-gray-300 text-lg">
                        {Pfeatures?.length > 0 ? (
                            Pfeatures.map((x, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <svg
                                        className="mt-1 text-[#ce7d63]"
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
                            <li className="text-gray-500">No features listed</li>
                        )}
                    </ul>
                </div>

                <div className="flex flex-col w-[40%] relative z-10">
                    <h2 className="mx-auto mb-6 text-2xl font-bold tracking-wide">
                        Select a Payment Method
                    </h2>
                    <div className="flex gap-x-5 items-stretch mb-6">
                        <button
                            onClick={() => SetPaymentMethod("Visa")}
                            className={`border rounded-lg w-1/4 px-6 py-3 flex justify-center items-center transition-all duration-300 ${
                                paymentMethod === "Visa"
                                    ? "bg-[#ce7d631a] border-[#ce7d63] shadow-[0_0_10px_#ce7d63]"
                                    : "border-[#333333] hover:bg-[#ce7d6312] hover:border-[#ce7d63]"
                            }`}
                        >
                            <RiVisaLine size={50} />
                        </button>
                        <button
                            onClick={() => SetPaymentMethod("ApplePay")}
                            className={`border rounded-lg px-6 w-1/4 py-3 flex justify-center items-center transition-all duration-300 ${
                                paymentMethod === "ApplePay"
                                    ? "bg-[#ce7d631a] border-[#ce7d63] shadow-[0_0_10px_#ce7d63]"
                                    : "border-[#333333] hover:bg-[#ce7d6312] hover:border-[#ce7d63]"
                            }`}
                        >
                            <FaApplePay size={50} />
                        </button>
                        <button
                            onClick={() => SetPaymentMethod("PayPal")}
                            className={`border rounded-lg px-6 w-1/4 py-3 flex justify-center items-center transition-all duration-300 ${
                                paymentMethod === "PayPal"
                                    ? "bg-[#ce7d631a] border-[#ce7d63] shadow-[0_0_10px_#ce7d63]"
                                    : "border-[#333333] hover:bg-[#ce7d6312] hover:border-[#ce7d63]"
                            }`}
                        >
                            <FaPaypal size={40} />
                        </button>
                        <button
                            onClick={() => SetPaymentMethod("VodafoneCash")}
                            className={`border rounded-lg px-6 w-1/4 flex justify-center items-center py-3 transition-all duration-300 ${
                                paymentMethod === "VodafoneCash"
                                    ? "bg-[#ce7d631a] border-[#ce7d63] shadow-[0_0_10px_#ce7d63]"
                                    : "border-[#333333] hover:bg-[#ce7d6312] hover:border-[#ce7d63]"
                            }`}
                        >
                            <SiVodafone size={40} />
                        </button>
                    </div>
                    {PaymentUI()}
                </div>
            </div>

            <Footer />
        </>
    );
}
