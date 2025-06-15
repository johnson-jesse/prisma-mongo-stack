"use client";

import { initialState } from "@app/services/user/actions/type";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useActionState } from "react";
import { Controller, useForm } from "react-hook-form";
import { createUser } from "../services/user/actions/create";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export function CreateUser() {
  const {
    control,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const [state, formAction, pending] = useActionState(createUser, initialState);

  const handleSubmitClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    trigger().then((isValid) => {
      if (!isValid) e.preventDefault();
    });
  };

  console.log(errors)

  return (
    <form noValidate action={formAction}>
      <Card raised sx={{ width: "fit-content", padding: 1 }}>
        <CardHeader title="Create User" />
        <CardContent sx={{ display: "flex", gap: 4 }}>
          <FormControl error={(state.error && state.name === "name") || "name" in errors}>
            <InputLabel htmlFor="user-name">Name</InputLabel>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <OutlinedInput
                  id="user-name"
                  label="Name"
                  size="small"
                  {...field}
                />
              )}
            />
          </FormControl>
          <FormControl required error={(state.error && state.name === "email") || "email" in errors}>
            <InputLabel htmlFor="user-email">Email</InputLabel>
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <OutlinedInput
                  id="user-email"
                  label="Email"
                  size="small"
                  {...field}
                />
              )}
            />
          </FormControl>
          <FormControl
            required
            error={(state.error && state.name === "password") || "password" in errors}
          >
            <InputLabel htmlFor="user-password">Password</InputLabel>
            <Controller
              name="password"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <OutlinedInput
                  id="user-password"
                  label="Password"
                  size="small"
                  {...field}
                />
              )}
            />
          </FormControl>
        </CardContent>
        <CardActions>
          <Button
            type="submit"
            variant="contained"
            size="small"
            loading={pending}
            disabled={pending}
            onClick={handleSubmitClick}
          >
            Create User
          </Button>
          {state?.error && (
            <FormHelperText error={state.error}>{state.message}</FormHelperText>
          )}
        </CardActions>
      </Card>
    </form>
  );
}
