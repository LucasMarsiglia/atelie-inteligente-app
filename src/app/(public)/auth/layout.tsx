import { AuthLayout } from '@/components/layouts/auth-layout/auth-layout';

export default function AuthLayoutRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthLayout>{children}</AuthLayout>;
}
