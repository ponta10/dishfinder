import React, { ReactNode } from 'react'
import {
  useForm,
  SubmitHandler,
  RegisterOptions,
  UseFormReturn,
  FieldValues,
} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ZodSchema } from 'zod'

interface FormProps<T extends FieldValues> {
  children: (methods: UseFormReturn<T>) => ReactNode
  options?: RegisterOptions
  schema: ZodSchema<T>
  onSubmit: SubmitHandler<T>
}

const Form: React.FC<FormProps<Record<string, any>>> = ({
  children,
  options,
  schema,
  onSubmit,
}) => {
  const methods = useForm({
    ...options,
    resolver: zodResolver(schema),
  })

  const { handleSubmit } = methods

  return <form onSubmit={handleSubmit(onSubmit)}>{children(methods)}</form>
}

export default Form
