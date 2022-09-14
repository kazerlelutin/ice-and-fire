export default interface Ierror {
  message: string;
  response: {
    status: number;
    data:string
  };
}
