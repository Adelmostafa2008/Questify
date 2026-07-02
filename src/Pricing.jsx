import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Card from './Card.jsx';
import { useNavigate } from 'react-router-dom';
function Pricing() {
  const navigate = useNavigate();
  return (
    <div className='bg-[var(--bg)]'>
      <Header />
      

      <div className="w-[80%] mx-auto my-10 p-10 rounded-2xl bg-[var(--cardbg)] border-2 border-[var(--anyborder)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--subtext)]/12 via-transparent to-black/20 pointer-events-none rounded-2xl"></div>
        <div className="text-center relative z-10">
          <h2 className="text-5xl font-extrabold text-[var(--text)] tracking-[0.1em] uppercase" style={{ fontFamily: "'Pricedown', sans-serif" }}>
            Select a plan
          </h2>
          <p className="mt-4 text-[var(--subtext)] text-xl italic">
            Whatever it is, it's just 3 dollars a month
          </p>
        </div>
      </div>


      <div className="w-[85%] mx-auto flex justify-center gap-8 items-stretch my-20">
        <Card
          cat="pricing"
          title="Basic"
          price="1"
          type = "pricing-normal"
          comment="Billed monthly" 
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
            comment="Billed monthly"
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
          comment="Billed monthly"
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

      <div className="w-[80%] mx-auto my-16 p-10 rounded-2xl bg-[var(--cardbg)] border border-[var(--anyborder)] relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-[var(--subtext)]/12 via-transparent to-black/20 pointer-events-none rounded-2xl"></div>
  <div className="text-center relative z-10 mb-8">
    <h2
      className="text-4xl md:text-5xl font-extrabold text-[var(--text)] tracking-[0.08em] uppercase"
      style={{ fontFamily: "'Pricedown', sans-serif" }}
    >
      Frequently Asked Questions (FAQs)
    </h2>
    <p className="mt-4 text-[var(--subtext)] text-lg italic">
      Read carefully so you don't ask them questions again
    </p>
  </div>

  <div className="w-[70%] mx-auto space-y-4 relative z-10">
    <Card
      cat="piano-shii"
      title="Which plan is right for me?"
      comment="If you're just getting started, the Basic plan gives you everything you need to begin learning. Pro is ideal for learners who want access to more challenges and advanced features. Enterprise is designed for organizations or teams that need deeper analytics, personalized feedback, and comprehensive progress tracking."
    />
    <Card
      cat="piano-shii"
      title="Can I upgrade or downgrade my plan later?"
      comment="Yes. You can change your subscription at any time. When you upgrade, you'll instantly gain access to your new plan's features. If you downgrade, your current plan will remain active until the end of your billing period."
    />
    <Card
      cat="piano-shii"
      title="Are there any hidden fees or long-term contracts?"
      comment="No. Questify uses simple monthly pricing with no hidden fees or long-term commitments. You only pay for the plan you choose and can cancel whenever you like."
    />
    <Card
      cat="piano-shii"
      title="What payment methods do you accept?"
      comment="We support secure payments through Visa, PayPal, Apple Pay, and Vodafone Cash. Choose the payment method that's most convenient for you, and your subscription will be activated as soon as your payment is confirmed."
    />
  </div>
</div>


      <Footer />
    </div>
  );
}

export default Pricing;
