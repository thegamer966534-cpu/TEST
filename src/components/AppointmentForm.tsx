import { useState, type FormEvent } from 'react';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { services } from '@/config/site';
import { supabase } from '@/lib/supabase';

type FormState = {
  name: string;
  phone: string;
  email: string;
  patientType: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  phone: '',
  email: '',
  patientType: '',
  service: '',
  preferredDate: '',
  preferredTime: '',
  message: '',
};

type Status = 'idle' | 'loading' | 'success' | 'error';

const inputClass =
  'w-full rounded-lg border border-gray-200 bg-ivory px-4 py-3 font-body text-ink placeholder:text-ink-muted/50 transition-all focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-400/20';
const labelClass =
  'block font-body text-sm font-medium text-ink mb-1.5';

export default function AppointmentForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.phone.trim()) next.phone = 'Please enter your phone number.';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = 'Please enter a valid email address.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  if (!validate()) return;

  setStatus('loading');

  try {
    const appointment = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim() || null,
      patient_type: form.patientType || null,
      service: form.service || null,
      preferred_date: form.preferredDate || null,
      preferred_time: form.preferredTime || null,
      message: form.message.trim() || null,
    };

    // 1. Save appointment to Supabase
    const { error: insertError } = await supabase
      .from('appointments')
      .insert(appointment);

    if (insertError) {
      console.error('Appointment submission error:', insertError);
      throw insertError;
    }

    // 2. Send email notification
    const { error: emailError } = await supabase.functions.invoke(
      'send-appointment-email',
      {
        body: appointment,
      }
    );

    if (emailError) {
      console.error('Email notification error:', emailError);

      // The appointment was already saved successfully.
      // We don't fail the whole submission because of the email.
      console.warn(
        'Appointment was saved, but the email notification could not be sent.'
      );
    }

    // 3. Show success message
    setStatus('success');
    setForm(initialState);
    setErrors({});
  } catch (error) {
    console.error('Failed to submit appointment:', error);
    setStatus('error');
  }
};

  if (status === 'success') {
    return (
      <div className="rounded-card bg-sage-50 border border-sage-200 p-8 text-center animate-scale-in">
        <CheckCircle2 className="h-14 w-14 text-sage-600 mx-auto mb-4" />
        <h3 className="font-heading text-xl font-bold text-ink mb-2">
          Request Received
        </h3>
        <p className="text-ink-muted leading-relaxed max-w-md mx-auto">
          Thanks — your request has been received. Our team will contact you to confirm
          availability.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-outline mt-6"
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {status === 'error' && (
        <div className="flex items-center gap-2.5 rounded-lg bg-coral-50 border border-coral-200 px-4 py-3 text-sm text-coral-700">
          <AlertCircle className="h-5 w-5 shrink-0" />
          Something went wrong. Please try again or call our office directly.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-coral-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClass}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-coral-500">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-coral-400">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="(940) 000-0000"
            className={inputClass}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-coral-500">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className={inputClass}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-coral-500">
            {errors.email}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="patientType" className={labelClass}>
            New or Existing Patient
          </label>
          <select
            id="patientType"
            name="patientType"
            value={form.patientType}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select one</option>
            <option value="new">New Patient</option>
            <option value="existing">Existing Patient</option>
          </select>
        </div>

        <div>
          <label htmlFor="service" className={labelClass}>
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="other">Other / Not Sure</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="preferredDate" className={labelClass}>
            Preferred Date
          </label>
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            value={form.preferredDate}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="preferredTime" className={labelClass}>
            Preferred Time
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={form.preferredTime}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select a time</option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="any">Any Time</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Additional Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us a bit about what you need (optional)"
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          'Request Appointment'
        )}
      </button>

      <p className="text-center text-sm text-ink-muted">
        We will contact you to confirm your appointment. For urgent needs, please call
        our office directly.
      </p>
    </form>
  );
}
