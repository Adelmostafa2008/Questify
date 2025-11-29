import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { ThemeContext } from "./ThemeContext.jsx"
import { useContext } from "react";
export default function Sittings(props) {
    const { theme, toggletheme } = useContext(ThemeContext);
    return (
        <div className="bg-[var(--bg)]">
            <Header />

            <div className={`bg-[var(--taskpreveiw)] rounded-md p-10 flex justify-between items-center mx-auto w-[80%] mt-20 mb-52`}>
                <h3 className=" text-xl font-semibold text-[var(--tasktext)]">Light mode</h3>
                <select value={theme} onChange={(e) => toggletheme(e.target.value)} className="bg-[var(--cardbg)] w-[20%] p-2 rounded-md border border-[var(--text)] text-[var(--tasktext)]">
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                </select>
            </div>

            <Footer />
        </div>
    );
}