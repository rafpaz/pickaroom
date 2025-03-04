"use client";

import { useFormStatus, useFormState } from "react-dom";
import { contactUs } from "./actions";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";
import { FlattenedErrors } from "./contactUsSchema";
import FormInput from "@/components/FormInput";

const initialState = {
  message: "",
  error: "{}",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      aria-disabled={pending}
      variant="solid"
      color="primary"
      className="w-32 center"
    >
      Send
    </Button>
  );
}

export default function ContactUsForm() {
  const [state, formAction] = useFormState(contactUs, initialState);
  const [errors, setErrors] = useState<FlattenedErrors>();

  useEffect(() => {
    setErrors(JSON.parse(state?.error ?? "{}"));
  }, [state]);

  return (
    <form
      className="flex flex-col items-center gap-4 mt-[124px]"
      action={formAction}
    >
      <FormInput
        label="Name"
        name="name"
        variant="bordered"
        error={errors?.fieldErrors?.name}
        isRequired
      />
      <FormInput
        type="email"
        name="email"
        isRequired
        label="Email"
        error={errors?.fieldErrors?.email}
      />
      <FormInput
        label="Content"
        name="content"
        error={errors?.fieldErrors?.content}
      />
      <div className="flex justify-center">
        <SubmitButton />
      </div>
    </form>
  );
}
