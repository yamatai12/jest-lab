import { BankAccount } from "../src/BankAccount";

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("initial balance should be set correctly", () => {
    expect(account.getBalance()).toBe(100);
  });

  test("deposit should add to the balance", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("withdraw should subtract from the balance", () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test("withdraw should throw an error if insufficient funds", () => {
    expect(() => account.withdraw(200)).toThrow("Insufficient funds");
  });

  test("deposit with negative amount should throw an error", () => {
    expect(() => account.deposit(-10)).toThrow(
      "Deposit amount must be positive"
    );
  });

  test("withdraw with negative amount should throw an error", () => {
    expect(() => account.withdraw(-10)).toThrow(
      "Withdrawal amount must be positive"
    );
  });
});

