import { useState, type FormEvent } from "react";
import type { Route } from "./+types/home";

// Интерфейс для хранения ошибок формы
interface FormError {
  name?: string;
  email?: string;
  message?: string;
}

// Функция для SEO (мета-информация страницы)
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Контакты" },
    { name: "description", content: "Важные Контакты" },
  ];
}


export default function Contacts() {
  // Состояние для хранения данных формы
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormError>({}); // Состояние для хранения ошибок валидации
  const [isSubmitting, setIsSubmitting] = useState(false); // Флаг отправки формы
  const [submitAccess, setSubmitAccess] = useState(false); // Флаг успешной отправки


  const validateForm = () => {
    const newError: FormError = {};

    // Проверка имени: минимум 2 символа, только латиница и кириллица
    if (!formData.name.trim()) {
      newError.name = "Имя не может быть пустым";
    } else if (!/^[a-zA-Zа-яА-Я\s'-]+$/.test(formData.name)) {
      newError.name = "Имя должно содержать только буквы (латиница или кириллица)";
    } else if (formData.name.length < 2) {
      newError.name = "Имя должно быть не менее 2 символов";
    }

    // Проверка email на корректный формат
    if (!formData.email.trim()) {
      newError.email = "Email не может быть пустым";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newError.email = "Некорректный формат email";
    }

    // Проверка сообщения (не должно быть пустым)
    if (!formData.message.trim()) {
      newError.message = "Сообщение не может быть пустым";
    }

    setErrors(newError);
    return Object.keys(newError).length === 0; // Если нет ошибок, возвращаем true
  };

  // Функция обработки отправки формы
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return; // Если валидация не пройдена, прекращаем выполнение

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Эмуляция запроса
      setSubmitAccess(true); // Флаг успешной отправки
      setFormData({ name: "", email: "", message: "" }); // Очищаем форму
    } catch (error) {
      console.log("Ошибка отправки формы: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h1>Связаться с нами</h1>

      {submitAccess && <div>Сообщение отправлено!</div>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Имя</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message">Сообщение</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
        </div>

        <div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Отправка..." : "Отправить"}
          </button>
        </div>
      </form>
    </div>
  );
}