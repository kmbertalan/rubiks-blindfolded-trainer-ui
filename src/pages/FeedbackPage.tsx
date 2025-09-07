import { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import "./FeedbackPage.css";

export default function FeedbackPage() {
  const { t } = useTranslation();
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    const templateParams = { title, name, email, message };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          alert(t('feedback.successMessage'));
          setTitle("");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          alert(t('feedback.errorMessage') + error);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="feedback-page">
      <div className="feedback-card">
        <h2>{t('feedback.title')}</h2>
        <p className="feedback-subtitle">
          {t('feedback.subtitle')}
        </p>
        <form onSubmit={handleSubmit} className="feedback-form">
          <input
            type="text"
            placeholder={t('feedback.placeholders.title')}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder={t('feedback.placeholders.name')}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder={t('feedback.placeholders.email')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder={t('feedback.placeholders.message')}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={loading}
            onClick={(e) => (e.target as HTMLButtonElement).blur()}
          >
            {loading ? t('feedback.sending') : t('feedback.sendFeedback')}
          </button>
        </form>
      </div>
    </div>
  );
}
