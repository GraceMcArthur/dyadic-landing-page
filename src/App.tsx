//trigger rebuild
import React from "react";

const App: React.FC = () => {


  const currentYear: number = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-brand-blush text-brand-primary font-body">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          Introducing <span className="text-brand-primary">Dyadic</span>
        </h1>
        <p className="text-lg md:text-xl font-body font-bold max-w-xl mx-auto text-brand-primary mb-6">
          Science-backed tools for better relationships.
        </p>
        <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">
          The internet is full of advice on relationships — but most of it isn’t
          grounded in real science. We consolidate the latest research into
          clear, actionable tools so you can cut through the noise and build
          stronger, more resilient relationships.
        </p>
<div className="flex justify-center mt-6">
  <iframe
    src="https://embeds.beehiiv.com/4036f2f0-0a33-43b1-acc1-6d0920935019"
    data-test-id="beehiiv-embed"
    height="190"
    frameBorder="0"
    scrolling="no"
    style={{
      borderRadius: '12px',
      backgroundColor: 'transparent',
      width: '100%',
      maxWidth: '500px',
      border: '1px solid #e5e7eb',
    }}
  ></iframe>
</div>


</section>

      {/* How It Works Section */}
      <section className="flex flex-col items-center justify-center px-6 py-24 bg-brand-sage text-center text-brand-primary">
        <h2 className="text-3xl font-heading font-semibold mb-10">
          How It Works
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          {/* Step 1 */}
          <div className="flex flex-col items-center max-w-xs">
            <h3 className="text-xl font-heading font-semibold mb-2">
              <span className="font-bold text-2xl">1.</span> Take Guided
              Assessments
            </h3>
            <p className="text-sm">
              Discover your patterns in conflict, stress, emotion, and
              communication.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center max-w-xs">
            <h3 className="text-xl font-heading font-semibold mb-2">
              <span className="font-bold text-2xl">2.</span> Get a Personalised
              Roadmap
            </h3>
            <p className="text-sm">
              Science-backed modules tailored to your style and needs.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center max-w-xs">
            <h3 className="text-xl font-heading font-semibold mb-2">
              <span className="font-bold text-2xl">3.</span> Build Daily Habits
            </h3>
            <p className="text-sm">
              Learn to regulate emotions, manage conflict, and repair
              connection.
            </p>
          </div>
        </div>
      </section>
      {/* Psychology Section */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-heading font-semibold mb-6">
          Backed by Psychology
        </h2>
        <p className="max-w-3xl mx-auto">
          Our approach is rooted in the latest research from the field of
          relationship science. Content is continuously updated to reflect the
          most current evidence on what makes relationships thrive.
        </p>
      </section>

      {/* About Section */}
      {/* About Section */}
      <section className="py-20 px-6 bg-blush text-brand-primary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-heading font-semibold text-center mb-10">
            About
          </h2>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* Left: Photo + Name */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-44 h-44 rounded-full overflow-hidden flex-shrink-0 mb-4">
                <img
                  src="/SS_GraceMcArthur2025-14.jpg"
                  alt="Grace McArthur"
                  className="w-full h-full object-cover object-top scale-[1.3] transform"
                />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold leading-snug">
                  Grace McArthur
                </h3>
                <p className="font-body text-sm italic font-normal leading-snug">
                  Founder, MSc (Psychology), Researcher, Educator.
                </p>
              </div>
            </div>

            {/* Right: About Text */}
            <div className="md:pl-10 mt-6 md:mt-0 max-w-xl text-left">
              <p className="text-lg font-body mb-4">
                <span className="font-heading font-semibold">
                  At Dyadic, we’re passionate about translating complex
                  relationship science into everyday tools people can actually
                  use.
                </span>
              </p>
              <p className="text-lg font-body">
                Grace knows how hard it can be to find clear, science-based
                guidance when your relationship is in crisis. Dyadic fills that
                gap — giving you practical skills to help your relationship
                thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
     <section className="bg-brand-primary text-white text-center py-12 px-6">
  <h2 className="text-3xl font-heading font-semibold mb-4">
    Ready to grow in your relationships?
  </h2>
  <p className="mb-6 max-w-xl mx-auto font-body">
    Sign up to get early access to Dyadic, bonus content, and plenty to add to your relationship toolkit.
  </p>
  <div>
  <div className="flex justify-center mt-6">
  <iframe
    src="https://embeds.beehiiv.com/4036f2f0-0a33-43b1-acc1-6d0920935019?slim=true"
    data-test-id="beehiiv-embed"
    height="52"
    frameBorder="0"
    scrolling="no"
    style={{
      margin: 0,
      borderRadius: '12px',
      backgroundColor: 'transparent',
      width: '100%',
      maxWidth: '500px',
    }}
  ></iframe>
</div>
</div>
      

</section>
      <footer className="text-center text-sm text-brand-primary py-6 font-body">
        © {currentYear} Dyadic. All rights reserved.
      </footer>
  

    </div>
  );
};

export default App;
