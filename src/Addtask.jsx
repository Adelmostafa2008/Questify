import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { BatteryFull, BatteryLow, BatteryMedium, Plus } from "lucide-react"
import { FaCircleInfo, FaLightbulb, FaEye, FaClock, FaStar } from "react-icons/fa6";
import { TbCirclePlusFilled } from "react-icons/tb"
import { IoMdSettings } from "react-icons/io";
import Card from "./Card.jsx"
export default function Addtask(props){
    const navigate = useNavigate();
    const [cards, setCards] = useState([]);
    const [taskTitle , SetTaskTitle] = useState("");
    const [category , SetCategory] = useState("");
    const [difficulty , SetDifficulty] = useState("Easy");
    const [taskDescription , SetTaskDescription] = useState("");
    const [time , SetTime] = useState("");
    const [points , SetPoints] = useState("");

    function addsncard() {
        const newCards = [...cards, {id: cards.length + 1, title:"", description:""}];
        setCards(newCards);
    }
    function removeCard(idToRemove) {
        let filtered = cards.filter(card => card.id !== idToRemove);
        const reIndexed = filtered.map((card, index) => ({
            ...card,
            id: index + 1,
        }));
        setCards(reIndexed);
    }
    function updateCard(id, field, value) {
        setCards(cards.map(card => card.id === id ? {...card, [field]: value} : card));
    }

    return(
        <>
        <Header/>
        {/*all comments in the code are made by me and only me , so hussain i didnot use AI*/}
        <div className="flex justify-center gap-10 items-baseline">
            
        <div className="flex bg-[#1f1f1f] flex-col w-[35%] rounded-lg my-10 px-7">
            {/*Create task header*/}
            <div className="bg-[#1f1f1f] rounded-t-lg py-5 border-b-[1px] border-[#333333]">
                <h2 className="flex text-white text-xl font-semibold gap-x-2 "> <TbCirclePlusFilled size={25} color="#ce7d63"/> Create New Task</h2>
            </div>
            {/*basic info part*/}
            <h2 className="flex text-white font-semibold gap-x-2  py-3 w-[100%]"><FaCircleInfo size={17} color="#ce7d63" className="mt-[2.5px]"/> Basic Information</h2>

            <div className="flex  text-white justify-center gap-[3%]">

                <div className="flex flex-col w-[50%]">
                    <label className="text-[#b3b3b2] text-sm mb-2 mt-2">Task Title</label>
                    <input type="text" onChange={(e) => SetTaskTitle(e.target.value)} placeholder="Enter task title..." className="w-[100%] px-4.5 py-2 border-[1px] border-[#333333] rounded-sm focus:outline-0 focus:border-[#ce7d63]"/>
                </div>

                <div className="flex flex-col w-[50%]">
                    <label className="text-[#b3b3b2] text-sm mb-2 mt-2">Category</label>
                    <select onChange={(e) => SetCategory(e.target.value)} className="w-[100%] bg-[#1f1f1f] px-4.5 py-2.5 border-[1px] border-[#333333] rounded-sm focus:outline-0 focus:border-[#ce7d63]">
                        <option value="">Select a category</option>
                        <option value="call-center">Call Center</option>
                        <option value="marketing">Marketing</option>
                        <option value="data-analysis">Data Analysis</option>
                        <option value="project-management">Project Management</option>
                        <option value="software-development">Software Development</option>
                        <option value="design">Design</option>
                    </select>
                </div>

            </div>
            {/*Difficulty part*/}
            <div className="py-5">
                <div className=" pt-3">
                    <h2 className="text-[#b3b3b2] text-sm mb-2 mt-2">Difficulty Level</h2>
                </div>
                <div className="flex text-white gap-x-[3.333%]">
                    <button onClick={() => SetDifficulty("Easy")} className={`w-[31.025%] py-3 flex flex-col items-center justify-center border-[1px] rounded-sm ${difficulty === "Easy" ? "bg-[#3ebf8f1a] border-[#3ebf8f]" : "border-[#333333] hover:bg-[#ce7d631a] hover:border-[#ce7d63]"}`}><BatteryLow size={20} color="green" /> Easy</button>
                    <button onClick={() => SetDifficulty("Medium")} className={`w-[31.025%] py-3 flex flex-col items-center justify-center border-[1px] rounded-sm ${difficulty === "Medium" ? "bg-[#fabb181a] border-[#fabb18]" : "border-[#333333] hover:bg-[#ce7d631a] hover:border-[#ce7d63]"}`}><BatteryMedium size={20} color="yellow" /> Medium</button>
                    <button onClick={() => SetDifficulty("Hard")} className={`w-[31.025%] py-3 flex flex-col items-center justify-center border-[1px] rounded-sm ${difficulty === "Hard" ? "bg-[#d820421a] border-[#d82042]" : "border-[#333333] hover:bg-[#ce7d631a] hover:border-[#ce7d63]"}`}><BatteryFull size={20} color="red" /> Hard</button>
                </div>

            </div>

            {/*task description part*/}
            <div className=" w-[100%] flex flex-col  pb-5">
                <h2 className="text-[#b3b3b2] text-sm mb-2 mt-2">Task Description</h2>
                <textarea onChange={(e) => SetTaskDescription(e.target.value)} placeholder="Enter detailed task description..." className="text-white bg-[#1f1f1f] px-4.5 py-2.5 border-[1px] border-[#333333] rounded-sm focus:outline-0 focus:border-[#ce7d63] max-h-36 min-h-36"/>
            </div>
            {/*Scenarios*/}
            <div className="flex flex-col mb-8">
                <div className="flex justify-between items-center">
                    <h2 className="flex text-white font-semibold gap-x-2 py-3 w-[100%]"><FaLightbulb size={17} color="#ce7d63" className="mt-[2px] "/>Scenarios</h2>
                    <label className={`${cards.length < 5 ? "text-[#b3b3b2]" : "text-red-600"} text-sm mb-2 mt-2 min-w-max`}>{cards.length} / 5</label>
                </div>
                <div>
                    <h2 className="text-[#b3b3b2] mb-2 mt-1">Add realistic scenarios for users to solve. Each scenario should present a unique challenge.</h2>
                </div>
                <div>
                    {cards.length > 0 ? cards.map(({id, title, description}) => (
                        <Card
                            key={id}
                            snNum={id}
                            cat="createTask"
                            onRemove={() => removeCard(id)}
                            newT={(e) => updateCard(id, "title", e.target.value)}
                            newD={(e) => updateCard(id, "description", e.target.value)}
                            title={title}
                            description={description}
                        />
                    )) : 
                    <div className={`flex gap-x-1 mt-1 py-10 w-full border border-dashed  text-[#ce7d63] border-[#ce7d63] bg-[#ce7d631a] justify-center rounded-sm text-sm  `} onClick={() => {cards.length < 5 ? addsncard() : null}}>
                        <Plus size={15} color={`${cards.length < 5 ? "#ce7d63" : "#b3b3b2"}`} className="mt-[1.5px]"/>
                        No scenarios added yet ,click me to add a scenario
                    </div>}
                </div>
                {cards.length <= 0 ? null :  
                    <button className={`flex gap-x-1 mt-1 py-2 w-full border border-dashed ${cards.length < 5 ? "text-[#ce7d63] border-[#ce7d63] bg-[#ce7d631a]" : "text-[#b3b3b2] border-[#707070] bg-[#333333]"} justify-center rounded-sm text-sm  `}  onClick={() => {cards.length < 5 ? addsncard() : null}}>
                        <Plus size={15} color={`${cards.length < 5 ? "#ce7d63" : "#b3b3b2"}`} className="mt-[1.5px]"/>
                        Add Another Scenario
                    </button>}
            </div>

            {/*Additional settings*/}
            <h2 className="flex text-white font-semibold gap-x-2 py-3 w-[100%]"><IoMdSettings size={20} color="#ce7d63"/> Additional Settings</h2>

            <div className="flex text-white justify-around pb-10 gap-[3%]">

                <div className="flex flex-col w-[50%]">
                    <label className="text-[#b3b3b2] text-sm mb-2 mt-2">Estimated Time (minutes)</label>
                    <input type="number" placeholder="e.g., 30" onChange={(e) => SetTime(e.target.value)} max={120} min={30} className="px-4.5 py-2 border-[1px] border-[#333333] rounded-sm focus:outline-0 focus:border-[#ce7d63]"/>
                </div>
                    
                <div className="flex flex-col w-[50%]">
                    <label className="text-[#b3b3b2] text-sm mb-2 mt-2">Maximum Points</label>
                    <input type="number" onChange={(e) => SetPoints(e.target.value)} placeholder="e.g., 100" max={200} min={20} className="px-4.5 py-2 border-[1px] border-[#333333] rounded-sm focus:outline-0 focus:border-[#ce7d63]"/>
                </div>

            </div>
            {/*Buttons*/}
            <div className="flex justify-end pb-10 gap-3">
                <button className="text-white border-[1px] border-[#333333] px-4 py-2 text-sm rounded-sm" onClick={() => navigate('/Home')}>Cancel</button>
                <button className="text-white border-[1px] border-[#ce7d63] bg-[#ce7d63] px-4 py-2 text-sm rounded-sm" onClick={() => navigate('/Home')}>Create task</button>
            </div>
        </div>


        <div className="flex bg-[#1f1f1f] flex-col w-[35%] rounded-lg my-10 px-7">
        <div className="bg-[#1f1f1f] rounded-t-lg py-5 border-b-[1px] border-[#333333]">
            {/*Page title*/}
        <h2 className="flex text-white text-xl font-semibold gap-x-2 "> <FaEye size={25} color="#ce7d63"/> Task Preview</h2>
        </div>
            {/*big black co.. ,i mean div*/}
        <div className="bg-[#1a1a1a] py-3 px-7 mb-10 mt-20 rounded-md">
            <div className="flex flex-col">
                {/*div's header*/}
            <div className="w-[95%] break-words mx-auto my-3">
                <h2 className="text-white text-2xl font-bold text-center">{taskTitle == "" ? <span className="text-[#464646]">Ex. suck a nigga dick</span> : taskTitle}</h2>
            </div>
            {/*task name and category container*/}
            <div className="flex justify-center gap-x-2 mt-1">
                <div className="bg-[#ce7d631a] text-[#ce7d63] px-3 rounded-xl">
                    {category == "" ? <span>Ex. Call center</span> : category}
                </div>
                <div className="bg-[#ce7d631a] text-[#ce7d63] px-3 rounded-xl">
                    {difficulty}
                </div>
            </div>
                {/*estimated time and points container*/}
                <div className="flex gap-x-5 my-10 ">
                    <label className="text-[#b3b3b2] text-sm mb-2 mt-2 flex min-w-max items-center gap-x-2"><FaClock size={40} fill="#333333"/>{time == "" ? "Ex. 60" : time} Minute(s)</label>
                    <label className="text-[#b3b3b2] text-sm mb-2 mt-2 flex min-w-max items-center gap-x-2"><FaStar size={40} fill="#333333"/>{points == "" ? "Ex. 100" : points}  Points(s)</label>
                </div>

                {/*task description*/}
                <div className="text-[#81807e] text-lg text-center w-[95%] mx-auto mb-4 break-words">
                    {taskDescription == "" ? "Ex. i once saw a black magician , he was fantastic he made things disappear i really liked him until i found out that my wallet disappeared too.": taskDescription}
                </div>
                {/*scenarios preview*/}
                <div>
                    {
                        cards.length > 0 ? cards.map(({id, title, description}) =>
                          <Card
                            cat="taskPreview"
                            key={id}
                            TPT={title}
                            TPD={description}
                          />
                        ) : null
                    }
                </div>
            </div>
        </div>

           
        </div>
        </div>

        <Footer/>
        </>
    );
}
