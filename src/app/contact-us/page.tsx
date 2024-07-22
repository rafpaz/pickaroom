"use client";

import { useFormStatus, useFormState } from "react-dom";
import { contactUs } from "./actions";
import { Input } from "@nextui-org/input";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      Send
    </button>
  );
}

export default function ContactUsForm() {
  const [state, formAction] = useFormState(contactUs, initialState);

  return (
    <form className="flex flex-col gap-4 mt-[124px]" action={formAction}>
      <Input isRequired label="Name" name="name" />
      <Input type="email" name="email" isRequired label="Email" />
      <Input label="Content" name="content" />
      <SubmitButton />
      <p aria-live="polite" className="not-sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}
