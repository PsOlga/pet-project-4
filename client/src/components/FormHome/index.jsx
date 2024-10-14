import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import styles from "./style.module.css";
import imgDogs from "../../assets/form/Dogs.png";

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
    console.log("Данные формы:", data);
  }

  const nameValue = watch("Name");

  useEffect(() => {
    const subscription = watch((data) => {
      // Если длина имени больше 20 символов, устанавливаем ошибку
      if (nameValue?.length > 20) {
        setError("Name", {
          type: "maxLength",
          message: "Длина имени не должна быть больше 20 символов",
        });
      } else if (nameValue?.length > 0 && nameValue?.length < 3) {
        setError("Name", {
          type: "minLength",
          message: "Имя не должно быть менее 3 символов",
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
              message: "Это поле обязательно для заполнения",
            },
            minLength: {
              value: 3,
              message: "Имя не должно быть менее 3 символов",
            },
            maxLength: {
              value: 20,
              message: "Длина имени не должна быть больше 20 символов",
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
              message: "Это поле обязательно для заполнения",
            },
            minLength: {
              value: 8,
              message: "Номер должен быть не менее 8 символов",
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
              message: "Это поле обязательно для заполнения",
            },
          })}
          type="email"
          id="Email"
          placeholder="Email"
         
        />
        {/* Сообщения об ошибках для поля "Email"
        {errors.Email && <p className={styles.error_message_pas}>{errors.Email.message}</p>} */}

        <button type="submit" className={styles.btn_form}>Get Discount</button>
      </form>
        </div>
    </div>
  );
}

export default FormHome;