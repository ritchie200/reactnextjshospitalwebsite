"use client";

import { FormEvent, useState } from "react";

type ContactFormState = {
  name: string;
  email: string;
  topic: string;
  message: string;
};

type ContactErrors = Partial<Record<keyof ContactFormState, string>>;

const initialState: ContactFormState = {
  name: "",
  email: "",
  topic: "",
  message: ""
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (name: keyof ContactFormState, value: string) => {
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setSubmitted(false);
  };

  const validate = () => {
    const nextErrors: ContactErrors = {};

    if (form.name.trim().length < 2) {
      nextErrors.name = "Enter your name.";
    }

    if (!emailPattern.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.topic) {
      nextErrors.topic = "Choose a topic.";
    }

    if (form.message.trim().length < 10) {
      nextErrors.message = "Enter at least 10 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setSubmitted(true);
    setForm(initialState);
    setErrors({});
  };

  return (
    <form className="form-card" noValidate onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Name
          <input
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            aria-invalid={Boolean(errors.name)}
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Your name"
          />
          {errors.name ? (
            <span className="error-text" id="contact-name-error">
              {errors.name}
            </span>
          ) : null}
        </label>

        <label>
          Email
          <input
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            aria-invalid={Boolean(errors.email)}
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="you@example.com"
          />
          {errors.email ? (
            <span className="error-text" id="contact-email-error">
              {errors.email}
            </span>
          ) : null}
        </label>
      </div>

      <label>
        Topic
        <select
          aria-describedby={errors.topic ? "contact-topic-error" : undefined}
          aria-invalid={Boolean(errors.topic)}
          value={form.topic}
          onChange={(event) => updateField("topic", event.target.value)}
        >
          <option value="">Select topic</option>
          <option>Appointments</option>
          <option>Departments</option>
          <option>Billing question</option>
          <option>General message</option>
        </select>
        {errors.topic ? (
          <span className="error-text" id="contact-topic-error">
            {errors.topic}
          </span>
        ) : null}
      </label>

      <label>
        Message
        <textarea
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          aria-invalid={Boolean(errors.message)}
          rows={6}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="How can the front desk help?"
        />
        {errors.message ? (
          <span className="error-text" id="contact-message-error">
            {errors.message}
          </span>
        ) : null}
      </label>

      <button className="button button-primary" type="submit">
        Send message
      </button>

      {submitted ? (
        <p className="form-feedback" role="status">
          Demo contact message received.
        </p>
      ) : null}
    </form>
  );
}
