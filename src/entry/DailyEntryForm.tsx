
import {FieldValues, useForm} from "react-hook-form"
import { FormControl, FormLabel, FormErrorMessage} from "@chakra-ui/form-control"
import { Input, Button } from "@chakra-ui/react"

export default function DailyEntryForm() {
    const {handleSubmit, register, formState:{errors, isSubmitting}} = useForm()

    function onSubmit(values: FieldValues) {
        console.log(values)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.entry? false : true}>
                <FormLabel>What did you do today?</FormLabel>
                <Input {...register("entry",
                    {required: "Entry can't be empty", 
                    minLength: {value: 10, message: "Entry must be at least 10 characters long"}})}
                    id="entry" placeholder="I created a new feature" type="text"/>
                <FormErrorMessage>
                    {errors.entry? "Error: " + errors.entry.message : ""}
                </FormErrorMessage>
                
            </FormControl>
            <Button mt={4} type="submit" loading={isSubmitting}>Submit</Button>    

        </form>
    )
}

