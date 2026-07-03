import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { MapPin, Phone, Mail, MessageCircle, ArrowUpRight, Check } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const schema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  company: z.string().min(1, "Company name required"),
  email: z.string().email("Enter a valid email"),
  mobile: z.string().min(6, "Enter a valid mobile number"),
  city: z.string().min(2, "City required"),
  industry: z.string().min(1, "Select an industry"),
  subject: z.string().min(1, "Select a subject"),
  message: z.string().min(10, "Please provide at least 10 characters"),
});

const industries = ["Automotive", "Aerospace & Defence", "Renewable Energy", "Medical Devices", "Manufacturing", "Research & Academia", "Other"];
const subjects = ["Request a Quote", "Testing Enquiry", "Product Enquiry", "Calibration Services", "Partnership", "General Enquiry"];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    // Frontend-only: simulate submission
    await new Promise((r) => setTimeout(r, 700));
    setSent(true);
    toast.success("Inquiry received. Our engineering team will contact you within 24 hours.");
    reset();
    setTimeout(() => setSent(false), 6000);
  };

  const field =
    "w-full bg-transparent border-b border-line focus:border-ink py-3 outline-none placeholder:text-muted2 text-ink transition-colors";
  const label = "font-mono text-[10px] uppercase tracking-widest text-muted";

  return (
    <div>
      <section className="relative pt-32 pb-16 overflow-hidden" data-testid="contact-hero">
        <div className="absolute inset-0 blueprint-bg opacity-70" />
        <div className="relative max-w-[1600px] mx-auto px-6 md:px-14">
          <SectionLabel index={1} label="Contact Us" />
          <h1 className="font-display font-semibold text-5xl md:text-8xl leading-[0.9] tracking-tightest max-w-5xl">
            Get in touch with our <span className="text-red">engineering experts.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-muted leading-relaxed">
            Whether you're looking for material testing, mechanical testing, structural testing, medical device testing or engineering consultation, our experienced team is ready to help.
          </p>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 md:px-14 py-16 grid grid-cols-12 gap-8" data-testid="contact-body">
        {/* LEFT — INFO */}
        <div className="col-span-12 md:col-span-5">
          <SectionLabel index={2} label="Reach The Lab" />
          <div className="border-t border-ink">
            {[
              { icon: MapPin, label: "Address", value: "BISS Labs, Peenya Industrial Area,\nBengaluru — Karnataka, India" },
              { icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX", mono: true },
              { icon: Mail, label: "Email", value: "info@bisslabs.com", mono: true },
              { icon: MessageCircle, label: "WhatsApp", value: "Chat with our engineering support team", href: "https://wa.me/91XXXXXXXXXX" },
            ].map((row, i) => (
              <div key={row.label} className="border-b border-line py-6 flex gap-4 items-start" data-testid={`contact-info-${row.label.toLowerCase()}`}>
                <div className="w-10 h-10 border border-ink grid place-items-center shrink-0">
                  <row.icon size={16} />
                </div>
                <div className="flex-1">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-red">/ {String(i + 1).padStart(2, "0")} · {row.label}</div>
                  {row.href ? (
                    <a href={row.href} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 font-display text-xl hover:text-red transition-colors">
                      {row.value} <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <div className={`mt-2 ${row.mono ? "font-mono text-lg" : "font-display text-xl whitespace-pre-line"}`}>{row.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <SectionLabel index={3} label="Locate Our Lab" />
            <div className="border border-line aspect-[4/3] w-full overflow-hidden">
              <iframe
                title="BISS Labs Location — Peenya, Bengaluru"
                src="https://www.google.com/maps?q=Peenya+Industrial+Area,+Bengaluru&output=embed"
                className="w-full h-full grayscale"
                loading="lazy"
                data-testid="contact-map"
              />
            </div>
          </div>
        </div>

        {/* RIGHT — FORM */}
        <div className="col-span-12 md:col-span-7 md:pl-10">
          <SectionLabel index={4} label="Send Us Your Requirements" />
          <h2 className="font-display text-3xl md:text-5xl tracking-tighter leading-[0.95]">
            Tell us about your <span className="text-red">testing needs.</span>
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6" data-testid="contact-form" noValidate>
            {[
              { name: "fullName", label: "Full Name", placeholder: "Jane Engineer" },
              { name: "company", label: "Company Name", placeholder: "Your Organisation" },
              { name: "email", label: "Email Address", placeholder: "you@company.com", type: "email" },
              { name: "mobile", label: "Mobile Number", placeholder: "+91 …", type: "tel" },
              { name: "city", label: "City", placeholder: "Bengaluru" },
            ].map((f) => (
              <div key={f.name}>
                <div className={label}>/ {f.label}</div>
                <input
                  type={f.type || "text"}
                  placeholder={f.placeholder}
                  className={field}
                  data-testid={`contact-input-${f.name}`}
                  {...register(f.name)}
                />
                {errors[f.name] && <div className="mt-1 text-xs text-red">{errors[f.name]?.message}</div>}
              </div>
            ))}

            <div>
              <div className={label}>/ Industry</div>
              <select className={field} data-testid="contact-input-industry" {...register("industry")} defaultValue="">
                <option value="" disabled>Select industry</option>
                {industries.map((i) => <option key={i}>{i}</option>)}
              </select>
              {errors.industry && <div className="mt-1 text-xs text-red">{errors.industry.message}</div>}
            </div>

            <div className="md:col-span-2">
              <div className={label}>/ Subject</div>
              <select className={field} data-testid="contact-input-subject" {...register("subject")} defaultValue="">
                <option value="" disabled>Select subject</option>
                {subjects.map((s) => <option key={s}>{s}</option>)}
              </select>
              {errors.subject && <div className="mt-1 text-xs text-red">{errors.subject.message}</div>}
            </div>

            <div className="md:col-span-2">
              <div className={label}>/ Message</div>
              <textarea
                rows={5}
                placeholder="Tell us about your material, coupons, standards & turnaround…"
                className={`${field} resize-none`}
                data-testid="contact-input-message"
                {...register("message")}
              />
              {errors.message && <div className="mt-1 text-xs text-red">{errors.message.message}</div>}
            </div>

            <div className="md:col-span-2 flex items-center gap-4 mt-2">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 bg-ink text-paper px-8 py-4 font-mono text-xs uppercase tracking-widest hover:bg-red transition-colors disabled:opacity-60"
                data-testid="contact-submit"
              >
                {isSubmitting ? "Sending…" : sent ? (<><Check size={14} /> Sent</>) : (<>Submit Inquiry <ArrowUpRight size={14} /></>)}
              </motion.button>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted">Response within 24 hours</div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
