import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Card from './Card.jsx';
import { useNavigate } from 'react-router-dom';
function Pricing() {
  const navigate = useNavigate();
  return (
    <div className='bg-[var(--bg)]'>
      <Header />
      

      <div className="w-[80%] mx-auto my-10 p-10 rounded-2xl bg-[var(--cardbg)] border-2 border-[#333333] shadow-[0_0_40px_rgba(206,125,99,0.25)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ce7d63]/10 via-transparent to-black/20 pointer-events-none"></div>
        <div className="absolute -top-10 -left-10 w-[200px] h-[200px] rounded-full bg-[#ce7d63]/20 blur-3xl"></div>
        <div className="text-center relative z-10">
          <h2 className="text-5xl font-extrabold text-[var(--text)] tracking-[0.1em] uppercase drop-shadow-[0_0_10px_rgba(206,125,99,0.8)]" style={{ fontFamily: "'Pricedown', sans-serif" }}>
            Select a plan
          </h2>
          <p className="mt-4 text-[var(--subtext)] text-xl italic">
            Whatever it is, it's just 3 dollars a month you poor motherf***er
          </p>
        </div>
      </div>


      <div className="w-[85%] mx-auto flex justify-center gap-8 items-stretch my-20">
        <Card
          cat="pricing"
          title="Basic"
          price="1"
          type = "pricing-normal"
          comment="Per User Monthly" 
          GoTo = {() => navigate('/SelectedPlan',  {
            state : {planName : "Basic" , planPrice : "1" , features : ["Unlimited Submission","Basic progress tracking", "Priority feedback",]}
          })}
          btnContent="Get started"
          features={[
            "Unlimited Submission",
            "Basic progress tracking",
            "Priority feedback",
          ]}
        />
        
          <Card
            cat="pricing"
            title="Pro"
            price="3"
            comment="Per User Monthly"
            type = "pricing-best"
            btnContent="Get started"
            GoTo = {() => navigate('/SelectedPlan',  {
            state : {planName : "Pro" , planPrice : "3" , features : ["Access to 150+ professional tasks","Advanced progress tracking","Priority email support","Advanced analytics","Feedback on submissions",]}
          })}
            bestchoice={true}
            features={[
              "Access to 150+ professional tasks",
              "Advanced progress tracking",
              "Priority email support",
              "Advanced analytics",
              "Feedback on submissions",
            ]}
          />
     
        <Card
          cat="pricing"
          title="Enterprise"
          price="5"
          comment="Per User Monthly"
          type = "pricing-normal"
          GoTo = {() => navigate('/SelectedPlan',  {
            state : {planName : "Enterprise" , planPrice : "5" , features : ["Comprehensive progress tracking","Advanced analytics & reporting","Personalized feedback",]}
          })}
          btnContent="Get started"
          features={[
            "Comprehensive progress tracking",
            "Advanced analytics & reporting",
            "Personalized feedback",
          ]}
        />
      </div>

      <div className="w-[80%] mx-auto my-16 p-10 rounded-2xl bg-[var(--cardbg)] border border-[#2a2a2a] shadow-[0_0_30px_rgba(206,125,99,0.15)] relative overflow-hidden">
  {/* Softer gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#ce7d63]/5 via-transparent to-black/20 pointer-events-none"></div>
  {/* Smaller, lighter glow orb */}
 <div className="absolute -top-8 -left-8 w-[150px] h-[150px] rounded-full bg-[#ce7d63]/30 blur-3xl"></div>
  <div className="text-center relative z-10 mb-8">
    <h2
      className="text-4xl md:text-5xl font-extrabold text-[var(--text)] tracking-[0.08em] uppercase drop-shadow-[0_0_6px_rgba(206,125,99,0.5)]"
      style={{ fontFamily: "'Pricedown', sans-serif" }}
    >
      Frequently Asked Questions (FAQs)
    </h2>
    <p className="mt-4 text-[var(--subtext)] text-lg italic">
      Read carefully so you don't ask stupid questions again
    </p>
  </div>

  <div className="w-[70%] mx-auto space-y-4 relative z-10">
    <Card
      cat="piano-shii"
      title="Am I gonna get a refund if I didn’t like the service?"
      comment="Hell no nigga"
    />
    <Card
      cat="piano-shii"
      title="What happens if I cancel?"
      comment="No refunds lil bro"
    />
    <Card
      cat="piano-shii"
      title="Do you offer free trial?"
      comment="Absolutely not nigga"
    />
    <Card
      cat="piano-shii"
      title="Can I subscribe now and pay later?"
      comment="Hmmm... let me take a look, NO"
    />
  </div>
</div>


      <Footer />
    </div>
  );
}

export default Pricing;
