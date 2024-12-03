import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { MailIcon, PhoneIcon } from 'lucide-react';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xovabplw");
  if (state.succeeded) {
      return <p className='text-center font-bold'>Thanks I&apos;ll get back to you!</p>;
  }
  return (
    <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-4 text-center max-w-[900px] mx-auto">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Feel free to reach out to me for any inquiries or opportunities.
        </p>
      </div>
      <div className="mx-auto w-full max-w-sm space-y-2">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Name"
            className="w-full px-3 py-2 text-sm bg-background rounded-lg focus-visible:ring-0 ring-0 focus-visible:ring-offset-0"
          />
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-3 py-2 text-sm bg-background rounded-lg focus-visible:ring-0 ring-0 focus-visible:ring-offset-0"
          />
           <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          <Textarea
            id="message"
            name="message"
            placeholder="Message"
            className="w-full px-3 py-2 text-sm bg-background rounded-lg focus-visible:ring-0 ring-0 focus-visible:ring-offset-0"
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
          <Button type="submit" className="w-full" disabled={state.submitting}>
            Submit
          </Button>
        </form>
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <div className="flex items-center gap-2">
            <MailIcon className="h-4 w-4" />
            <span>edgar.debug@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon className="h-4 w-4" />
            <span>+1 (416) 822-3939</span>
          </div>
        </div>
      </div>
    </div>
  );
}