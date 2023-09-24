export const fetchData = async (id: number): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Data for ID: ${id}`);
    }, 2000); // 2秒待機
  });
};
