import { Input, InputProps } from "@nextui-org/input";

interface FormInputProps extends InputProps {
  error?: string[] | undefined;
}

const FormInput = ({ error, ...props }: FormInputProps) => {
  return (
    <Input
      color="primary"
      className="w-fit"
      variant="bordered"
      isInvalid={!!error}
      errorMessage={error}
      {...props}
    />
  );
};

export default FormInput;
