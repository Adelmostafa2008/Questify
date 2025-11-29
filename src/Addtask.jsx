import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { BatteryFull, BatteryLow, BatteryMedium, Plus } from "lucide-react"
import { FaCircleInfo, FaLightbulb, FaEye, FaClock, FaStar } from "react-icons/fa6";
import { TbCirclePlusFilled } from "react-icons/tb"
import { IoMdSettings } from "react-icons/io";
import Card from "./Card.jsx"
import api from "./AxiosHelper.jsx";
import { useSnack } from "./SnackBarContext.jsx"
import SnackBar from "./SnackBar.jsx"

export default function Addtask(props){
    const {ShowSnackBar} = useSnack();
    const navigate = useNavigate();
    const [cards, setCards] = useState([]);
    const [idCounter, setIdCounter] = useState(0);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const [task , SetTask] = useState({
        taskname : "",
        taskcategory : "",
        taskdescription : "",
        taskdefficulty : "Easy", 
        scene : [{
            scenariotitle : "",
            scenariodescription : "",
        }],
        tasktime : "",
        taskpoints : "",
    });

    function addsncard() {
    const newCard = { id: idCounter, title: "", description: "" };

    setCards(prev => [...prev, newCard]);
    setIdCounter(prev => prev + 1);

    SetTask(prevTask => ({
        ...prevTask,
        scene: [...prevTask.scene, { scenariotitle: "", scenariodescription: "" }]
    }));
    }

    function removeCard(idToRemove) {
    const filtered = cards.filter(card => card.id !== idToRemove);
    setCards(filtered);

    SetTask(prevTask => ({
        ...prevTask,
        scene: filtered.map(card => ({
        scenariotitle: card.title,
        scenariodescription: card.description
        }))
    }));
    }

    function updateCard(id, field, value) {
    const updatedCards = cards.map(card =>
        card.id === id ? { ...card, [field]: value } : card
    );

    setCards(updatedCards);

    SetTask(prevTask => ({
        ...prevTask,
        scene: updatedCards.map(card => ({
        scenariotitle: card.title,
        scenariodescription: card.description
        }))
    }));
    }

    const CreateTask = async () => {
        try{
            await api.post("/tasks" , task);

        }catch(err){
            ShowSnackBar("One or more validation errors occurred" , "error");
            console.log(err);
            throw err;
        }
    }

    return(
        <div className="bg-[var(--bg)]">
        <Header/>
        {/*all comments in the code are made by me and only me , so hussain i didnot use AI*/}
        <div className="flex justify-center gap-10 items-start my-10">

        {/* Left Panel: Create Task */}
        <div className="w-[35%] rounded-2xl bg-[var(--cardbg)] border-2 border-[#333333] shadow-[0_0_40px_rgba(206,125,99,0.25)] relative overflow-hidden px-7">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ce7d63]/10 via-transparent to-black/20 pointer-events-none"></div>
            <div className="absolute -top-10 -left-10 w-[200px] h-[200px] rounded-full bg-[#ce7d63]/20 blur-3xl"></div>

            <div className="relative z-10">
                {/*Create task header*/}
                <div className="py-5 border-b-[1px] border-[#333333]">
                    <h2 className="flex text-[var(--tasktext)] text-xl font-semibold gap-x-2 uppercase tracking-[0.05em]">
                        <TbCirclePlusFilled size={25} className="text-[var(--text)]"/> Create New Task
                    </h2>
                </div>

                {/*Basic Information*/}
                <h2 className="flex text-[var(--tasktext)] font-semibold gap-x-2 py-3 mt-2"><FaCircleInfo size={17} className="text-[var(--text)]"/> Basic Information</h2>

                <div className="flex text-[var(--tasktext)] justify-center gap-[3%] ">
                    <div className="flex flex-col w-[50%]">
                        <label className="text-[var(--subtext)] text-sm mb-2 mt-2">Task Title</label>
                        <input type="text" onChange={(e) => SetTask(prevtask => ({...prevtask , taskname : e.target.value}))} placeholder="Enter task title..." className="w-full px-4 py-2 bg-transparent border border-[#333333] rounded-md focus:outline-0 focus:border-[var(--text)] focus:shadow-[0_0_4px_#ce7d63aa]"/>
                    </div>
                    <div className="flex flex-col w-[50%]">
                        <label className="text-[var(--subtext)] text-sm mb-2 mt-2">Category</label>
                        <select onChange={(e) => SetTask(prevtask => ({...prevtask , taskcategory : e.target.value}))} className="cursor-pointer w-full bg-[var(--cardbg)] px-4 py-2.5 border border-[#333333] rounded-md focus:outline-0 focus:border-[var(--text)] focus:shadow-[0_0_4px_#ce7d63aa]">
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

                {/*Difficulty*/}
                <div className="py-5">
                    <h2 className="text-[var(--subtext)] text-sm mb-2 mt-2">Difficulty Level</h2>
                    <div className="flex text-[var(--tasktext)] gap-x-[3.333%] ">
                        <button onClick={() => SetTask(prevtask => ({...prevtask,taskdefficulty : "Easy"}))} className={`cursor-pointer w-[31.025%] py-3 flex flex-col items-center justify-center border rounded-md ${task.taskdefficulty === "Easy" ? "bg-[#3ebf8f1a] border-[#3ebf8f] shadow-[0_0_4px_#3ebf8f88]" : "border-[#333333] hover:bg-[#ce7d6312] hover:border-[#ce7d63]"}`}><BatteryLow size={20} color="green" /> Easy</button>
                        <button onClick={() => SetTask(prevtask => ({...prevtask,taskdefficulty : "Medium"}))} className={`w-[31.025%] cursor-pointer py-3 flex flex-col items-center justify-center border rounded-md ${task.taskdefficulty === "Medium" ? "bg-[#fabb181a] border-[#fabb18] shadow-[0_0_4px_#fabb1888]" : "border-[#333333] hover:bg-[#ce7d6312] hover:border-[#ce7d63]"}`}><BatteryMedium size={20} className="text-yellow-400" /> Medium</button>
                        <button onClick={() => SetTask(prevtask => ({...prevtask,taskdefficulty : "Hard"}))} className={`w-[31.025%] py-3 flex flex-col cursor-pointer items-center justify-center border rounded-md ${task.taskdefficulty === "Hard" ? "bg-[#d820421a] border-[#d82042] shadow-[0_0_4px_#d8204288]" : "border-[#333333] hover:bg-[#ce7d6312] hover:border-[#ce7d63]"}`}><BatteryFull size={20} color="red" /> Hard</button>
                    </div>
                </div> 

                {/*Task Description*/}
                <div className="w-full flex flex-col pb-5">
                    <h2 className="text-[var(--subtext)] text-sm mb-2 mt-2">Task Description</h2>
                    <textarea onChange={(e) => SetTask(prevtask => ({...prevtask , taskdescription : e.target.value}))} placeholder="Enter detailed task description..." className="text-[var(--tasktext)] bg-transparent px-4 py-2 border border-[#333333] rounded-md focus:outline-0 focus:border-[#ce7d63] focus:shadow-[0_0_4px_#ce7d63aa] max-h-36 min-h-36"/>
                </div>

                {/*Scenarios*/}
                <div className="flex flex-col mb-8">
                    <div className="flex justify-between items-center">
                        <h2 className="flex text-[var(--tasktext)] font-semibold gap-x-2 py-3"><FaLightbulb size={17} className="text-[var(--text)]"/> Scenarios</h2>
                        <label className={`${cards.length < 5 ? "text-[var(--subtext)]" : "text-red-600"} text-sm`}>{cards.length} / 5</label>
                    </div>
                    <h2 className="text-[var(--subtext)] mb-2 mt-1">Add realistic scenarios for users to solve. Each scenario should present a unique challenge.</h2>

                    {cards.length > 0 ? cards.map(({id, title, description} , index) => (
                        <Card
                            key={id}
                            snNum={index + 1}
                            cat="createTask"
                            onRemove={() => removeCard(id)}
                            newT={(e) => updateCard(id, "title", e.target.value)}
                            newD={(e) => updateCard(id, "description", e.target.value)}
                            title={title}
                            description={description}
                        />
                    )) : 
                    <div className={`flex gap-x-1 mt-1 py-10 w-full border border-dashed text-[var(--text)] border-[var(--text)] bg-transparent justify-center rounded-md text-sm cursor-pointer`} onClick={() => {cards.length < 5 ? addsncard() : null}}>
                        <Plus size={15} color={cards.length < 5 ? "var(--text)" : "#b3b3b2"}/>
                        No scenarios added yet, click to add a scenario
                    </div>}
                    
                    {cards.length > 0 && 
                        <button className={`flex gap-x-1 mt-2 py-2 w-full border border-dashed ${cards.length < 5 ? "text-[var(--text)] border-[var(--text)] bg-transparent hover:cursor-pointer" : "text-[#b3b3b2] border-[#707070] bg-[var(--buttonbg)] hover:cursor-not-allowed"}  justify-center rounded-md text-sm`} onClick={() => {cards.length < 5 ? addsncard() : null}}>
                            <Plus size={15} color={cards.length < 5 ? "var(--text)" : "#b3b3b2"}/>
                            Add Another Scenario
                        </button>}
                </div>

                {/*Additional settings*/}
                <h2 className="flex text-[var(--tasktext)] font-semibold gap-x-2 py-3"><IoMdSettings size={20} className="text-[var(--text)]"/> Additional Settings</h2>

                <div className="flex text-white justify-around pb-10 gap-[3%]">
                    <div className="flex flex-col w-[50%]">
                        <label className="text-[var(--subtext)] text-sm mb-2 mt-2">Estimated Time (minutes)</label>
                        <input type="number" placeholder="e.g., 30" onChange={(e) => SetTask(prevtask => ({...prevtask , tasktime : parseInt(e.target.value , 10)}))} max={120} min={30} className="text-[var(--tasktext)] px-4 py-2 bg-transparent border border-[#333333] rounded-md focus:outline-0 focus:border-[var(--text)] focus:shadow-[0_0_4px_#ce7d63aa]"/>
                    </div>
                    <div className="flex flex-col w-[50%]">
                        <label className="text-[var(--subtext)] text-sm mb-2 mt-2">Maximum Points</label>
                        <input type="number" onChange={(e) => SetTask(prevtask => ({...prevtask ,taskpoints : parseInt(e.target.value , 10)}))} placeholder="e.g., 100" max={200} min={20} className="text-[var(--tasktext)] px-4 py-2 bg-transparent border border-[#333333] rounded-md focus:outline-0 focus:border-[var(--text)] focus:shadow-[0_0_4px_#ce7d63aa]"/>
                    </div>
                </div>

                {/*Buttons*/}
                <div className="flex justify-end pb-10 gap-3">
    <button
        className="text-[var(--tasktext)] border border-[#333333] px-4 py-2 text-sm rounded-md hover:border-gray-400 hover:text-[var(--subtext)]
                        hover:shadow-md hover:shadow-gray-400/40 
                        transition duration-200"
        onClick={() => navigate('/Home')}
    >
        Cancel
    </button>

    <button
        onClick={async () => {
            if (loading || success) return; 
            if(!task.taskcategory.trim() || !task.taskdefficulty.trim() || !task.taskdescription.trim() || !task.taskname.trim() || isNaN(task.taskpoints) || isNaN(task.tasktime) ){
                ShowSnackBar("All fields should be filled" , "warn");
                console.log(task.taskpoints);
                return;
            }
            if(cards.length == 0){
                ShowSnackBar("You must atleast add one scenario" , "warn");
                return;
            }
            setLoading(true);
            try {
                await CreateTask(); 
                setSuccess(true);
                setTimeout(() => navigate('/Home'), 1000); // Redirect after 1.5s
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }}
        disabled={loading || success}
        className={`flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-md font-medium transition-colors duration-300
        ${success
            ? "bg-green-600 text-white shadow-[0_0_4px_#16A34A] "
            : "bg-[var(--text)] border border-[var(--text)] text-white shadow-[0_0_4px_#ce7d63aa]"
        }`}
    >
        {loading ? (
            <>
                <svg
                    className="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
                    />
                </svg>
                Creating...
            </>
        ) : success ? (
            "Done!"
        ) : (
            "Create task"
        )}
    </button>
</div>

            </div>
        </div>

        {/* Right Panel: Task Preview */}
        <div className="w-[35%] rounded-2xl bg-[var(--cardbg)] border-2 border-[#333333] shadow-[0_0_40px_rgba(206,125,99,0.25)] relative overflow-hidden px-7">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ce7d63]/10 via-transparent to-black/20 pointer-events-none"></div>
            <div className="absolute -bottom-10 -right-10 w-[200px] h-[200px] rounded-full bg-[#ce7d63]/20 blur-3xl"></div>

            <div className="relative z-10">
                <div className="py-5 border-b-[1px] border-[#333333]">
                    {/*Page title*/}
                    <h2 className="flex text-[var(--tasktext)] text-xl font-semibold gap-x-2 uppercase tracking-[0.05em]">
                        <FaEye size={25} className="text-[var(--text)]"/> Task Preview
                    </h2>
                </div>
                <div className="bg-[var(--taskpreveiw)] py-3 px-7 mb-10 mt-20 rounded-md">
                    <div className="flex flex-col">
                        {/*Task name*/}
                        <div className="w-[95%] break-words mx-auto my-3">
                            <h2 className="text-[var(--tasktext)] text-2xl font-bold text-center">
                                {task.taskname === "" ? <span >Ex. Task Name</span> : task.taskname}
                            </h2>
                        </div>
                        <div className="flex justify-center gap-x-2 mt-1">
                            <div className="bg-[#ce7d631a] text-[var(--text)] px-3 rounded-xl">
                                {task.taskcategory === "" ? <span>Ex. Call center</span> : task.taskcategory}
                            </div>
                            <div className="bg-[#ce7d631a] text-[var(--text)] px-3 rounded-xl">
                                {task.taskdefficulty}
                            </div>
                        </div>
                        <div className="flex gap-x-5 my-10">
                            <label className="text-[var(--subtext)] text-sm flex min-w-max items-center gap-x-2"><FaClock size={40} fill="var(--text)"/>{task.tasktime === "" ? "Ex. 60" : task.tasktime } Minute(s)</label>
                            <label className="text-[var(--subtext)] text-sm flex min-w-max items-center gap-x-2"><FaStar size={40} fill="var(--text)"/>{task.taskpoints === "" ? "Ex. 100" : task.taskpoints} Points(s)</label>
                        </div>
                        <div className="text-[var(--subtext)] text-lg text-center w-[95%] mx-auto mb-4 break-words">
                            {task.taskdescription === "" ? "Ex. Task Description goes here." : task.taskdescription}
                        </div>
                        <div>
                            {cards.length > 0 && cards.map(({id, title, description}) =>
                                <Card
                                    cat="taskPreview"
                                    key={id}
                                    TPT={title}
                                    TPD={description}
                                />
                            )}
                        </div> 
                    </div>
                </div>
            </div>
        </div>

        </div>
        <Footer/>
        </div>
    );
}
