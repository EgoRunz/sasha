export interface Token {
  email: string;
}

export const isToken = (value: any): value is Token => {
  return value && typeof value.email === 'string';
};

export interface Payload {
  email: string;
}
export interface Signature {
  expiresIn: string;
}
