import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import api from "./AxiosHelper.jsx";
import { useAuth } from "./AuthContext.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaLightbulb, FaClock, FaStar, FaPaperPlane } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { GoHeart , GoHeartFill } from "react-icons/go";
import { Link } from "react-router-dom";

export default function SelectedTask() {
    const { taskid } = useParams();
    const [loading, setLoading] = useState(false);
    const [deleteState, setDeleteState] = useState("idle");
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();
    const {user} = useAuth();
    const [isHeartFill , setIsHeartFill] = useState(false);
    const [Task , setTask] = useState({});
    const [submit , setSubmit] = useState({
        Userid : "",
        Taskid : "",
        SubmittedData : ""
    });
    const [find , setFind] = useState({
        userid : "",
        taskid : ""
    });
    const [existingsub , setExistingsub] = useState({
        userId : "",
        taskId : "",
        submittedData : ""
    });

    const getTask = async () => {
        try {
            const res = await api.get(`/tasks/${taskid}`);
            setTask(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getTask();
    }, []);

    useEffect(() => {
        if(user?.id) setsubmits();
    }, [user]);

    const setsubmits = () => {
         const newFind = {
        userid: user.id,
        taskid: Number(taskid),
        };

        setSubmit(prev => ({
            ...prev,
            Userid : user.id,
            Taskid : Number(taskid),
        }));

        setFind(newFind);
        getsub(newFind);
    }

    
    const handleSubmit = async () => {
        try {
            
            const res = await api.post("/submission",  submit);
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    const handleDelete = async () => {
        try {
            setDeleteState("loading");
            const Tcategorry = Task.taskcategory;
            const res = await api.delete(`/tasks/${taskid}`);
            setDeleteState("done");
            setTimeout(() => navigate("/Tasks" , {state : {Tcategory : Tcategorry}}) , 500)
        } catch (error) {
            console.log(error);
            setDeleteState("idle");
            throw error;
        }
    };

    
    console.log(submit);
        const getsub = async (find) => {
            try {
                const res = await api.get("/submission/existing" , {params: find});
                setExistingsub(res.data);
                setSubmit(prev => ({...prev , SubmittedData : res.data.submittedData}));
            } catch (err) {
                console.log(err);
            }
        };
        
   
        function slugify(text) {
            if (!text) return "";
  return text
    .toLowerCase()                 
    .trim()                        
    .replace(/\s+/g, '-')          
    .replace(/[^\w\-]+/g, '');     
   }

    return (
        <>
            <Header />
            <div className="flex gap-x-20  my-20 justify-center ">

                {/* LEFT: Task Preview */}
                <div className="w-[40%] rounded-2xl bg-[#1f1f1f] border-2 border-[#333333] shadow-[0_0_40px_rgba(206,125,99,0.25)] relative overflow-hidden px-7">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ce7d63]/10 via-transparent to-black/40 pointer-events-none"></div>
                    <div className="absolute -bottom-10 -right-10 w-[200px] h-[200px] rounded-full bg-[#ce7d63]/20 blur-3xl"></div>
                    <div className="flex justify-end mt-10 gap-x-4">






                    {/* Delete */}
                     <button
                     onClick={handleDelete}
                    disabled={deleteState === "loading"}
                    className="p-2 rounded-md flex items-center gap-2 border border-gray-700 
                            shadow-sm hover:bg-red-600 hover:border-red-600 
                            transition duration-200 disabled:opacity-50"
                >
                    {(deleteState !== "loading" && deleteState !== "done") && (
                    <FaTrashCan size={20} className="text-white" />
                    ) }
                    {deleteState === "loading" && (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    )}
                    {deleteState === "done" && <span className="text-white">Done</span>}
                </button>

                    {/* Edit */}
                    <Link to={`/Tasks/${taskid}/${slugify(Task.taskname)}/Edit`}>
                    <button
                        className="p-2 rounded-md flex items-center border border-gray-700 
                        shadow-sm
                        hover:border-gray-400 hover:text-gray-200 
                        hover:shadow-md hover:shadow-gray-400/40 
                        transition duration-200"
                        >
                        <FaEdit size={20} className="text-white" />
                    </button>
                                    </Link>

                    {/* Like */}
                    <button
                        onClick={() => setIsHeartFill(!isHeartFill)}
                        className="p-2 rounded-md flex items-center border border-gray-700 
                                 shadow-sm
                                hover:bg-red-500/20  hover:border-red-600 transition duration-200"
                    >
                        {isHeartFill ? (
                        <GoHeartFill size={23} className="text-red-500"/>
                        ) : (
                        <GoHeart size={23} className="text-white"/>
                        )}
                    </button>
                    </div>

                    <div className="relative z-10">
                        <div className="bg-[#1a1a1a] py-3 px-7 mb-10 mt-5 rounded-md">
                            <div className="flex flex-col">
                                <div className="w-[95%] break-words mx-auto my-3">
                                    <h2 className="text-white text-2xl font-bold text-center">
                                        {Task.taskname}
                                    </h2>
                                </div>
                                <div className="flex justify-center gap-x-2 mt-1">
                                    <div className="bg-[#ce7d631a] text-[#ce7d63] px-3 rounded-xl">
                                        {Task.taskcategory}
                                    </div>
                                    <div className="bg-[#ce7d631a] text-[#ce7d63] px-3 rounded-xl">
                                        {Task.taskdefficulty}
                                    </div>
                                </div>
                                <div className="flex gap-x-5 my-10 justify-center">
                                    <label className="text-[#b3b3b2] text-sm flex min-w-max items-center gap-x-2">
                                        <FaClock size={20} color="#ce7d63" /> {Task.tasktime || "0"} min
                                    </label>
                                    <label className="text-[#b3b3b2] text-sm flex min-w-max items-center gap-x-2">
                                        <FaStar size={20} color="#ce7d63" /> {Task.taskpoints || "0"} pts
                                    </label>
                                </div>
                                <div className="text-[#b3b3b2] text-md text-center w-[95%] mx-auto mb-6 break-words">
                                    {Task.taskdescription}
                                </div>
                                <div className="flex justify-between items-center mb-3">
                                    <h2 className="flex text-white font-semibold gap-x-1">
                                        <FaLightbulb size={17} color="#ce7d63" className="mt-[2px]" /> Scenarios
                                    </h2>
                                </div>
                                <div>
                                    {Task.scene?.length > 0 ? (
                                        Task.scene.map((scenario) => (
                                            <Card
                                                cat="taskPreview"
                                                key={scenario.id}
                                                TPT={scenario.scenariotitle}
                                                TPD={scenario.scenariodescription}
                                            />
                                        ))
                                    ) : (
                                        <p className="text-[#81807e] text-center">No scenarios available.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Answer Section */}
                <div className="w-[40%] rounded-2xl bg-[#1f1f1f] border-2 border-[#333333] shadow-[0_0_40px_rgba(206,125,99,0.25)] relative overflow-hidden px-7 py-10 flex flex-col justify-between">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ce7d63]/10 via-transparent to-black/40 pointer-events-none"></div>
                    <div className="absolute -bottom-10 -right-10 w-[200px] h-[200px] rounded-full bg-[#ce7d63]/20 blur-3xl"></div>

                    <div className="relative z-10 flex flex-col h-full">
                        <h2 className="text-white text-2xl font-bold text-center mb-6">
                            Submit Your Answer
                        </h2>
                        {existingsub.submittedData ?  (existingsub.submittedData !== "" ?
                        <div className="p-3 w-full rounded-xl border bg-[#fabb181a] mb-3 border-[#fabb18] text-[#fabb18] flex gap-x-2 ">
                             <FaInfoCircle className="mt-1"/> You 've submitted this task already , submitting it again will overwrite your old submission
                        </div> : null)
                        : null }
                        <textarea
                            className="w-full h-[80%] bg-[#141414] border border-[#333] rounded-xl text-white p-4 focus:outline-none focus:border-[#ce7d63] resize-none"
                            placeholder="Type your solution here..."
                            defaultValue={submit.SubmittedData}
                            onChange={(e) => setSubmit(prev => ({...prev , SubmittedData : e.target.value}))}
                        />
                           <button
                        onClick={async () => {
                            if (loading || success) return; 
                            if (!submit.SubmittedData.trim()) {
                            alert("answer field can't be empty");
                            return;
                            }
                            setLoading(true); 
                            try {
                                await handleSubmit(); 
                                setSuccess(true);
                                setTimeout(() => navigate('/Tasks' , {state : {Tcategory : Task.taskcategory}}), 500); // Redirect after 1.5s
                            } catch (err) {
                                console.error(err);
                            } finally {
                                setLoading(false);
                            }
                        }}
                        disabled={loading || success}
                        className={`flex items-center justify-center gap-2 px-4 py-2 text-sm w-[100%] mt-5 font-semibold rounded-md  transition-colors duration-300
                        ${success
                            ? "bg-green-600 text-white shadow-[0_0_4px_#16A34A] "
                            : "bg-[#ce7d63] border border-[#ce7d63] text-white shadow-[0_0_4px_#ce7d63aa]"
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
                                {existingsub.submittedData ? existingsub.submittedData === "" ? (<>Submitting...</>) : (<>Resubmitting...</>) : (<>Submitting...</>)}
                                
                            </>
                        ) : success ? (
                            "Done!"
                        ) : (
                            <>
                            {existingsub.submittedData ? existingsub.submittedData === "" ? (<><FaPaperPlane /> Submit Answer</>) : (<><FaPaperPlane /> Resubmit Answer</>) : (<><FaPaperPlane /> Submit Answer</>)}
                            </>
                        )}
                    </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
