import { useState } from "react";
import cls from "./Contact.module.scss";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { sendNotification } from "@/shared/config/utils/telegram";
import { ToastContainer, toast } from "react-toastify";
import "./ReactToastify.scss";

const Contact = () => {
  const { t } = useTranslation("contact");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [messageIsSend, setMessageIsSend] = useState(false);

  const handleSubmitForm = (data: {
    name: string;
    email: string;
    message: string;
  }) => {
    const textMessage: string = `${data.name},${data.email},${data.message}`;
    sendNotification(textMessage, "html")
      .then((res) => {
        console.log(JSON.parse(res));
        toast(t("successful_message_sending"), {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((res) => {
        toast.error("Error", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setMessageIsSend(true);
      });
  };

  return (
    <div className={cls.container} id="contacts">
      <ToastContainer />
      <div className={cls.title_of_page}>{t("contact")}</div>
      <div className={cls.form_plus_contacts}>
        <form
          className={cls.contacts_form}
          method="post"
          onSubmit={handleSubmit((data) => handleSubmitForm(data))}
        >
          <input
            className={cls.field}
            id="name"
            placeholder={t("enter_your_name")}
            {...register("name", {
              required: "Name is required",
              minLength: { value: 3, message: "Min lenght is 3" },
            })}
            style={{
              borderColor: errors.name?.message ? "red" : "#8f8f8f00",
            }}
          ></input>
          {/* <span className={cls.errorMessage}>{errors.name?.message}</span> */}
          <input
            className={cls.field}
            placeholder={t("enter_your_email")}
            type="email"
            id="email"
            {...register("email", {
              required: "Email Address is required",
              pattern:
                // eslint-disable-next-line no-useless-escape
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            style={{
              borderColor:
                errors.email?.type || errors.email?.message
                  ? "red"
                  : "#8f8f8f00",
            }}
          ></input>
          <textarea
            className={cls.field}
            placeholder={t("enter_your_message")}
            id="message"
            {...register("message")}
            rows={5}
          ></textarea>
          <button className={cls.button_submit}>
            <span>{t("submit")}</span>
          </button>
        </form>
        <div className={cls.contacts_container}>
          <div>
            <span>Email:</span> aleksandraanisinaweb@gmail.com
          </div>
          <div>
            <span>WhatsApp:</span> 89133856872
          </div>
          <div>
            <span>Telegramm:</span> @aleksandra_anisina
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
