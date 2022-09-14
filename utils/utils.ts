//write an utility function to allow process.env to use next_public_ prefix
export const getEnv = (key: string) => {
  return process.env[`NEXT_PUBLIC_${key}`];
};
