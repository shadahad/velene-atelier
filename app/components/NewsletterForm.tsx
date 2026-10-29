"use client";

import { useActionState } from "react";
import { subscribeNewsletter } from "@/app/actions/newsletter";

export default function NewsletterForm() {
  const [state, formAction, isPending] = useActionState(subscribeNewsletter, null);

  return (
    <div className="max-w-md">
      <form action={formAction} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email address"
          className="bg-transparent border border-[#2A2521]/20 px-4 py-3 text-xs tracking-wider text-[#2A2521] placeholder-[#8C827A] focus:outline-none focus:border-[#2A2521]"
        />
        <button
          type="submit"
          disabled={isPending}
          className="bg-[#2A2521] text-[#FAF8F5] px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-black transition-colors disabled:opacity-50"
        >
          {isPending ? "Transmitting..." : "Subscribe"}
        </button>
      </form>
      {state?.message && (
        <p className={`text-[11px] mt-3 ${state.success ? "text-stone-700" : "text-red-700"}`}>
          {state.message}
        </p>
      )}
    </div>
  );
}