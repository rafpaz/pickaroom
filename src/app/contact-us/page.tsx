"use client";

import { useFormStatus, useFormState } from "react-dom";
import { contactUs } from "./actions";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";
import { FlattenedErrors } from "./contactUsSchema";

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
      <Input
        color="primary"
        className="w-fit"
        isRequired
        label="Name"
        name="name"
        variant="bordered"
        isInvalid={!!errors?.fieldErrors?.name}
        errorMessage={errors?.fieldErrors?.name}
      />
      <Input
        color="primary"
        className="w-fit"
        type="email"
        name="email"
        isRequired
        label="Email"
        variant="bordered"
        isInvalid={!!errors?.fieldErrors?.email}
        errorMessage={errors?.fieldErrors?.email}
      />
      <Input
        color="primary"
        className="w-fit"
        label="Content"
        name="content"
        variant="bordered"
        isInvalid={!!errors?.fieldErrors?.content}
        errorMessage={errors?.fieldErrors?.content}
      />
      <div className="flex justify-center">
        <SubmitButton />
      </div>
      {/* <p aria-live="polite" className="not-sr-only" role="status">
        {JSON.parse(JSON.stringify(state?.message))}
      </p> */}
    </form>
  );
}
