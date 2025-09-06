import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./FeedbackPage.css";

export default function FeedbackPage() {
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
          alert("Feedback sent successfully!");
          setTitle("");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          alert("Oops! Something went wrong." + error);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="feedback-page">
      <div className="feedback-card">
        <h2>Send Feedback</h2>
        <p className="feedback-subtitle">
          We value your input! Please fill out the form below if you have any
          suggestions or feedback.
        </p>
        <form onSubmit={handleSubmit} className="feedback-form">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your email (if you'd like a response)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={loading}
            onClick={(e) => (e.target as HTMLButtonElement).blur()}
          >
            {loading ? "Sending..." : "Send Feedback"}
          </button>
        </form>
      </div>
    </div>
  );
}
