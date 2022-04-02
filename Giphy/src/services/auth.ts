export const registerUser = async (
  email: string,
  password: string,
  age: string
) => {
  localStorage.setItem(
    'usersArray',
    JSON.stringify({ email: email, password: password, age: age })
  );
};

export const loginUser = async (email: string, password: string) => {
  const response = await fetch(
    `https://studapi.teachmeskills.by/auth/jwt/create/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }
  );

  const result = await response.json();

  if (response.ok === false) {
    throw result;
  }

  return result;
};
