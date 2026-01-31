'use client';
import React, { useState } from 'react';
import { useActionState } from 'react';
import createContact from '@/app/actions/contact';
import { Label } from '@/components/ui/Label';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { Toaster, toast as notify } from 'sonner';

export default function ContactForm() {
  const initialState: any = {};
  const [state, formAction, pending] = useActionState(createContact, initialState);
  const [toast, setToast] = useState<string | null>(null);

  if (state?.success) {
    // use sonner notifications
    if (!pending) notify.success('Message sent! Thank you.');
  }

  return (
    <>
      <form action={formAction} className="space-y-4 max-w-lg">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" rows={4} required />
        </div>

        {state?.errors && (
          <div className="text-sm text-red-600">
            {Object.entries(state.errors).map(([k, v]) => (
              <div key={k}>{k}: {(v as string[])?.join(', ')}</div>
            ))}
          </div>
        )}

        <div>
          <Button type="submit" className="inline-flex items-center" disabled={pending}>
            {pending ? 'Sending...' : 'Send Message'}
          </Button>
        </div>
      </form>

      <Toaster position="bottom-right" />
    </>
  );
}