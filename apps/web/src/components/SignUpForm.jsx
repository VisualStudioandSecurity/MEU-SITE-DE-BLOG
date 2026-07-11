import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import pb from '@/lib/pocketbaseClient';
import { Loader2, CheckCircle2, ArrowRight } from 'lucide-react';

const SignUpForm = ({ variant = 'default' }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      await pb.collection('signups').create({ email }, { $autoCancel: false });
      setIsSuccess(true);
      setEmail('');
      toast.success('Check your email for next steps');

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      if (error.data?.data?.email?.code === 'validation_not_unique') {
        toast.error('This email is already registered');
      } else {
        toast.error('Something went wrong. Please try again');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const isCompact = variant === 'compact';

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
      <div
        className={[
          'relative rounded-full p-1.5 transition-all duration-300',
          'surface-elevated shadow-edition',
          'focus-within:shadow-glow focus-within:border-gold/50',
          isCompact ? '' : 'flex-col sm:flex-row',
        ].join(' ')}
      >
        <div className="flex flex-col sm:flex-row items-stretch gap-2">
          <Input
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading || isSuccess}
            required
            className="flex-1 h-12 px-5 text-base bg-transparent border-0 text-foreground placeholder:text-muted-foreground/70 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button
            type="submit"
            disabled={isLoading || isSuccess}
            className="btn-gold h-12 px-6 rounded-full border-0 text-sm font-semibold whitespace-nowrap"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Submitting
              </>
            ) : isSuccess ? (
              <>
                <CheckCircle2 className="w-4 h-4 mr-2" />
                On the list
              </>
            ) : (
              <>
                Get early access
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </div>

      <p
        className={[
          'mt-4 text-xs text-center transition-colors duration-300',
          isSuccess ? 'text-gold' : 'text-muted-foreground',
        ].join(' ')}
      >
        {isSuccess
          ? 'Welcome aboard. Check your inbox for next steps.'
          : 'No spam. Unsubscribe anytime. Your data stays private.'}
      </p>
    </form>
  );
};

export default SignUpForm;
