export default function Home() {
  return (
    <main className="bg-[#f3f7f3] text-[#1e3d2f]">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-6">
          JUNGLE ROOM PLANTS
        </h1>

        <p className="text-xl md:text-2xl max-w-2xl mb-6">
          Custom Plant Design & Care
        </p>

        <p className="text-lg max-w-2xl mb-10">
          Bring life into your space with thoughtfully designed plant layouts.
        </p>

        <a
          href="#contact"
          className="bg-[#1e3d2f] text-white px-8 py-4 rounded-full text-lg hover:opacity-80 transition"
        >
          Request a Quote
        </a>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">Services</h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto text-left">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Plant Design & Installation</h3>
            <p>
              From a single statement plant to a full room transformation,
              I design plant layouts that feel natural, balanced, and built
              to thrive in your specific environment.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Ongoing Maintenance</h3>
            <p>
              Weekly, biweekly, or monthly care — watering, pruning,
              soil refreshes, and proactive health checks to keep your plants thriving.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Plant Rescue & Troubleshooting</h3>
            <p>
              Overwatered? Underwatered? Pest issues?
              I diagnose and restore struggling plants back to health.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Repotting & Soil Upgrades</h3>
            <p>
              Custom soil blends, drainage optimization,
              and proper pot sizing for long-term success.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold mb-4">Office Plant Programs</h3>
            <p>
              Recurring plant services for offices, studios, and commercial spaces
              across Brooklyn, Manhattan, and Queens.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 bg-[#f3f7f3] text-center">
        <h2 className="text-4xl font-bold mb-8">About Jungle Room</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          Jungle Room Plants was built around a simple idea:
          plants should make your space feel alive — not stressful.
          I create plant setups that are beautiful, sustainable,
          and realistic for how you actually live and work.
        </p>

        <p className="mt-6 text-lg">
          Serving homes and offices in Brooklyn, Manhattan, and Queens.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-8">Get Started</h2>

        <p className="mb-6">
          Tell me about your space and what you're looking for.
        </p>

        <div className="max-w-xl mx-auto">
          <form
            action="https://formsubmit.co/jungleroomplants@gmail.com"
            method="POST"
            className="flex flex-col gap-4"
          >
            <input type="text" name="name" placeholder="Your Name" required className="p-4 border rounded" />
            <input type="email" name="email" placeholder="Your Email" required className="p-4 border rounded" />
            <textarea name="message" placeholder="Tell me about your space..." required rows="4" className="p-4 border rounded" />

            {/* helps reduce spam */}
            <input type="hidden" name="_subject" value="New Jungle Room Plants Inquiry" />
            <input type="text" name="_honey" className="hidden" tabIndex="-1" autoComplete="off" />
            <input type="hidden" name="_captcha" value="false" />

            <button
              type="submit"
              className="bg-[#1e3d2f] text-white py-4 rounded-full text-lg hover:opacity-80 transition"
            >
              Send Inquiry
            </button>
          </form>
        </div>

        <div className="mt-10 text-lg">
          <p>Email: jungleroomplants@gmail.com</p>
          <p>Text: (614) 226-5340</p>
        </div>
      </section>

    </main>
  );
}