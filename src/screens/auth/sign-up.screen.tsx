import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { SignUpForm } from './components/features/forms/sign-up/sign-up.form';

export function SignUpScreen() {
  return (
    <Card className="shadow-2xl">
      <CardHeader>
        <CardTitle>Criar Conta</CardTitle>
        <CardDescription>Comece a vender suas peças hoje</CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpForm />
      </CardContent>
    </Card>
  );
}
