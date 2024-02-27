export function checkEmail(email: string): string[] {
  const errors: string[] = [];

  if (email.length === 0) {
    errors.push('Email is required');
  } else if (!email.includes('@')) {
    errors.push('Invalid Email');
  }

  return errors;
}

export function checkPassword(password: string): string[] {
  const errors: string[] = [];
  
  if (password.length < 10) {
    errors.push('Password must be at least 10 characters');
  }

  if (!password.match(/[a-z]/)) {
    errors.push('Must include at least 1 lowercase letter');
  }

  if (!password.match(/[A-Z]/)) {
    errors.push('Must include at least 1 uppercase letter');
  }

  if (!password.match(/[0-9]/)) {
    errors.push('Must include at least 1 number');
  }

  return errors;
}