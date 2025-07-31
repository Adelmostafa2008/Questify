import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Card from './Card.jsx';
function Pricing(props){
    return(
        <>
        <Header/>
        <div className='About-headers'>
            <h2>Select a plan</h2>
            <h4>Whatever it is , it is just 3 dollars a month you poor motherfucker</h4>
        </div>
        <div className='pricing'>
            <Card 
            cat = "pricing" 
            title = "Basic" 
            price = "1" 
            comment = "Per User Monthly"
            btnContent = "Get started"
            features = {[
                
                "Unlimited Submission",
                "Basic progress tracking",
                "Priority feedback",

            ]}/>
            <div className='best-price'>
            <h2>Best choice</h2>
            <Card
            cat = "pricing" 
            title = "Pro" 
            price = "3" 
            comment = "Per User Monthly"
            btnContent = "Get started"
            bestchoice = {true}
            features = {[
                
                "Access to 150+ professional tasks",
                "Advanced progress tracking",
                "Priority email support",
                "Advanced analytics",
                "Feedback on submissions",
                
            ]}/>
            </div>
            <Card
            cat = "pricing" 
            title = "Enterprise" 
            price = "5" 
            comment = "Per User Monthly"
            btnContent = "Get started"
            features = {[
                
               "Comprehensive progress tracking",
               "Advanced analytics & reporting",
               "Personalized feedback",

            ]}/>
        </div>

        <div>
            <div className='About-headers' style={{marginTop : "10rem"}}>
                <h2>Common asked questions</h2>
                <h4>Read carfully so you don't ask them stubid questions again</h4>
            </div>
            <div>
                <Card
                cat = "piano-shii"
                title = "Am i gonna get a refund if i didnot like the service ?"
                comment = "Hell no nigga"/>
                <Card
                cat = "piano-shii"
                title = "What happens if i cancel ?"
                comment = "No refunds lil bro"/>
                <Card
                cat = "piano-shii"
                title = "Do you offer free trail ?"
                comment = "Absolutely not nigga"/>
                <Card
                cat = "piano-shii"
                title = "Can subscribe now and pay later ?"
                comment = "Hmmm... let me take a look , NO"/>
            </div>
        </div>




        <Footer/>
        </>
    );
}
export default Pricing;