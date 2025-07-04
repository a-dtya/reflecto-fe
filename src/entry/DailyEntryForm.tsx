
import {FieldValues, useForm} from "react-hook-form"
import { FormControl, FormLabel, FormErrorMessage} from "@chakra-ui/form-control"
import { Input, Button } from "@chakra-ui/react"

type DailyEntryFormProps = {
    onSubmit: (text: string) => void
    isLoading: boolean
    disabled?: boolean
  }
  
  export default function DailyEntryForm({
    onSubmit,
    isLoading,
    disabled = false,
  }: DailyEntryFormProps) {
    const {
      handleSubmit,
      register,
      formState: { errors, isSubmitting },
    } = useForm()
  
    const submitHandler = (values: FieldValues) => {
      onSubmit(values.entry)
    }
  
    return (
      <form onSubmit={handleSubmit(submitHandler)}>
        <FormControl isInvalid={!!errors.entry}>
          <FormLabel>What did you do today?</FormLabel>
          <Input
            {...register("entry", {
              required: "Entry can't be empty",
              minLength: {
                value: 10,
                message: "Entry must be at least 10 characters long",
              },
            })}
            id="entry"
            placeholder="I created a new feature"
            type="text"
            disabled={disabled || isLoading}
          />
          <FormErrorMessage>
            {errors.entry && errors.entry.message?.toString()}
          </FormErrorMessage>
        </FormControl>
  
        <Button
          mt={4}
          type="submit"
          loading={isLoading || isSubmitting}
          disabled={disabled}
          colorScheme="blue"
        >
          Submit
        </Button>
      </form>
    )
  }
