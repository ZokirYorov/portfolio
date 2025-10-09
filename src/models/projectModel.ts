export interface authLogin {
  password: string;
  username: string;
  check: boolean;
}

export interface paymentType {
  id: number;
  title: string;
}

export interface CreatedStudent {
  id?: number | null;
  full_name: string;
  phone: string;
  institute: number | null;
  type: number | null;
  summa: number | null;
}
