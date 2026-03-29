'use client';

export default function AboutPreview() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div>
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary/80 mb-4 [letter-spacing:0.2em]">Our Expertise</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] mb-6 tracking-[-0.02em]">
              Beauty & Personal Care Distribution
            </h2>
            <div className="w-12 h-1 bg-linear-to-r from-primary to-accent rounded-full mb-8" />

            <p className="text-base text-foreground leading-relaxed mb-5">
              Margo Group is a Jordan-based company headquartered in Amman, specializing in the{' '}
              <span className="font-semibold text-foreground">import, marketing, sales, and nationwide distribution</span>{' '}
              of international beauty, skincare, cosmetics, and personal care brands.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-10">
              We act as a strategic partner for global manufacturers seeking to enter or expand within the Jordanian market.
              Beyond logistics and retail distribution, we support our partner brands with marketing, brand development,
              merchandising, and market positioning to ensure long-term growth and strong local presence.
            </p>


          </div>

          {/* Right — video */}
          <div className="relative hidden lg:block">
            {/* Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-cyan-50 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-orange-50 blur-3xl" />

            {/* Video - Full screen */}
            <video
              className="w-full h-full object-cover rounded-xl"
              autoPlay
              muted
              loop
              style={{ minHeight: '400px' }}
            >
              <source src="/images/video2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

        </div>
      </div>
    </section>
  );
}
