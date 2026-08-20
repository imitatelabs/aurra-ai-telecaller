import { useState, type ReactNode } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  name: z.string().trim().min(1, "Enter your name").max(120),
  contact: z.string().trim().min(3, "Enter email or phone").max(200),
  company: z.string().trim().min(1, "Enter your company").max(160),
});

export function WaitlistDialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", contact: "", company: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    const { error } = await supabase.from("waitlist").insert(parsed.data);
    setLoading(false);
    if (error) {
      toast.error("Something went wrong. Please try again.");
      return;
    }
    toast.success("You're on the waitlist! We'll be in touch soon.");
    setForm({ name: "", contact: "", company: "" });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-[oklch(0.22_0.02_60)] border-white/20 text-white sm:max-w-md shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold tracking-tight text-white">Join the waitlist</DialogTitle>
          <DialogDescription className="text-white/80">
            Be first to hire an Aurra AI telecaller. We'll reach out within a day.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="mt-2 space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs uppercase tracking-widest text-white/70">Name</label>
            <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus-visible:ring-white/40" />
            {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
          </div>
          <div className="space-y-1.5">
            <label className="text-xs uppercase tracking-widest text-white/70">Company</label>
            <Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Where do you work?" className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus-visible:ring-white/40" />
            {errors.company && <p className="text-xs text-destructive">{errors.company}</p>}
          </div>
          <div className="space-y-1.5">
            <label className="text-xs uppercase tracking-widest text-white/70">Contact</label>
            <Input value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} placeholder="Email or phone" className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus-visible:ring-white/40" />
            {errors.contact && <p className="text-xs text-destructive">{errors.contact}</p>}
          </div>
          <button type="submit" disabled={loading} className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.01] disabled:opacity-60">
            {loading ? "Joining…" : "Join waitlist"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}