// mockBackend.ts

export interface User {
    id: number;
    username: string;
    password: string;
  }
  
  const users: User[] = [
    { id: 1, username: "keerthi", password: "hi" },
    { id: 2, username: "user2", password: "password2" },
  ];
  
  export const authenticateUser = (username: string, password: string): Promise<User> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = users.find(
          (user) => user.username === username && user.password === password
        );
        if (user) {
          resolve(user);
        } else {
          reject(new Error("Invalid username or password"));
        }
      }, 1000); // Simulating delay
    });
  };
  