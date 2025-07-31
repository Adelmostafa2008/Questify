import { useNavigate} from "react-router-dom";
import { useState } from "react";
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
   const bestchoice = props.bestchoice || false;
   const tailwindshit = props.tailwindshit||null;
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
                        <ul className="flex gap-5 mx-auto my-5 min-xs:flex-col">
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
                        <img className="max-w-5 self-end mt-2 mr-2 max-xxs:self-center" src={pic}/>
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
                    <div className="Card-about-what-is-questify">
                        <h2>{title}</h2>
                        <h4>{comment}</h4>
                        <button>{btnContent}</button>
                    </div>
                    </>
                );
            break;
            case "mission":
                return(
                    <>
                    <div className="Card-about-mission">
                        <img src={pic}/>
                        <h2>{title}</h2>
                        <h4>{comment}</h4>
                    </div>
                    </>
                );
            break;
            case "team":
                return(
                    <>
                    <div className="Card-about-team">
                        <img src={pic} className="team-main-pic"/>
                        <h2>{title}</h2>
                        <div className="Card-about-contact-img">
                        {pics != null ? pics.map((p , i) => <img  src = {p} key={i}/>) : <h2>none</h2>}
                        </div>
                    </div>
                    </>
                );
            break;
            case "why-questify":
                return(
                    <>
                    <div className="Card-about-why-questify">
                      

                        <img src={pic}/>
                        

                        <h2>{title}</h2>
                        <h4>{comment}</h4>
                    </div>
                    </>
                );
            break;
            case "impact":
                return(
                    <>
                    <div className="Card-about-impact">
                        <h2>{title}</h2>
                        <h4>{comment}</h4>
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
            <div className={bestchoice ? "Card-pricing-best": "Card-pricing"}>
                <h2>{title}</h2>
                <h1><span className="pricing-dollar-sign">$</span>{price}</h1>
                <h4>{comment}</h4>
                <button>{btnContent}</button>
                <div class="line-with-text">
                    <span>Features</span>
                </div>

                   <ul>
                            {features != null ?  features.map((x  , i) => <li key={i}>
                                                                            <svg className="checkedCircle"
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

                <div className="piano">
                    <h2>{title}</h2>
                    <p>{comment}</p>
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
