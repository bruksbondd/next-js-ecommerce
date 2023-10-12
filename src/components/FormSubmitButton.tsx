'use client';
// @ts-expect-error
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { ComponentProps } from 'react';

type FormSubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<'button'>;

export default function FormSubmitButton({
  children,
  className,
  ...props
}: FormSubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      {...props}
      type='submit'
      className={`btn btn-primary ${className}`}
      disabled={pending}
    >
      {pending && <span className='loading loading-spinner loading-md' />}
      {children}
    </button>
  );
}
