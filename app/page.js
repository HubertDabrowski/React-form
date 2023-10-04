"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import { useForm, useController } from "react-hook-form";
import Dropdown from "../conponents/Dropdown";
import Datepicker from "../conponents/Datepicker";
import Button from "../conponents/Button";
import Input from "../conponents/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { string, date, z } from "zod";
import dayjs from "dayjs";

const options = [
  "Afryka",
  "Ameryka Południowa",
  "Ameryka Północna",
  "Antarktyda",
  "Australia",
  "Azja",
  "Europa",
];

const schema = z
  .object({
    continent: string().optional(),
    name: string().nonempty("To pole jest wymagane"),
    surname: string().optional(),
    birthDate: date().optional(),
  })
  .refine(
    (data) =>
      (data.continent === "Europa" && data.surname.length >= 2) ||
      data.continent !== "Europa",
    { message: "Nie spełnione kryteria", path: ["surname"] }
  );

export default function Form() {
  const user = {
    continent: "",
    name: "",
    surname: "",
    birthDate: undefined,
  };

  const { register, control, handleSubmit, formState } = useForm({
    defaultValues: user,
    resolver: zodResolver(schema),
  });

  const { errors } = formState;

  const { field: dropdown } = useController({
    name: "continent",
    control,
    defaultValue: "",
  });

  const { field: datepick } = useController({
    name: "birthDate",
    control,
  });

  const sendData = (data) => {
    console.log(data);
    alert("sukces");
  };

  const [isOverSixty, setIsOverSixty] = useState(
    datepick.value &&
      dayjs().toDate().getFullYear() - datepick.value.getFullYear() > 60
  );

  useEffect(() => {
    setIsOverSixty(
      datepick.value &&
        dayjs().toDate().getFullYear() - datepick.value.getFullYear() > 60
    );
  }, [datepick.value]);

  return (
    <main className={styles.main}>
      <form
        className={styles.form}
        onSubmit={handleSubmit(sendData)}
        data-is-older={isOverSixty}
      >
        <span className={styles.form_description}>Proszę uzupełnić dane:</span>
        <Dropdown
          options={options}
          controller={dropdown}
          isBiggerFont={isOverSixty}
        />
        <span className={styles.form__error}>{errors.continent?.message}</span>
        <Input
          register={register}
          name="name"
          label="Imie"
          isBiggerFont={isOverSixty}
        />
        <span className={styles.form__error}>{errors.name?.message}</span>
        <Input
          register={register}
          name="surname"
          label="Nazwisko"
          isBiggerFont={isOverSixty}
        />
        <span className={styles.form__error}>{errors.surname?.message}</span>
        <Datepicker controller={datepick} isBiggerFont={isOverSixty} />
        <span className={styles.form__error}>{errors.birthDate?.message}</span>
        <div className={styles.form_button}>
          <Button isBiggerFont={isOverSixty} isDisabled={datepick.value > dayjs().toDate()} />
        </div>
      </form>
    </main>
  );
}
