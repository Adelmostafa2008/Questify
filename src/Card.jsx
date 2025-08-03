import { useNavigate} from "react-router-dom";
import { useState } from "react";
import { ArrowBigDown, ArrowBigRight, Badge, BriefcaseBusiness, Brush, ChartLine, Code2, GraduationCap, Headset, Lightbulb, ListTodo, LucideListChecks, MedalIcon, Megaphone, MessageCircle, Minus, PhoneCall, Plus, Store, UsersRound} from "lucide-react";

function Card(props){
   const navigate = useNavigate();
   const cat = props.cat || "default";
   const type = props.type || "default";
   const title = props.title || null;
   const comment = props.comment || null;
   const btnContent = props.btnContent||null;
   const pic = props.mypicture || "https://placehold.co/50x50";
   const features = props.features || null;
   const pics = props.pics || null;
   const page  = props.page || null;
   const price = props.price || null;
   const tailwindshit = props.tailwindshit||null;
   const [isOpen, setIsOpen] = useState(false);

   function getIcon(iconName) {
  switch (iconName) {
    case "bulb":
      return <Lightbulb size = {40} className="text-[#ce7d63]" />;
    case "chart":
      return <ChartLine size = {40} className="text-[#ce7d63]" />;
    case "community":
      return <UsersRound size = {40} className="text-[#ce7d63]" />;
    case "chat":
        return <MessageCircle size = {40} className="text-[#ce7d63]"/>
    case "features":
        return <ListTodo size = {40} className="text-[#ce7d63]"/>
    case "badge":
        return <Badge size = {40} className="text-[#ce7d63]"/>
    case "medal":
        return <MedalIcon size = {40} className="text-[#ce7d63]"/> 
    case "graduate":
        return <GraduationCap size = {40} className="text-[#ce7d63]"/>    
    case "bag":
        return <BriefcaseBusiness size = {40} className="text-[#ce7d63]"/>
    case "callcenter":
        return <Headset size = {50} className="text-[#ce7d63]"/>    
    case "marketing":
        return <Megaphone size = {50} className="text-[#ce7d63]"/>    
    case "data":
        return <ChartLine size = {50} className="text-[#ce7d63]"/>    
    case "projectmanagement":
        return <LucideListChecks size = {50} className="text-[#ce7d63]"/>
    case "code":
        return <Code2 size = {50} className="text-[#ce7d63]"/>
    case "design":
        return<Brush size = {50} className="text-[#ce7d63]"/>
    default:
      return null;
  }
}

   switch(cat){

    case "home":
        switch(type){
            case "welcomeback":
                return(
                    <>
                    <div className={`bg-[#1f1f1f] mt-5 w-[80%] mx-auto text-white px-3 py-4 flex justify-between rounded-lg sm:px-5 sm:py-6 max-xxs:px-2 max-xxs:py-2 min-md:py-8 min-md:text-xl min-md:font-semibold`}>

                    <div className="font-[500] max-xxs:font-light max-xs:text-sm">
                        <h2>{title}</h2>
                        <h4>{comment}</h4>
                       
                    </div>
                        <div className="my-auto mr-1">

                        <button className="bg-[#ce7d63] text-lg px-3 py-1.5 font-[500] rounded-md max-xxs:px-1.5 max-xxs:py-1.5 max-xxs:font-medium min-w-max max-xxs:text-sm ">{btnContent}</button>
                        </div>
                   
                    </div>
                    </>
                );
            break;
            case "primeSub" :
                return(
                    <>
                    <div className="bg-[#e68d70] flex flex-col text-center max-w-[80%] mx-auto rounded-lg px-5 py-5">
                        <h2 className="text-white text-2xl font-semibold mt-2">{title}</h2>
                        <h4 className="max-w-[80%] mx-auto text-white mt-3 mb-5">{comment}</h4>
                        <button className="flex justify-center items-center text-[#ce7d63] bg-white rounded-lg w-max mx-auto px-4 py-2 font-semibold" onClick={() => navigate(`/${page}`)}><svg className = "fill-[#ce7d63] w-[25px] mr-2 mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6l277.2 0c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"/></svg>
                        {btnContent}</button>
                        <ul className="flex gap-5 mx-auto my-5 max-md:flex-col">
                            {features != null ?  features.map((x  , i) => <li key={i} className="min-w-max flex gap-1 text-white">
                                                                            <svg className="checkedCircle"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="20"
                                                                            height="20"
                                                                            viewBox="0 0 24 24"
                                                                            fill="white">
                                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                            <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                                                                            </svg> {x}</li>) : <li>none</li>}
                        </ul>
                    </div>
                    </>
                );
            break;
            case "task" : 
                return(
                    <>
                    <div className="bg-[#1f1f1fe6] flex flex-col w-[100%] px-5 py-10 rounded-lg">
                        <div className="max-w-5 self-end m-0 mr-7 max-xxs:self-center"> {getIcon(pic)}</div>
                        <h2 className="text-white text-start mt-2 mb-1 font-semibold">{title}</h2>
                        <h4 className="text-[#b3b3b2] mb-4">{comment}</h4>
                        <button className="mt-auto text-white bg-[#2b2b2b] px-5 py-1 w-1/3 min-w-max rounded-sm min-xs:min-w-fit ">{btnContent}</button>
                    </div>
                    </>
                );
            break;
            case "default" :
                return(<h2>no type entered</h2>);
            break;
        }
    break;
    case "about":
        switch(type){
            case "what-is-questify" :
                return(
                    <>
                    <div className="rounded-md   bg-[linear-gradient(135deg,_rgba(206,_125,_99,_0.1),_rgba(206,_125,_99,_0.05))] flex flex-col text-center text-white max-w-[80%] mx-auto my-10">
                        <h2 className="text-6xl font-bold bg-[linear-gradient(135deg,_#ce7d63,_#ffa07a)] bg-clip-text text-transparent max-w-[70%] mx-auto my-10">{title}</h2>
                        <h4 className="text-xl max-w-[70%] mx-auto mb-10 text-[#b3b3b2]">{comment}</h4>
                        <button className="bg-[#ce7d63] border-none rounded-sm font-semibold text-md w-[15%] min-w-max mx-auto px-3 py-3 mb-10">{btnContent}</button>
                    </div>
                    </>
                );
            break;
            case "mission":
                return(
                    <>
                    <div className="flex flex-col text-white text-center bg-[#1f1f1f] max-w-[30%] rounded-md pb-8">
                        <div className="w-[25px] h-[25px]  mx-auto my-6 bg-[rgba(_206,_125,_99,_0.1)] min-w-max min-h-max px-6 py-6 rounded-full">{getIcon(pic)}</div>
                        <h2 className="text-2xl font-semibold ">{title}</h2>
                        <h4 className="max-w-[70%] mx-auto my-5 text-md text-[#b3b3b2] font-semibold">{comment}</h4>
                    </div>
                    </>
                );
            break;
            case "team":
                return(
                    <>
                    <div className="bg-[#222222] flex flex-col justify-center items-center w-[18%] gap-2.5 rounded-md">
                        <img src={pic} className="w-full h-full object-cover rounded-tr-md rounded-tl-md"/>
                        <h2 className="text-white text-2xl font-semibold">{title}</h2>
                        <div className="flex pb-2.5">
                        {pics != null ? pics.map((p , i) => <img  src = {p} key={i}/>) : <h2>none</h2>}
                        </div>
                    </div>
                    </>
                );
            break;
            case "why-questify":
                return(
                    <>
                    <div className="flex ">
                      
                        <div className="mr-5 bg-[rgba(_206,_125,_99,_0.1)] min-w-max min-h-max px-3 py-3 rounded-lg my-0 max-h-fit">
                        {getIcon(pic)}
                        </div>
                        
                        <div className="flex flex-col text-white">
                        <h2 className="text-xl font-semibold">{title}</h2>
                        <h4 className="text-[#b3b3b2] text-md font-semibold w-[80%]">{comment}</h4>
                        </div>
                    </div>
                    </>
                );
            break;
            case "impact":
                return(
                    <>
                    <div className="w-[23%] bg-[#1f1f1f] flex flex-col text-center rounded-md gap-5 py-5">
                        <h2 className="text-[#ce7d63] text-5xl font-semibold">{title}</h2>
                        <h4 className="text-[#b3b3b2] text-lg">{comment}</h4>
                    </div>
                    </>
                );
            break;




            case "default" :
            return(<h2>no type entered</h2>);
            break;    
        }
    break;
    case "pricing":
        return (
            <>
            <div className="bg-[#1f1f1f] flex flex-col text-center min-w-max text-white gap-y-4 px-5 py-2.5 rounded-md w-[23%]">
                <h2 className="text-white text-3xl font-semibold">{title}</h2>
                <h1 className="text-6xl font-bold"><span className="text-xl">$</span>{price}</h1>
                <h4 className="text-lg font-semibold">{comment}</h4>
                <button className="bg-[#ce7d63] border-none rounded-sm font-semibold text-md w-[15%] text-md min-w-max mx-auto px-5 py-1">{btnContent}</button>
                <div className="flex items-center justify-center mt-6 mb-3">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="px-4 text-lg font-semibold text-white">Features</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div >

                   <ul className="flex flex-col mx-auto my-auto">
                            {features != null ?  features.map((x  , i) => <li key={i} className="flex">
                                                                            <svg className="mt-1 mr-1 mb-2"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="17"
                                                                            height="17"
                                                                            viewBox="0 0 24 24"
                                                                            fill="currentColor">
                                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                            <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                                                                            </svg> {x}</li>) : <li>none</li>}
                 </ul>
            </div>
            </>
        );
    break;
    case "piano-shii":
        return(
            <>

        <div className="w-full mx-auto rounded-2xl shadow-md border border-gray-300 my-3">
            <button
                className="w-full flex items-center justify-between p-4 bg-[#1f1f1f] text-white text-left rounded-t-2xl hover:bg-[#292929] transition"
                onClick={() => setIsOpen(!isOpen)}>

                <span className="text-lg font-semibold">{title}</span>
                {isOpen ? (
                <Minus size={30} />
                ) : (
                <Plus size={30} />
                )}
            </button>
            <div
                className={`px-4 py-3 text-gray-700 font-semibold overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96" : "max-h-0"
                }`}>

                <div className={`${isOpen ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>
                {comment}
                </div>
            </div>
            </div>

            </>
        );
    break;
    case "default" :
        return(<h2>empty card</h2>);
    break;

   }
}

export default Card;
