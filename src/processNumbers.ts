export const processNumbers = (numbers: number[]): number[] => {
    return numbers.map((num) => {
      // 擬似的に時間がかかる処理
      const endTime = Date.now() + 500; // 0.5秒後の時間を取得
      while (Date.now() < endTime) {} 
      return num * 2;
    });
  };
  