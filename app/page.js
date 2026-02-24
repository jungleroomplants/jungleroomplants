import Image from "next/image";
export default function Home() {
  return (
    <main className="bg-[#f3f7f3] text-[#1e3d2f]">

      {/* HERO */}
<section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
  <div className="w-full max-w-5xl rounded-3xl overflow-hidden shadow-sm border bg-white">
    <div className="relative px-8 py-14 md:px-14 md:py-16" style={{ background: "var(--jr-terracotta)" }}>
      <div className="mx-auto flex flex-col items-center gap-6">
        <Image
          src="/logo.png"
          alt="Jungle Room Plants logo"
          width={520}
          height={520}
          priority
          className="w-[260px] md:w-[360px] h-auto"
        />

        <p className="text-base md:text-lg max-w-2xl" style={{ color: "var(--jr-butter)" }}>
          Custom Plant Design & Care — for homes and offices in NYC.
        </p>

        <a
          href="#contact"
          className="px-8 py-4 rounded-full text-lg transition hover:opacity-90"
          style={{ background: "var(--jr-butter)", color: "var(--jr-forest)" }}
        >
          Request a Quote
        </a>
      </div>
    </div>

    <div className="px-8 py-10 md:px-14 md:py-12" style={{ background: "var(--jr-mist)" }}>
      <p className="mx-auto max-w-3xl text-lg md:text-xl" style={{ color: "var(--jr-forest)" }}>
        
      </p>
    </div>
  </div>
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
          Jungle Room began in a low light NYC apartment that was desperate for some green. 
          From there, we've grown into a city-wide plant design and care service with one simple goal - 
          bring plants into your space and keep them thriving.
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
              className="py-4 rounded-full text-lg hover:opacity-90 transition"
style={{ background: "var(--jr-forest)", color: "white" }}
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