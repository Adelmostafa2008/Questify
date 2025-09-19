import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaLightbulb, FaUserGroup, FaChartLine, FaListCheck, FaGraduationCap, FaHeadset, FaPaintbrush, FaPlus, FaMinus, FaMessage, FaTrashCan } from "react-icons/fa6";
import { IoChatbubbles } from "react-icons/io5";
import { RiMedalFill } from "react-icons/ri";
import { MdWork } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";
import { BsFillMegaphoneFill } from "react-icons/bs";
import { FaClipboardList, FaCode } from "react-icons/fa";

function Card(props) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const cat = props.cat || "default";
  const type = props.type || "default";
  const title = props.title || null;
  const comment = props.comment || null;
  const btnContent = props.btnContent || null;
  const pic = props.mypicture || "https://placehold.co/50x50";
  const features = props.features || null;
  const pics = props.pics || null;
  const page = props.page || null;
  const price = props.price || null;
  const onRemove = props.onRemove || null;
  const snNum = props.snNum || null;
  const newT = props.newT || (() => {});
  const newD = props.newD || (() => {});
  const taskPreviewTitle = props.TPT || "";
  const taskPreviewDescription = props.TPD || "";
 
  function getIcon(iconName) {
    switch (iconName) {
      case "bulb":
        return <FaLightbulb size={40} className="text-[#ce7d63]" />;
      case "chart":
        return <FaChartLine size={40} className="text-[#ce7d63]" />;
      case "community":
        return <FaUserGroup size={40} className="text-[#ce7d63]" />;
      case "chat":
        return <IoChatbubbles size={40} className="text-[#ce7d63]" />;
      case "features":
        return <FaListCheck size={40} className="text-[#ce7d63]" />;
      case "badge":
        return <TbCertificate size={40} className="text-[#ce7d63]" />;
      case "medal":
        return <RiMedalFill size={40} className="text-[#ce7d63]" />;
      case "graduate":
        return <FaGraduationCap size={40} className="text-[#ce7d63]" />;
      case "bag":
        return <MdWork size={40} className="text-[#ce7d63]" />;
      case "callcenter":
        return <FaHeadset size={50} className="text-[#ce7d63]" />;
      case "marketing":
        return <BsFillMegaphoneFill size={50} className="text-[#ce7d63]" />;
      case "data":
        return <FaChartLine size={50} className="text-[#ce7d63]" />;
      case "projectmanagement":
        return <FaClipboardList size={50} className="text-[#ce7d63]" />;
      case "code":
        return <FaCode size={50} className="text-[#ce7d63]" />;
      case "design":
        return <FaPaintbrush size={50} className="text-[#ce7d63]" />;
      default:
        return null;
    }
  }

  switch (cat) {
   case "home":
  switch (type) {
    case "welcomeback":
      return (
        <div className="relative w-[80%] mx-auto my-8 p-6 sm:p-8 rounded-2xl bg-[#1f1f1f] border-2 border-[#2b2b2b] shadow-[0_0_30px_rgba(194,122,96,0.12)] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#c27a60]/6 via-transparent to-black/40 pointer-events-none"></div>
          <div className="absolute -top-10 -left-10 w-[200px] h-[200px] rounded-full bg-[#c27a60]/12 blur-3xl"></div>

          <div className="flex justify-between items-center relative z-10">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-100">{title}</h2>
              <h4 className="text-gray-400 mt-1">{comment}</h4>
            </div>
            <button className="bg-[#c27a60] hover:bg-[#b46c56] transition px-4 py-2 rounded-lg text-white font-medium shadow-md">
              {btnContent}
            </button>
          </div>
        </div>
      );

    case "primeSub":
      return (
        <div className="relative max-w-[80%] mx-auto my-10 p-8 rounded-2xl bg-[#d28268] shadow-[0_0_35px_rgba(194,122,96,0.2)] overflow-hidden text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[#c27a60]/10 via-transparent to-black/30 pointer-events-none"></div>
          <div className="absolute -top-10 -left-10 w-[250px] h-[250px] rounded-full bg-[#c27a60]/15 blur-3xl"></div>

          <h2 className="text-3xl font-extrabold text-gray-100 tracking-wide relative z-10">{title}</h2>
          <h4 className="max-w-[80%] mx-auto text-gray-200 mt-3 mb-6 relative z-10">{comment}</h4>

          <button
            className="relative z-10 flex justify-center items-center mx-auto text-[#c27a60] bg-white rounded-lg px-5 py-2 font-semibold shadow-md hover:shadow-[#c27a60]/20 transition"
            onClick={() => navigate(`/${page}`)}
          >
            <svg className="fill-[#c27a60] w-[25px] mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6l277.2 0c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z" />
            </svg>
            {btnContent}
          </button>

          <ul className="flex gap-6 mx-auto my-5 flex-wrap justify-center relative z-10">
            {features != null ? features.map((x, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-100 text-lg">
                <svg className="checkedCircle" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                </svg>
                {x}
              </li>
            )) : <li>none</li>}
          </ul>
        </div>
      );

    case "task":
      return (
        <div className="relative bg-[#1f1f1fe6] p-8 rounded-2xl border-2 border-[#2b2b2b] shadow-[0_0_25px_rgba(194,122,96,0.12)] flex flex-col h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#c27a60]/6 via-transparent to-black/40 pointer-events-none"></div>
          <div className="absolute -top-10 -left-10 w-[150px] h-[150px] rounded-full bg-[#c27a60]/12 blur-3xl"></div>

          <div className="relative z-10">
            <div className="self-end mb-3">{getIcon(pic)}</div>
            <h2 className="text-gray-100 text-xl font-semibold">{title}</h2>
            <h4 className="text-gray-400 mt-1 mb-4">{comment}</h4>
          </div>

          <button
            className="relative z-10 mt-auto text-gray-100 bg-[#2b2b2b] hover:bg-[#3a3a3a] transition px-5 py-2 rounded-lg shadow-md"
            onClick={props.GoTo}
          >
            {btnContent}
          </button>
        </div>
      );

    case "default":
      return <h2>no type entered</h2>;
  }


      break;
   case "about":
  switch (type) {
    case "what-is-questify":
      return (
        <div className="relative w-[80%] mx-auto my-12 p-10 rounded-2xl bg-[#1f1f1f] border-2 border-[#333333] shadow-[0_0_40px_rgba(206,125,99,0.25)] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ce7d63]/10 via-transparent to-black/40 pointer-events-none"></div>
          <div className="absolute -top-10 -left-10 w-[200px] h-[200px] rounded-full bg-[#ce7d63]/20 blur-3xl"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-6xl font-extrabold bg-gradient-to-r from-[#ce7d63] to-[#ffb38a] bg-clip-text text-transparent tracking-wide leading-tight">
              {title}
            </h2>
            <h4 className="text-xl max-w-[70%] mx-auto mt-6 text-[#c5c5c5] font-medium">
              {comment}
            </h4>
            <button
              onClick={props.GoTo}
              className="mt-10 bg-[#ce7d63] text-white hover:bg-[#b86c55] transition-all duration-300 rounded-lg font-semibold text-lg px-6 py-3 shadow-[0_2px_12px_rgba(206,125,99,0.4)] hover:shadow-[0_4px_20px_rgba(206,125,99,0.6)]"
            >
              {btnContent}
            </button>
          </div>
        </div>
      );

    case "mission":
      return (
        <div className="relative flex flex-col items-center text-center bg-[#1f1f1f] p-8 rounded-2xl border-2 border-[#333333] shadow-[0_0_30px_rgba(206,125,99,0.15)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(206,125,99,0.25)] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ce7d63]/8 via-transparent to-black/30 pointer-events-none"></div>
          <div className="absolute -top-8 -left-8 w-[150px] h-[150px] rounded-full bg-[#ce7d63]/15 blur-3xl"></div>
          <div className="relative z-10">
            <div className="w-[60px] h-[60px] mx-auto my-4 bg-[rgba(206,125,99,0.15)] rounded-full flex items-center justify-center">
              {getIcon(pic)}
            </div>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <h4 className="max-w-[80%] mx-auto my-5 text-md text-[#b3b3b2] font-medium">
              {comment}
            </h4>
          </div>
        </div>
      );

    case "team":
      return (
        <div className="relative bg-[#1f1f1f] flex flex-col items-center w-[18%] gap-3 rounded-2xl border-2 border-[#333333] overflow-hidden shadow-[0_0_30px_rgba(206,125,99,0.15)] hover:shadow-[0_0_40px_rgba(206,125,99,0.25)] transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-b from-[#ce7d63]/5 via-transparent to-black/30 pointer-events-none"></div>
          <img src={pic} className="w-full h-full object-cover" />
          <h2 className="text-white text-xl font-bold z-10">{title}</h2>
          <div className="flex gap-2 pb-4 relative z-10">
            {pics && pics.length > 0
              ? pics.map((p, i) => (
                  <img
                    src={p}
                    key={i}
                    className="w-8 h-8 opacity-80 hover:opacity-100 transition"
                  />
                ))
              : <h2 className="text-gray-400">none</h2>}
          </div>
        </div>
      );

    case "why-questify":
      return (
        <div className="relative flex items-start gap-4 p-5 rounded-xl bg-[#1f1f1f] border border-[#333333] hover:border-[#ce7d63]/40 transition-colors duration-300 shadow-[0_0_20px_rgba(206,125,99,0.1)] hover:shadow-[0_0_30px_rgba(206,125,99,0.2)]">
          <div className="bg-[rgba(206,125,99,0.15)] p-3 rounded-lg flex items-center justify-center">
            {getIcon(pic)}
          </div>
          <div className="flex flex-col text-white">
            <h2 className="text-lg font-bold">{title}</h2>
            <h4 className="text-[#b3b3b2] text-md font-medium mt-1 w-[80%]">
              {comment}
            </h4>
          </div>
        </div>
      );

    case "impact":
      return (
        <div className="relative w-[23%] bg-[#1f1f1f] flex flex-col text-center p-6 rounded-2xl border-2 border-[#333333] shadow-[0_0_30px_rgba(206,125,99,0.15)] hover:shadow-[0_0_40px_rgba(206,125,99,0.25)] transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ce7d63]/8 via-transparent to-black/30 pointer-events-none"></div>
          <h2 className="text-[#ce7d63] text-5xl font-extrabold relative z-10">{title}</h2>
          <h4 className="text-[#c5c5c5] text-lg font-medium relative z-10">{comment}</h4>
        </div>
      );

    case "default":
      return <h2 className="text-red-500">no type entered</h2>;
  }

  break;

   case "pricing":
  switch (type) {
  case "pricing-best":
    return (
      <div className="relative flex flex-col items-center text-center w-[23%] min-w-[250px] rounded-2xl px-6 py-8 overflow-hidden transition-all duration-300
        border-2 border-[#ce7d63] bg-[#1f1f1f] shadow-[0_0_45px_rgba(206,125,99,0.35)] scale-105">
        <div className="absolute top-4 left-[-40px] rotate-[-33deg] bg-[#c27a60] flex text-white font-bold text-xs px-12 py-1 shadow-[0_0_12px_rgba(194,122,96,0.4)]">
          <h2>BEST CHOICE</h2>   
        </div>
        <h2 className="text-3xl font-extrabold text-white tracking-wider mb-2">{title}</h2>
        <h1 className="text-6xl font-black text-white mb-2">
          <span className="text-xl align-top">$</span>{price}
        </h1>
        <h4 className="text-lg font-medium text-gray-300 mb-6">{comment}</h4>
        <button onClick={props.GoTo} className="bg-[#c27a60] text-white hover:bg-[#b46c56] transition-colors border-none rounded-md font-semibold text-md px-6 py-2 mb-6 shadow-[0_0_8px_rgba(194,122,96,0.35)] hover:shadow-[0_0_12px_rgba(194,122,96,0.45)]">
          {btnContent}
        </button>
        <div className="flex items-center justify-center w-full my-4">
          <div className="flex-grow border-t border-gray-700"></div>
          <span className="px-3 text-sm font-semibold text-gray-400 uppercase">Features</span>
          <div className="flex-grow border-t border-gray-700"></div>
        </div>
        <ul className="flex flex-col gap-2 text-left text-gray-300">
          {features?.length > 0 ? features.map((x, i) => (
            <li key={i} className="flex items-start gap-2">
              <svg
                className="mt-1"
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
              </svg>
              {x}
            </li>
          )) : <li className="text-gray-500">No features listed</li>}
        </ul>
      </div>
    );

  case "pricing-normal":
    return (
      <div className="relative flex flex-col items-center text-center w-[23%] min-w-[250px] rounded-2xl border-2 border-[#333333] bg-[#1f1f1f]
        shadow-[0_0_25px_rgba(206,125,99,0.15)] px-6 py-8 overflow-hidden
        hover:border-[#c27a60] hover:shadow-[0_0_35px_rgba(194,122,96,0.25)]
        transition-all duration-300">
        <h2 className="text-3xl font-extrabold text-white tracking-wider mb-2">{title}</h2>
        <h1 className="text-6xl font-black text-white mb-2">
          <span className="text-xl align-top">$</span>{price}
        </h1>
        <h4 className="text-lg font-medium text-gray-300 mb-6">{comment}</h4>
        <button onClick={props.GoTo} className="bg-[#c27a60] text-white hover:bg-[#b46c56] transition-colors border-none rounded-md font-semibold text-md px-6 py-2 mb-6 shadow-[0_0_8px_rgba(194,122,96,0.35)] hover:shadow-[0_0_12px_rgba(194,122,96,0.45)]">
          {btnContent}
        </button>
        <div className="flex items-center justify-center w-full my-4">
          <div className="flex-grow border-t border-gray-700"></div>
          <span className="px-3 text-sm font-semibold text-gray-400 uppercase">Features</span>
          <div className="flex-grow border-t border-gray-700"></div>
        </div>
        <ul className="flex flex-col gap-2 text-left text-gray-300">
          {features?.length > 0 ? features.map((x, i) => (
            <li key={i} className="flex items-start gap-2">
              <svg
                className="mt-1"
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
              </svg>
              {x}
            </li>
          )) : <li className="text-gray-500">No features listed</li>}
        </ul>
      </div>
    );

  default:
    return null;
}



   case "piano-shii":
  return (
    <div className="relative w-full mx-auto my-3 rounded-2xl border-2 border-[#333333] shadow-[0_0_20px_rgba(206,125,99,0.15)] hover:shadow-[0_0_30px_rgba(206,125,99,0.25)] overflow-hidden transition-all duration-300">
      <button
        className="w-full flex items-center justify-between p-4 bg-[#1f1f1f] text-white text-left rounded-t-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{title}</span>
        {isOpen ? <FaMinus size={28} /> : <FaPlus size={28} />}
      </button>
      <div
        className={`px-5 py-4 text-white font-medium overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {comment}
      </div>
    </div>
  );

    case "createTask":
      return (
        <>
          <div className="bg-[#232329] pr-5 pl-4 py-2 rounded-md border-l-[3px] border-[#ce7d63] my-2">
            <div className="flex justify-between items-center">
              <h2 className="flex text-white font-semibold gap-x-2 py-3 w-[100%]"><FaMessage fill="white" size={20} color="white" className="mt-[1.5px]" />Scenario {snNum}</h2>
              <button onClick={onRemove}><FaTrashCan size={16} color="#b3b3b2" /></button>
            </div>
            <div className=" w-[100%] flex flex-col  pb-10">


              <h2 className="text-[#b3b3b2] text-sm mb-2 mt-2">Task Title</h2>
              <input type="text" placeholder="Enter task title..." onChange={(e) => newT(e, snNum)} className="text-white placeholder:text-[#888888] bg-[#1a1a1a] w-[100%] px-4.5 py-2 border-[1px] border-[#333333] rounded-sm focus:outline-0 focus:border-[#ce7d63]" />


              <h2 className="text-[#b3b3b2] text-sm mb-2 mt-2">Task Description</h2>
              <textarea placeholder="Enter detailed task description..." onChange={(e) => newD(e, snNum)} className="text-white bg-[#1a1a1a] px-4.5 py-2.5 border-[1px] border-[#333333] rounded-sm focus:outline-0 focus:border-[#ce7d63] max-h-30 min-h-30" />
            </div>
          </div>
        </>
      );
    case "taskPreview":
      return (
        <>
          <div className="bg-[#232329] pr-5 pl-4 py-2 rounded-md border-l-[3px] border-[#ce7d63] my-2">
            <div>
              <h2 className="text-white font-semibold text-center break-words py-3">{taskPreviewTitle == "" ? "Ex. wanna hear a dark joke?" : taskPreviewTitle}</h2>
            </div>
            <div className="w-[100%] flex flex-col text-center break-words pb-5 text-[#b3b3b2] mt-2.5">{taskPreviewDescription == "" ? "Ex. what you call a yellow submarine full of kids... a school bus 😂😂😂" :taskPreviewDescription}</div>
          </div>
        </>
      );
 
    case "taskCard":
  return (
    <div className="w-[80%] mx-auto my-10 p-10 rounded-2xl bg-[#1f1f1f] border-2 border-[#333333] shadow-[0_0_40px_rgba(206,125,99,0.25)] relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-[#ce7d63]/10 via-transparent to-black/40 pointer-events-none"></div>
      <div className="absolute -top-10 -left-10 w-[200px] h-[200px] rounded-full bg-[#ce7d63]/20 blur-3xl"></div>

      <div className="text-center relative z-10 flex flex-col gap-y-2">
        <h2 className="text-5xl font-extrabold text-[#ce7d63] tracking-[0.1em] uppercase drop-shadow-[0_0_10px_rgba(206,125,99,0.8)]"
            style={{ fontFamily: "'Pricedown', sans-serif" }}>
            "Sharpen your skills. Complete tasks. Build your legacy."
        </h2>
        <p className="mt-4 text-gray-400 text-xl italic">
          {comment}
        </p>
      </div>
    </div>
  );  
    case "default":
      return (<h2>empty card</h2>);
  }
}

export default Card;


// case "taskCard":
//   return (
//     <div className="w-[80%] mx-auto my-10 p-10 rounded-2xl bg-[#1f1f1f] border-2 border-[#333333] shadow-[0_0_40px_rgba(206,125,99,0.25)] relative overflow-hidden">

//       <div className="absolute inset-0 bg-gradient-to-br from-[#ce7d63]/10 via-transparent to-black/40 pointer-events-none"></div>
//       <div className="absolute -top-10 -left-10 w-[200px] h-[200px] rounded-full bg-[#ce7d63]/20 blur-3xl"></div>

//       <div className="text-center relative z-10">
//         <h2 className="text-5xl font-extrabold text-[#ce7d63] tracking-[0.1em] uppercase drop-shadow-[0_0_10px_rgba(206,125,99,0.8)]"
//             style={{ fontFamily: "'Pricedown', sans-serif" }}>
//           {comment}
//         </h2>
//         <p className="mt-4 text-gray-400 text-xl italic">
//           "Sell dreams, not products — even lies need good packaging"
//         </p>
//       </div>
//     </div>
//   ); 
 