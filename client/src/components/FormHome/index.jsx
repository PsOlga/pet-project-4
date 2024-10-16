import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import styles from "./style.module.css";
import imgDogs from "../../assets/form/Dogs.png";
// import { useState } from "react";
// import { Modal } from "@mui/material";
function FormHome() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
    setError,
    clearErrors,
  } = useForm({
    mode: "onSubmit", // Валидация будет срабатывать при отправке формы
  });

  // Функция обработки отправки формы
  function onSubmit(data) {
    // setModalMessage('Congratulations! You received a bonus of 5%.');
    // setShowModal(true);
  }

  const nameValue = watch("Name");

  useEffect(() => {
    const subscription = watch((data) => {
      // Если длина имени больше 20 символов, устанавливаем ошибку
      if (nameValue?.length > 20) {
        setError("Name", {
          type: "maxLength",
          message: "The name length should not be more than 20 characters",
        });
      } else if (nameValue?.length > 0 && nameValue?.length < 3) {
        setError("Name", {
          type: "minLength",
          message: "The name must not be less than 3 characters",
        });
      } else {
        clearErrors("Name");
      }
    });

    return () => subscription.unsubscribe();
  }, [nameValue, setError, clearErrors, watch]);


  return (
    <div className={styles.div_dinamic_form}>

       
        <h1 className={styles.h1_Form}>5% off on the first order</h1>
    
        <div className={styles.dogs_and_form}>
         <div className={styles.div_img_dogs}>
             <img 
             className={styles.img_dogs}
             src={imgDogs} 
             alt="imgDogs" />
            </div>
       <form 
       onSubmit={handleSubmit(onSubmit)} 
       className={styles.dinamic_Form}>
      
        <input className={styles.inputForm}
          {...register("Name", {
            required: {
              value: true,
              message: "This field is required",
            },
            minLength: {
              value: 3,
              message: "The name must not be less than 3 characters",
            },
            maxLength: {
              value: 20,
              message: "The name length should not be more than 20 characters",
            },
          })}
          type="text"
          id="Name"
          onBlur={() => trigger("Name")} // Проверка валидации при потере фокуса
          placeholder="Name"
        />
        {/* Сообщения об ошибках для поля "Name" */}
        {errors.Name && <p className={styles.error_message}>{errors.Name.message}</p>}

        <input className={styles.inputForm}
          {...register("phoneNumber", { 
            required: {
              value: true,
              message: "This field is required",
            },
            minLength: {
              value: 8,
              message: "The number must be at least 8 characters",
            },
          })}
          type="text"
          id="phoneNumber" 
          placeholder="Phone number"
         
        />
        {/* Сообщения об ошибках для поля "Phone number" */}
        {errors.phoneNumber && <p className={styles.error_message}>{errors.phoneNumber.message}</p>}

        <input className={styles.inputForm}
          {...register("Email", { 
            required: {
              value: true,
              message: "This field is required",
            },
          })}
          type="email"
          id="Email"
          placeholder="Email"
         
        />

        <button type="submit" className={styles.btn_form}>Get Discount</button>
      </form>
        </div>
       
    </div>
  );
}

export default FormHome;