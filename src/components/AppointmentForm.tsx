"use client";

import { FormEvent, useMemo, useState } from "react";
import { departments } from "@/data/departments";
import { doctors } from "@/data/doctors";

type AppointmentFormState = {
  fullName: string;
  email: string;
  phone: string;
  department: string;
  doctor: string;
  preferredDate: string;
  preferredTime: string;
  reason: string;
  consent: boolean;
};

type AppointmentErrors = Partial<Record<keyof AppointmentFormState, string>>;

const initialState: AppointmentFormState = {
  fullName: "",
  email: "",
  phone: "",
  department: "",
  doctor: "",
  preferredDate: "",
  preferredTime: "",
  reason: "",
  consent: false
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function AppointmentForm() {
  const [form, setForm] = useState<AppointmentFormState>(initialState);
  const [errors, setErrors] = useState<AppointmentErrors>({});
  const [submitted, setSubmitted] = useState<string | null>(null);

  const availableDoctors = useMemo(() => {
    return doctors.filter((doctor) => doctor.departmentSlug === form.department);
  }, [form.department]);

  const today = new Date().toISOString().split("T")[0];

  const updateField = (name: keyof AppointmentFormState, value: string | boolean) => {
    setForm((current) => ({
      ...current,
      [name]: value,
      ...(name === "department" ? { doctor: "" } : {})
    }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setSubmitted(null);
  };

  const validate = () => {
    const nextErrors: AppointmentErrors = {};

    if (form.fullName.trim().length < 2) {
      nextErrors.fullName = "Enter a full name.";
    }

    if (!emailPattern.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (form.phone.replace(/\D/g, "").length < 7) {
      nextErrors.phone = "Enter a phone number with at least 7 digits.";
    }

    if (!form.department) {
      nextErrors.department = "Choose a department.";
    }

    if (!form.doctor) {
      nextErrors.doctor = "Choose a doctor.";
    }

    if (!form.preferredDate) {
      nextErrors.preferredDate = "Choose a preferred date.";
    } else if (form.preferredDate < today) {
      nextErrors.preferredDate = "Choose today or a future date.";
    }

    if (!form.preferredTime) {
      nextErrors.preferredTime = "Choose a preferred time.";
    }

    if (form.reason.trim().length < 10) {
      nextErrors.reason = "Add a short reason for the visit.";
    }

    if (!form.consent) {
      nextErrors.consent = "Confirm this is a demo request.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setSubmitted(
      `Demo request received for ${form.fullName.trim()} on ${form.preferredDate} at ${form.preferredTime}.`
    );
    setForm(initialState);
    setErrors({});
  };

  return (
    <form className="form-card" noValidate onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Full name
          <input
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            aria-invalid={Boolean(errors.fullName)}
            value={form.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            placeholder="Demo Visitor"
          />
          {errors.fullName ? (
            <span className="error-text" id="fullName-error">
              {errors.fullName}
            </span>
          ) : null}
        </label>

        <label>
          Email
          <input
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={Boolean(errors.email)}
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="visitor@example.com"
          />
          {errors.email ? (
            <span className="error-text" id="email-error">
              {errors.email}
            </span>
          ) : null}
        </label>

        <label>
          Phone
          <input
            aria-describedby={errors.phone ? "phone-error" : undefined}
            aria-invalid={Boolean(errors.phone)}
            type="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="+1 800 555 0142"
          />
          {errors.phone ? (
            <span className="error-text" id="phone-error">
              {errors.phone}
            </span>
          ) : null}
        </label>

        <label>
          Department
          <select
            aria-describedby={errors.department ? "department-error" : undefined}
            aria-invalid={Boolean(errors.department)}
            value={form.department}
            onChange={(event) => updateField("department", event.target.value)}
          >
            <option value="">Select department</option>
            {departments.map((department) => (
              <option key={department.slug} value={department.slug}>
                {department.name}
              </option>
            ))}
          </select>
          {errors.department ? (
            <span className="error-text" id="department-error">
              {errors.department}
            </span>
          ) : null}
        </label>

        <label>
          Doctor
          <select
            aria-describedby={errors.doctor ? "doctor-error" : undefined}
            aria-invalid={Boolean(errors.doctor)}
            value={form.doctor}
            disabled={!form.department}
            onChange={(event) => updateField("doctor", event.target.value)}
          >
            <option value="">Select doctor</option>
            {availableDoctors.map((doctor) => (
              <option key={doctor.slug} value={doctor.name}>
                {doctor.name}
              </option>
            ))}
          </select>
          {errors.doctor ? (
            <span className="error-text" id="doctor-error">
              {errors.doctor}
            </span>
          ) : null}
        </label>

        <label>
          Preferred date
          <input
            aria-describedby={errors.preferredDate ? "preferredDate-error" : undefined}
            aria-invalid={Boolean(errors.preferredDate)}
            type="date"
            min={today}
            value={form.preferredDate}
            onChange={(event) => updateField("preferredDate", event.target.value)}
          />
          {errors.preferredDate ? (
            <span className="error-text" id="preferredDate-error">
              {errors.preferredDate}
            </span>
          ) : null}
        </label>

        <label>
          Preferred time
          <select
            aria-describedby={errors.preferredTime ? "preferredTime-error" : undefined}
            aria-invalid={Boolean(errors.preferredTime)}
            value={form.preferredTime}
            onChange={(event) => updateField("preferredTime", event.target.value)}
          >
            <option value="">Select time</option>
            <option>9:00 AM</option>
            <option>10:30 AM</option>
            <option>12:00 PM</option>
            <option>2:30 PM</option>
            <option>4:00 PM</option>
          </select>
          {errors.preferredTime ? (
            <span className="error-text" id="preferredTime-error">
              {errors.preferredTime}
            </span>
          ) : null}
        </label>
      </div>

      <label>
        Reason for visit
        <textarea
          aria-describedby={errors.reason ? "reason-error" : undefined}
          aria-invalid={Boolean(errors.reason)}
          rows={5}
          value={form.reason}
          onChange={(event) => updateField("reason", event.target.value)}
          placeholder="Briefly describe the appointment request."
        />
        {errors.reason ? (
          <span className="error-text" id="reason-error">
            {errors.reason}
          </span>
        ) : null}
      </label>

      <label className="checkbox-field">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(event) => updateField("consent", event.target.checked)}
        />
        <span>I understand this is a portfolio demo and no real patient data should be entered.</span>
      </label>
      {errors.consent ? <span className="error-text">{errors.consent}</span> : null}

      <button className="button button-primary" type="submit">
        Send demo request
      </button>

      {submitted ? (
        <p className="form-feedback" role="status">
          {submitted}
        </p>
      ) : null}
    </form>
  );
}
