import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowLeft, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import aurraLogoUrl from "@/assets/aurra-logo.png";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/bookdemo")({
  head: () => ({
    meta: [
      { title: "Book Your Free Demo — Aurra AI" },
      { name: "description", content: "Schedule a personalized free demo of Aurra AI Telecallers." },
    ],
  }),
  component: BookDemoPage,
});

const bookingSchema = z.object({
  name: z.string().trim().min(1, "Full name is required").max(120, "Name is too long"),
  email: z.string().trim().min(1, "Email address is required").email("Please enter a valid email address").max(200),
  phone: z.string().trim().min(3, "Phone number is required").max(50, "Phone number is too long"),
  company: z.string().trim().max(160, "Company name is too long").optional(),
});

function BookDemoPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);

    const parsed = bookingSchema.safeParse(form);
    if (!parsed.success) {
      const errMap: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0] as string;
        if (field && !errMap[field]) {
          errMap[field] = issue.message;
        }
      });
      setErrors(errMap);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_TELECALLER_API_URL}/waitlist/book-demo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsed.data),
      });

      const result = await response.json();

      if (response.status === 201) {
        setSubmitted(true);
        toast.success("Demo request submitted successfully!");
      } else {
        const errorMsg = result.message || "Failed to submit demo request. Please try again.";
        setApiError(errorMsg);
        toast.error(errorMsg);
      }
    } catch (err: any) {
      console.error("Booking error:", err);
      const fallbackMsg = `Request failed: ${err.message || 'Network error'}`;
      setApiError(fallbackMsg);
      toast.error(fallbackMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased flex flex-col justify-between">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center text-foreground" aria-label="Aurra — Home">
            <img src={aurraLogoUrl} alt="Aurra Logo" className="h-10 sm:h-12 w-auto object-contain" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground/75 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto w-full max-w-xl px-4 py-12 sm:py-20 flex-1 flex flex-col justify-center">
        <div className="rounded-3xl border border-white/15 bg-white/[0.03] p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
          {submitted ? (
            <div className="text-center py-8 space-y-6">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent/20 text-accent">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
                Request Received!
              </h2>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed max-w-md mx-auto">
                Thank you! Your free demo request has been submitted successfully. Our team will reach out to you shortly to schedule your session.
              </p>
              <div className="pt-4">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
                >
                  Return to Homepage
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs uppercase tracking-widest text-accent mb-4">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Interactive Walkthrough</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
                  Book Your Free Demo
                </h1>
                <p className="mt-3 text-sm sm:text-base text-foreground/70">
                  Experience Aurra AI in action. Fill out the details below to schedule your personalized live demo.
                </p>
              </div>

              {apiError && (
                <div className="mb-6 rounded-2xl border border-destructive/40 bg-destructive/10 p-4 text-xs sm:text-sm text-destructive text-center font-medium">
                  {apiError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-wider text-foreground/80">
                    Full Name <span className="text-accent">*</span>
                  </label>
                  <Input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="bg-white/5 border-white/20 text-foreground placeholder:text-foreground/40 h-11 focus-visible:ring-accent"
                    disabled={loading}
                  />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-wider text-foreground/80">
                    Work Email <span className="text-accent">*</span>
                  </label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@company.com"
                    className="bg-white/5 border-white/20 text-foreground placeholder:text-foreground/40 h-11 focus-visible:ring-accent"
                    disabled={loading}
                  />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-wider text-foreground/80">
                    Phone Number <span className="text-accent">*</span>
                  </label>
                  <Input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="bg-white/5 border-white/20 text-foreground placeholder:text-foreground/40 h-11 focus-visible:ring-accent"
                    disabled={loading}
                  />
                  {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-wider text-foreground/80">
                    Company Name
                  </label>
                  <Input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Where do you work?"
                    className="bg-white/5 border-white/20 text-foreground placeholder:text-foreground/40 h-11 focus-visible:ring-accent"
                    disabled={loading}
                  />
                  {errors.company && <p className="text-xs text-destructive mt-1">{errors.company}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.01] hover:bg-foreground/90 disabled:opacity-60 disabled:hover:scale-100 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin text-black" />
                      <span>Submitting Request…</span>
                    </>
                  ) : (
                    <span>Submit Demo Request</span>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-xs text-foreground/50">
        © {new Date().getFullYear()} Aurra AI. All rights reserved.
      </footer>
    </div>
  );
}
