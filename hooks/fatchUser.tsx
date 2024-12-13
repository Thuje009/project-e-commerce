export const fetchUser = async () => {
  try {
    const response = await fetch('/api/auth/me');

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();

    if (!data.user) {
      throw new Error('User not found');
    }

    return data.user;
  } catch (error: any) {
    throw new Error(error.message || 'Failed to fetch user data');
  }
};
