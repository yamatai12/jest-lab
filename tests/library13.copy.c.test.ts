import { Library, Book, User } from "../src/library";

describe("Library", () => {
  let library: Library;
  const sampleBook: Book = {
    id: "1",
    title: "Sample Book",
    author: "Author",
    isBorrowed: false,
  };

  beforeEach(() => {
    library = new Library();
    library.addBook(sampleBook);
  });

  test("can add a book", () => {
    const newBook: Book = {
      id: "2",
      title: "New Book",
      author: "New Author",
      isBorrowed: false,
    };
    library.addBook(newBook);
    expect(library.listBooks()).toContainEqual(newBook);
  });

  test("can remove a book", () => {
    library.removeBook(sampleBook.id);
    expect(library.listBooks()).not.toContainEqual(sampleBook);
  });

  test("can borrow a book", () => {
    library.borrowBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(true);
  });

  test("can return a borrowed book", () => {
    library.borrowBook(sampleBook.id);
    library.returnBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(false);
  });

  // ... Additional tests ...
});

describe("User", () => {
  let user: User;

  beforeEach(() => {
    user = new User("U1", "John Doe");
  });

  test("can borrow a book", () => {
    user.borrowBook("1");
    expect(user.listBorrowedBooks()).toContain("1");
  });

  test("can return a borrowed book", () => {
    user.borrowBook("1");
    user.returnBook("1");
    expect(user.listBorrowedBooks()).not.toContain("1");
  });

  // ... Additional tests ...
});

describe("Library", () => {
  let library: Library;
  const sampleBook: Book = {
    id: "1",
    title: "Sample Book",
    author: "Author",
    isBorrowed: false,
  };

  beforeEach(() => {
    library = new Library();
    library.addBook(sampleBook);
  });

  test("can add a book", () => {
    const newBook: Book = {
      id: "2",
      title: "New Book",
      author: "New Author",
      isBorrowed: false,
    };
    library.addBook(newBook);
    expect(library.listBooks()).toContainEqual(newBook);
  });

  test("can remove a book", () => {
    library.removeBook(sampleBook.id);
    expect(library.listBooks()).not.toContainEqual(sampleBook);
  });

  test("can borrow a book", () => {
    library.borrowBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(true);
  });

  test("can return a borrowed book", () => {
    library.borrowBook(sampleBook.id);
    library.returnBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(false);
  });

  // ... Additional tests ...
});

describe("User", () => {
  let user: User;

  beforeEach(() => {
    user = new User("U1", "John Doe");
  });

  test("can borrow a book", () => {
    user.borrowBook("1");
    expect(user.listBorrowedBooks()).toContain("1");
  });

  test("can return a borrowed book", () => {
    user.borrowBook("1");
    user.returnBook("1");
    expect(user.listBorrowedBooks()).not.toContain("1");
  });

  // ... Additional tests ...
});

describe("Library", () => {
  let library: Library;
  const sampleBook: Book = {
    id: "1",
    title: "Sample Book",
    author: "Author",
    isBorrowed: false,
  };

  beforeEach(() => {
    library = new Library();
    library.addBook(sampleBook);
  });

  test("can add a book", () => {
    const newBook: Book = {
      id: "2",
      title: "New Book",
      author: "New Author",
      isBorrowed: false,
    };
    library.addBook(newBook);
    expect(library.listBooks()).toContainEqual(newBook);
  });

  test("can remove a book", () => {
    library.removeBook(sampleBook.id);
    expect(library.listBooks()).not.toContainEqual(sampleBook);
  });

  test("can borrow a book", () => {
    library.borrowBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(true);
  });

  test("can return a borrowed book", () => {
    library.borrowBook(sampleBook.id);
    library.returnBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(false);
  });

  // ... Additional tests ...
});

describe("User", () => {
  let user: User;

  beforeEach(() => {
    user = new User("U1", "John Doe");
  });

  test("can borrow a book", () => {
    user.borrowBook("1");
    expect(user.listBorrowedBooks()).toContain("1");
  });

  test("can return a borrowed book", () => {
    user.borrowBook("1");
    user.returnBook("1");
    expect(user.listBorrowedBooks()).not.toContain("1");
  });

  // ... Additional tests ...
});

describe("Library", () => {
  let library: Library;
  const sampleBook: Book = {
    id: "1",
    title: "Sample Book",
    author: "Author",
    isBorrowed: false,
  };

  beforeEach(() => {
    library = new Library();
    library.addBook(sampleBook);
  });

  test("can add a book", () => {
    const newBook: Book = {
      id: "2",
      title: "New Book",
      author: "New Author",
      isBorrowed: false,
    };
    library.addBook(newBook);
    expect(library.listBooks()).toContainEqual(newBook);
  });

  test("can remove a book", () => {
    library.removeBook(sampleBook.id);
    expect(library.listBooks()).not.toContainEqual(sampleBook);
  });

  test("can borrow a book", () => {
    library.borrowBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(true);
  });

  test("can return a borrowed book", () => {
    library.borrowBook(sampleBook.id);
    library.returnBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(false);
  });

  // ... Additional tests ...
});

describe("User", () => {
  let user: User;

  beforeEach(() => {
    user = new User("U1", "John Doe");
  });

  test("can borrow a book", () => {
    user.borrowBook("1");
    expect(user.listBorrowedBooks()).toContain("1");
  });

  test("can return a borrowed book", () => {
    user.borrowBook("1");
    user.returnBook("1");
    expect(user.listBorrowedBooks()).not.toContain("1");
  });

  // ... Additional tests ...
});

describe("Library", () => {
  let library: Library;
  const sampleBook: Book = {
    id: "1",
    title: "Sample Book",
    author: "Author",
    isBorrowed: false,
  };

  beforeEach(() => {
    library = new Library();
    library.addBook(sampleBook);
  });

  test("can add a book", () => {
    const newBook: Book = {
      id: "2",
      title: "New Book",
      author: "New Author",
      isBorrowed: false,
    };
    library.addBook(newBook);
    expect(library.listBooks()).toContainEqual(newBook);
  });

  test("can remove a book", () => {
    library.removeBook(sampleBook.id);
    expect(library.listBooks()).not.toContainEqual(sampleBook);
  });

  test("can borrow a book", () => {
    library.borrowBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(true);
  });

  test("can return a borrowed book", () => {
    library.borrowBook(sampleBook.id);
    library.returnBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(false);
  });

  // ... Additional tests ...
});

describe("User", () => {
  let user: User;

  beforeEach(() => {
    user = new User("U1", "John Doe");
  });

  test("can borrow a book", () => {
    user.borrowBook("1");
    expect(user.listBorrowedBooks()).toContain("1");
  });

  test("can return a borrowed book", () => {
    user.borrowBook("1");
    user.returnBook("1");
    expect(user.listBorrowedBooks()).not.toContain("1");
  });

  // ... Additional tests ...
});

describe("Library", () => {
  let library: Library;
  const sampleBook: Book = {
    id: "1",
    title: "Sample Book",
    author: "Author",
    isBorrowed: false,
  };

  beforeEach(() => {
    library = new Library();
    library.addBook(sampleBook);
  });

  test("can add a book", () => {
    const newBook: Book = {
      id: "2",
      title: "New Book",
      author: "New Author",
      isBorrowed: false,
    };
    library.addBook(newBook);
    expect(library.listBooks()).toContainEqual(newBook);
  });

  test("can remove a book", () => {
    library.removeBook(sampleBook.id);
    expect(library.listBooks()).not.toContainEqual(sampleBook);
  });

  test("can borrow a book", () => {
    library.borrowBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(true);
  });

  test("can return a borrowed book", () => {
    library.borrowBook(sampleBook.id);
    library.returnBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(false);
  });

  // ... Additional tests ...
});

describe("User", () => {
  let user: User;

  beforeEach(() => {
    user = new User("U1", "John Doe");
  });

  test("can borrow a book", () => {
    user.borrowBook("1");
    expect(user.listBorrowedBooks()).toContain("1");
  });

  test("can return a borrowed book", () => {
    user.borrowBook("1");
    user.returnBook("1");
    expect(user.listBorrowedBooks()).not.toContain("1");
  });

  // ... Additional tests ...
});

describe("Library", () => {
  let library: Library;
  const sampleBook: Book = {
    id: "1",
    title: "Sample Book",
    author: "Author",
    isBorrowed: false,
  };

  beforeEach(() => {
    library = new Library();
    library.addBook(sampleBook);
  });

  test("can add a book", () => {
    const newBook: Book = {
      id: "2",
      title: "New Book",
      author: "New Author",
      isBorrowed: false,
    };
    library.addBook(newBook);
    expect(library.listBooks()).toContainEqual(newBook);
  });

  test("can remove a book", () => {
    library.removeBook(sampleBook.id);
    expect(library.listBooks()).not.toContainEqual(sampleBook);
  });

  test("can borrow a book", () => {
    library.borrowBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(true);
  });

  test("can return a borrowed book", () => {
    library.borrowBook(sampleBook.id);
    library.returnBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(false);
  });

  // ... Additional tests ...
});

describe("User", () => {
  let user: User;

  beforeEach(() => {
    user = new User("U1", "John Doe");
  });

  test("can borrow a book", () => {
    user.borrowBook("1");
    expect(user.listBorrowedBooks()).toContain("1");
  });

  test("can return a borrowed book", () => {
    user.borrowBook("1");
    user.returnBook("1");
    expect(user.listBorrowedBooks()).not.toContain("1");
  });

  // ... Additional tests ...
});

describe("Library", () => {
  let library: Library;
  const sampleBook: Book = {
    id: "1",
    title: "Sample Book",
    author: "Author",
    isBorrowed: false,
  };

  beforeEach(() => {
    library = new Library();
    library.addBook(sampleBook);
  });

  test("can add a book", () => {
    const newBook: Book = {
      id: "2",
      title: "New Book",
      author: "New Author",
      isBorrowed: false,
    };
    library.addBook(newBook);
    expect(library.listBooks()).toContainEqual(newBook);
  });

  test("can remove a book", () => {
    library.removeBook(sampleBook.id);
    expect(library.listBooks()).not.toContainEqual(sampleBook);
  });

  test("can borrow a book", () => {
    library.borrowBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(true);
  });

  test("can return a borrowed book", () => {
    library.borrowBook(sampleBook.id);
    library.returnBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(false);
  });

  // ... Additional tests ...
});

describe("User", () => {
  let user: User;

  beforeEach(() => {
    user = new User("U1", "John Doe");
  });

  test("can borrow a book", () => {
    user.borrowBook("1");
    expect(user.listBorrowedBooks()).toContain("1");
  });

  test("can return a borrowed book", () => {
    user.borrowBook("1");
    user.returnBook("1");
    expect(user.listBorrowedBooks()).not.toContain("1");
  });

  // ... Additional tests ...
});

describe("Library", () => {
  let library: Library;
  const sampleBook: Book = {
    id: "1",
    title: "Sample Book",
    author: "Author",
    isBorrowed: false,
  };

  beforeEach(() => {
    library = new Library();
    library.addBook(sampleBook);
  });

  test("can add a book", () => {
    const newBook: Book = {
      id: "2",
      title: "New Book",
      author: "New Author",
      isBorrowed: false,
    };
    library.addBook(newBook);
    expect(library.listBooks()).toContainEqual(newBook);
  });

  test("can remove a book", () => {
    library.removeBook(sampleBook.id);
    expect(library.listBooks()).not.toContainEqual(sampleBook);
  });

  test("can borrow a book", () => {
    library.borrowBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(true);
  });

  test("can return a borrowed book", () => {
    library.borrowBook(sampleBook.id);
    library.returnBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(false);
  });

  // ... Additional tests ...
});

describe("User", () => {
  let user: User;

  beforeEach(() => {
    user = new User("U1", "John Doe");
  });

  test("can borrow a book", () => {
    user.borrowBook("1");
    expect(user.listBorrowedBooks()).toContain("1");
  });

  test("can return a borrowed book", () => {
    user.borrowBook("1");
    user.returnBook("1");
    expect(user.listBorrowedBooks()).not.toContain("1");
  });

  // ... Additional tests ...
});

describe("Library", () => {
  let library: Library;
  const sampleBook: Book = {
    id: "1",
    title: "Sample Book",
    author: "Author",
    isBorrowed: false,
  };

  beforeEach(() => {
    library = new Library();
    library.addBook(sampleBook);
  });

  test("can add a book", () => {
    const newBook: Book = {
      id: "2",
      title: "New Book",
      author: "New Author",
      isBorrowed: false,
    };
    library.addBook(newBook);
    expect(library.listBooks()).toContainEqual(newBook);
  });

  test("can remove a book", () => {
    library.removeBook(sampleBook.id);
    expect(library.listBooks()).not.toContainEqual(sampleBook);
  });

  test("can borrow a book", () => {
    library.borrowBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(true);
  });

  test("can return a borrowed book", () => {
    library.borrowBook(sampleBook.id);
    library.returnBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(false);
  });

  // ... Additional tests ...
});

describe("User", () => {
  let user: User;

  beforeEach(() => {
    user = new User("U1", "John Doe");
  });

  test("can borrow a book", () => {
    user.borrowBook("1");
    expect(user.listBorrowedBooks()).toContain("1");
  });

  test("can return a borrowed book", () => {
    user.borrowBook("1");
    user.returnBook("1");
    expect(user.listBorrowedBooks()).not.toContain("1");
  });

  // ... Additional tests ...
});

describe("Library", () => {
  let library: Library;
  const sampleBook: Book = {
    id: "1",
    title: "Sample Book",
    author: "Author",
    isBorrowed: false,
  };

  beforeEach(() => {
    library = new Library();
    library.addBook(sampleBook);
  });

  test("can add a book", () => {
    const newBook: Book = {
      id: "2",
      title: "New Book",
      author: "New Author",
      isBorrowed: false,
    };
    library.addBook(newBook);
    expect(library.listBooks()).toContainEqual(newBook);
  });

  test("can remove a book", () => {
    library.removeBook(sampleBook.id);
    expect(library.listBooks()).not.toContainEqual(sampleBook);
  });

  test("can borrow a book", () => {
    library.borrowBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(true);
  });

  test("can return a borrowed book", () => {
    library.borrowBook(sampleBook.id);
    library.returnBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(false);
  });

  // ... Additional tests ...
});

describe("User", () => {
  let user: User;

  beforeEach(() => {
    user = new User("U1", "John Doe");
  });

  test("can borrow a book", () => {
    user.borrowBook("1");
    expect(user.listBorrowedBooks()).toContain("1");
  });

  test("can return a borrowed book", () => {
    user.borrowBook("1");
    user.returnBook("1");
    expect(user.listBorrowedBooks()).not.toContain("1");
  });

  // ... Additional tests ...
});

describe("Library", () => {
  let library: Library;
  const sampleBook: Book = {
    id: "1",
    title: "Sample Book",
    author: "Author",
    isBorrowed: false,
  };

  beforeEach(() => {
    library = new Library();
    library.addBook(sampleBook);
  });

  test("can add a book", () => {
    const newBook: Book = {
      id: "2",
      title: "New Book",
      author: "New Author",
      isBorrowed: false,
    };
    library.addBook(newBook);
    expect(library.listBooks()).toContainEqual(newBook);
  });

  test("can remove a book", () => {
    library.removeBook(sampleBook.id);
    expect(library.listBooks()).not.toContainEqual(sampleBook);
  });

  test("can borrow a book", () => {
    library.borrowBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(true);
  });

  test("can return a borrowed book", () => {
    library.borrowBook(sampleBook.id);
    library.returnBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(false);
  });

  // ... Additional tests ...
});

describe("User", () => {
  let user: User;

  beforeEach(() => {
    user = new User("U1", "John Doe");
  });

  test("can borrow a book", () => {
    user.borrowBook("1");
    expect(user.listBorrowedBooks()).toContain("1");
  });

  test("can return a borrowed book", () => {
    user.borrowBook("1");
    user.returnBook("1");
    expect(user.listBorrowedBooks()).not.toContain("1");
  });

  // ... Additional tests ...
});

describe("Library", () => {
  let library: Library;
  const sampleBook: Book = {
    id: "1",
    title: "Sample Book",
    author: "Author",
    isBorrowed: false,
  };

  beforeEach(() => {
    library = new Library();
    library.addBook(sampleBook);
  });

  test("can add a book", () => {
    const newBook: Book = {
      id: "2",
      title: "New Book",
      author: "New Author",
      isBorrowed: false,
    };
    library.addBook(newBook);
    expect(library.listBooks()).toContainEqual(newBook);
  });

  test("can remove a book", () => {
    library.removeBook(sampleBook.id);
    expect(library.listBooks()).not.toContainEqual(sampleBook);
  });

  test("can borrow a book", () => {
    library.borrowBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(true);
  });

  test("can return a borrowed book", () => {
    library.borrowBook(sampleBook.id);
    library.returnBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(false);
  });

  // ... Additional tests ...
});

describe("User", () => {
  let user: User;

  beforeEach(() => {
    user = new User("U1", "John Doe");
  });

  test("can borrow a book", () => {
    user.borrowBook("1");
    expect(user.listBorrowedBooks()).toContain("1");
  });

  test("can return a borrowed book", () => {
    user.borrowBook("1");
    user.returnBook("1");
    expect(user.listBorrowedBooks()).not.toContain("1");
  });

  // ... Additional tests ...
});

describe("Library", () => {
  let library: Library;
  const sampleBook: Book = {
    id: "1",
    title: "Sample Book",
    author: "Author",
    isBorrowed: false,
  };

  beforeEach(() => {
    library = new Library();
    library.addBook(sampleBook);
  });

  test("can add a book", () => {
    const newBook: Book = {
      id: "2",
      title: "New Book",
      author: "New Author",
      isBorrowed: false,
    };
    library.addBook(newBook);
    expect(library.listBooks()).toContainEqual(newBook);
  });

  test("can remove a book", () => {
    library.removeBook(sampleBook.id);
    expect(library.listBooks()).not.toContainEqual(sampleBook);
  });

  test("can borrow a book", () => {
    library.borrowBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(true);
  });

  test("can return a borrowed book", () => {
    library.borrowBook(sampleBook.id);
    library.returnBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(false);
  });

  // ... Additional tests ...
});

describe("User", () => {
  let user: User;

  beforeEach(() => {
    user = new User("U1", "John Doe");
  });

  test("can borrow a book", () => {
    user.borrowBook("1");
    expect(user.listBorrowedBooks()).toContain("1");
  });

  test("can return a borrowed book", () => {
    user.borrowBook("1");
    user.returnBook("1");
    expect(user.listBorrowedBooks()).not.toContain("1");
  });

  // ... Additional tests ...
});

describe("Library", () => {
  let library: Library;
  const sampleBook: Book = {
    id: "1",
    title: "Sample Book",
    author: "Author",
    isBorrowed: false,
  };

  beforeEach(() => {
    library = new Library();
    library.addBook(sampleBook);
  });

  test("can add a book", () => {
    const newBook: Book = {
      id: "2",
      title: "New Book",
      author: "New Author",
      isBorrowed: false,
    };
    library.addBook(newBook);
    expect(library.listBooks()).toContainEqual(newBook);
  });

  test("can remove a book", () => {
    library.removeBook(sampleBook.id);
    expect(library.listBooks()).not.toContainEqual(sampleBook);
  });

  test("can borrow a book", () => {
    library.borrowBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(true);
  });

  test("can return a borrowed book", () => {
    library.borrowBook(sampleBook.id);
    library.returnBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(false);
  });

  // ... Additional tests ...
});

describe("User", () => {
  let user: User;

  beforeEach(() => {
    user = new User("U1", "John Doe");
  });

  test("can borrow a book", () => {
    user.borrowBook("1");
    expect(user.listBorrowedBooks()).toContain("1");
  });

  test("can return a borrowed book", () => {
    user.borrowBook("1");
    user.returnBook("1");
    expect(user.listBorrowedBooks()).not.toContain("1");
  });

  // ... Additional tests ...
});

describe("Library", () => {
  let library: Library;
  const sampleBook: Book = {
    id: "1",
    title: "Sample Book",
    author: "Author",
    isBorrowed: false,
  };

  beforeEach(() => {
    library = new Library();
    library.addBook(sampleBook);
  });

  test("can add a book", () => {
    const newBook: Book = {
      id: "2",
      title: "New Book",
      author: "New Author",
      isBorrowed: false,
    };
    library.addBook(newBook);
    expect(library.listBooks()).toContainEqual(newBook);
  });

  test("can remove a book", () => {
    library.removeBook(sampleBook.id);
    expect(library.listBooks()).not.toContainEqual(sampleBook);
  });

  test("can borrow a book", () => {
    library.borrowBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(true);
  });

  test("can return a borrowed book", () => {
    library.borrowBook(sampleBook.id);
    library.returnBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(false);
  });

  // ... Additional tests ...
});

describe("User", () => {
  let user: User;

  beforeEach(() => {
    user = new User("U1", "John Doe");
  });

  test("can borrow a book", () => {
    user.borrowBook("1");
    expect(user.listBorrowedBooks()).toContain("1");
  });

  test("can return a borrowed book", () => {
    user.borrowBook("1");
    user.returnBook("1");
    expect(user.listBorrowedBooks()).not.toContain("1");
  });

  // ... Additional tests ...
});

describe("Library", () => {
  let library: Library;
  const sampleBook: Book = {
    id: "1",
    title: "Sample Book",
    author: "Author",
    isBorrowed: false,
  };

  beforeEach(() => {
    library = new Library();
    library.addBook(sampleBook);
  });

  test("can add a book", () => {
    const newBook: Book = {
      id: "2",
      title: "New Book",
      author: "New Author",
      isBorrowed: false,
    };
    library.addBook(newBook);
    expect(library.listBooks()).toContainEqual(newBook);
  });

  test("can remove a book", () => {
    library.removeBook(sampleBook.id);
    expect(library.listBooks()).not.toContainEqual(sampleBook);
  });

  test("can borrow a book", () => {
    library.borrowBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(true);
  });

  test("can return a borrowed book", () => {
    library.borrowBook(sampleBook.id);
    library.returnBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(false);
  });

  // ... Additional tests ...
});

describe("User", () => {
  let user: User;

  beforeEach(() => {
    user = new User("U1", "John Doe");
  });

  test("can borrow a book", () => {
    user.borrowBook("1");
    expect(user.listBorrowedBooks()).toContain("1");
  });

  test("can return a borrowed book", () => {
    user.borrowBook("1");
    user.returnBook("1");
    expect(user.listBorrowedBooks()).not.toContain("1");
  });

  // ... Additional tests ...
});

describe("Library", () => {
  let library: Library;
  const sampleBook: Book = {
    id: "1",
    title: "Sample Book",
    author: "Author",
    isBorrowed: false,
  };

  beforeEach(() => {
    library = new Library();
    library.addBook(sampleBook);
  });

  test("can add a book", () => {
    const newBook: Book = {
      id: "2",
      title: "New Book",
      author: "New Author",
      isBorrowed: false,
    };
    library.addBook(newBook);
    expect(library.listBooks()).toContainEqual(newBook);
  });

  test("can remove a book", () => {
    library.removeBook(sampleBook.id);
    expect(library.listBooks()).not.toContainEqual(sampleBook);
  });

  test("can borrow a book", () => {
    library.borrowBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(true);
  });

  test("can return a borrowed book", () => {
    library.borrowBook(sampleBook.id);
    library.returnBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(false);
  });

  // ... Additional tests ...
});

describe("User", () => {
  let user: User;

  beforeEach(() => {
    user = new User("U1", "John Doe");
  });

  test("can borrow a book", () => {
    user.borrowBook("1");
    expect(user.listBorrowedBooks()).toContain("1");
  });

  test("can return a borrowed book", () => {
    user.borrowBook("1");
    user.returnBook("1");
    expect(user.listBorrowedBooks()).not.toContain("1");
  });

  // ... Additional tests ...
});

describe("Library", () => {
  let library: Library;
  const sampleBook: Book = {
    id: "1",
    title: "Sample Book",
    author: "Author",
    isBorrowed: false,
  };

  beforeEach(() => {
    library = new Library();
    library.addBook(sampleBook);
  });

  test("can add a book", () => {
    const newBook: Book = {
      id: "2",
      title: "New Book",
      author: "New Author",
      isBorrowed: false,
    };
    library.addBook(newBook);
    expect(library.listBooks()).toContainEqual(newBook);
  });

  test("can remove a book", () => {
    library.removeBook(sampleBook.id);
    expect(library.listBooks()).not.toContainEqual(sampleBook);
  });

  test("can borrow a book", () => {
    library.borrowBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(true);
  });

  test("can return a borrowed book", () => {
    library.borrowBook(sampleBook.id);
    library.returnBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(false);
  });

  // ... Additional tests ...
});

describe("User", () => {
  let user: User;

  beforeEach(() => {
    user = new User("U1", "John Doe");
  });

  test("can borrow a book", () => {
    user.borrowBook("1");
    expect(user.listBorrowedBooks()).toContain("1");
  });

  test("can return a borrowed book", () => {
    user.borrowBook("1");
    user.returnBook("1");
    expect(user.listBorrowedBooks()).not.toContain("1");
  });

  // ... Additional tests ...
});

describe("Library", () => {
  let library: Library;
  const sampleBook: Book = {
    id: "1",
    title: "Sample Book",
    author: "Author",
    isBorrowed: false,
  };

  beforeEach(() => {
    library = new Library();
    library.addBook(sampleBook);
  });

  test("can add a book", () => {
    const newBook: Book = {
      id: "2",
      title: "New Book",
      author: "New Author",
      isBorrowed: false,
    };
    library.addBook(newBook);
    expect(library.listBooks()).toContainEqual(newBook);
  });

  test("can remove a book", () => {
    library.removeBook(sampleBook.id);
    expect(library.listBooks()).not.toContainEqual(sampleBook);
  });

  test("can borrow a book", () => {
    library.borrowBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(true);
  });

  test("can return a borrowed book", () => {
    library.borrowBook(sampleBook.id);
    library.returnBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(false);
  });

  // ... Additional tests ...
});

describe("User", () => {
  let user: User;

  beforeEach(() => {
    user = new User("U1", "John Doe");
  });

  test("can borrow a book", () => {
    user.borrowBook("1");
    expect(user.listBorrowedBooks()).toContain("1");
  });

  test("can return a borrowed book", () => {
    user.borrowBook("1");
    user.returnBook("1");
    expect(user.listBorrowedBooks()).not.toContain("1");
  });

  // ... Additional tests ...
});

describe("Library", () => {
  let library: Library;
  const sampleBook: Book = {
    id: "1",
    title: "Sample Book",
    author: "Author",
    isBorrowed: false,
  };

  beforeEach(() => {
    library = new Library();
    library.addBook(sampleBook);
  });

  test("can add a book", () => {
    const newBook: Book = {
      id: "2",
      title: "New Book",
      author: "New Author",
      isBorrowed: false,
    };
    library.addBook(newBook);
    expect(library.listBooks()).toContainEqual(newBook);
  });

  test("can remove a book", () => {
    library.removeBook(sampleBook.id);
    expect(library.listBooks()).not.toContainEqual(sampleBook);
  });

  test("can borrow a book", () => {
    library.borrowBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(true);
  });

  test("can return a borrowed book", () => {
    library.borrowBook(sampleBook.id);
    library.returnBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(false);
  });

  // ... Additional tests ...
});

describe("User", () => {
  let user: User;

  beforeEach(() => {
    user = new User("U1", "John Doe");
  });

  test("can borrow a book", () => {
    user.borrowBook("1");
    expect(user.listBorrowedBooks()).toContain("1");
  });

  test("can return a borrowed book", () => {
    user.borrowBook("1");
    user.returnBook("1");
    expect(user.listBorrowedBooks()).not.toContain("1");
  });

  // ... Additional tests ...
});

describe("Library", () => {
  let library: Library;
  const sampleBook: Book = {
    id: "1",
    title: "Sample Book",
    author: "Author",
    isBorrowed: false,
  };

  beforeEach(() => {
    library = new Library();
    library.addBook(sampleBook);
  });

  test("can add a book", () => {
    const newBook: Book = {
      id: "2",
      title: "New Book",
      author: "New Author",
      isBorrowed: false,
    };
    library.addBook(newBook);
    expect(library.listBooks()).toContainEqual(newBook);
  });

  test("can remove a book", () => {
    library.removeBook(sampleBook.id);
    expect(library.listBooks()).not.toContainEqual(sampleBook);
  });

  test("can borrow a book", () => {
    library.borrowBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(true);
  });

  test("can return a borrowed book", () => {
    library.borrowBook(sampleBook.id);
    library.returnBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(false);
  });

  // ... Additional tests ...
});

describe("User", () => {
  let user: User;

  beforeEach(() => {
    user = new User("U1", "John Doe");
  });

  test("can borrow a book", () => {
    user.borrowBook("1");
    expect(user.listBorrowedBooks()).toContain("1");
  });

  test("can return a borrowed book", () => {
    user.borrowBook("1");
    user.returnBook("1");
    expect(user.listBorrowedBooks()).not.toContain("1");
  });

  // ... Additional tests ...
});

describe("Library", () => {
  let library: Library;
  const sampleBook: Book = {
    id: "1",
    title: "Sample Book",
    author: "Author",
    isBorrowed: false,
  };

  beforeEach(() => {
    library = new Library();
    library.addBook(sampleBook);
  });

  test("can add a book", () => {
    const newBook: Book = {
      id: "2",
      title: "New Book",
      author: "New Author",
      isBorrowed: false,
    };
    library.addBook(newBook);
    expect(library.listBooks()).toContainEqual(newBook);
  });

  test("can remove a book", () => {
    library.removeBook(sampleBook.id);
    expect(library.listBooks()).not.toContainEqual(sampleBook);
  });

  test("can borrow a book", () => {
    library.borrowBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(true);
  });

  test("can return a borrowed book", () => {
    library.borrowBook(sampleBook.id);
    library.returnBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(false);
  });

  // ... Additional tests ...
});

describe("User", () => {
  let user: User;

  beforeEach(() => {
    user = new User("U1", "John Doe");
  });

  test("can borrow a book", () => {
    user.borrowBook("1");
    expect(user.listBorrowedBooks()).toContain("1");
  });

  test("can return a borrowed book", () => {
    user.borrowBook("1");
    user.returnBook("1");
    expect(user.listBorrowedBooks()).not.toContain("1");
  });

  // ... Additional tests ...
});

describe("Library", () => {
  let library: Library;
  const sampleBook: Book = {
    id: "1",
    title: "Sample Book",
    author: "Author",
    isBorrowed: false,
  };

  beforeEach(() => {
    library = new Library();
    library.addBook(sampleBook);
  });

  test("can add a book", () => {
    const newBook: Book = {
      id: "2",
      title: "New Book",
      author: "New Author",
      isBorrowed: false,
    };
    library.addBook(newBook);
    expect(library.listBooks()).toContainEqual(newBook);
  });

  test("can remove a book", () => {
    library.removeBook(sampleBook.id);
    expect(library.listBooks()).not.toContainEqual(sampleBook);
  });

  test("can borrow a book", () => {
    library.borrowBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(true);
  });

  test("can return a borrowed book", () => {
    library.borrowBook(sampleBook.id);
    library.returnBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(false);
  });

  // ... Additional tests ...
});

describe("User", () => {
  let user: User;

  beforeEach(() => {
    user = new User("U1", "John Doe");
  });

  test("can borrow a book", () => {
    user.borrowBook("1");
    expect(user.listBorrowedBooks()).toContain("1");
  });

  test("can return a borrowed book", () => {
    user.borrowBook("1");
    user.returnBook("1");
    expect(user.listBorrowedBooks()).not.toContain("1");
  });

  // ... Additional tests ...
});

describe("Library", () => {
  let library: Library;
  const sampleBook: Book = {
    id: "1",
    title: "Sample Book",
    author: "Author",
    isBorrowed: false,
  };

  beforeEach(() => {
    library = new Library();
    library.addBook(sampleBook);
  });

  test("can add a book", () => {
    const newBook: Book = {
      id: "2",
      title: "New Book",
      author: "New Author",
      isBorrowed: false,
    };
    library.addBook(newBook);
    expect(library.listBooks()).toContainEqual(newBook);
  });

  test("can remove a book", () => {
    library.removeBook(sampleBook.id);
    expect(library.listBooks()).not.toContainEqual(sampleBook);
  });

  test("can borrow a book", () => {
    library.borrowBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(true);
  });

  test("can return a borrowed book", () => {
    library.borrowBook(sampleBook.id);
    library.returnBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(false);
  });

  // ... Additional tests ...
});

describe("User", () => {
  let user: User;

  beforeEach(() => {
    user = new User("U1", "John Doe");
  });

  test("can borrow a book", () => {
    user.borrowBook("1");
    expect(user.listBorrowedBooks()).toContain("1");
  });

  test("can return a borrowed book", () => {
    user.borrowBook("1");
    user.returnBook("1");
    expect(user.listBorrowedBooks()).not.toContain("1");
  });

  // ... Additional tests ...
});

describe("Library", () => {
  let library: Library;
  const sampleBook: Book = {
    id: "1",
    title: "Sample Book",
    author: "Author",
    isBorrowed: false,
  };

  beforeEach(() => {
    library = new Library();
    library.addBook(sampleBook);
  });

  test("can add a book", () => {
    const newBook: Book = {
      id: "2",
      title: "New Book",
      author: "New Author",
      isBorrowed: false,
    };
    library.addBook(newBook);
    expect(library.listBooks()).toContainEqual(newBook);
  });

  test("can remove a book", () => {
    library.removeBook(sampleBook.id);
    expect(library.listBooks()).not.toContainEqual(sampleBook);
  });

  test("can borrow a book", () => {
    library.borrowBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(true);
  });

  test("can return a borrowed book", () => {
    library.borrowBook(sampleBook.id);
    library.returnBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(false);
  });

  // ... Additional tests ...
});

describe("User", () => {
  let user: User;

  beforeEach(() => {
    user = new User("U1", "John Doe");
  });

  test("can borrow a book", () => {
    user.borrowBook("1");
    expect(user.listBorrowedBooks()).toContain("1");
  });

  test("can return a borrowed book", () => {
    user.borrowBook("1");
    user.returnBook("1");
    expect(user.listBorrowedBooks()).not.toContain("1");
  });

  // ... Additional tests ...
});

describe("Library", () => {
  let library: Library;
  const sampleBook: Book = {
    id: "1",
    title: "Sample Book",
    author: "Author",
    isBorrowed: false,
  };

  beforeEach(() => {
    library = new Library();
    library.addBook(sampleBook);
  });

  test("can add a book", () => {
    const newBook: Book = {
      id: "2",
      title: "New Book",
      author: "New Author",
      isBorrowed: false,
    };
    library.addBook(newBook);
    expect(library.listBooks()).toContainEqual(newBook);
  });

  test("can remove a book", () => {
    library.removeBook(sampleBook.id);
    expect(library.listBooks()).not.toContainEqual(sampleBook);
  });

  test("can borrow a book", () => {
    library.borrowBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(true);
  });

  test("can return a borrowed book", () => {
    library.borrowBook(sampleBook.id);
    library.returnBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(false);
  });

  // ... Additional tests ...
});

describe("User", () => {
  let user: User;

  beforeEach(() => {
    user = new User("U1", "John Doe");
  });

  test("can borrow a book", () => {
    user.borrowBook("1");
    expect(user.listBorrowedBooks()).toContain("1");
  });

  test("can return a borrowed book", () => {
    user.borrowBook("1");
    user.returnBook("1");
    expect(user.listBorrowedBooks()).not.toContain("1");
  });

  // ... Additional tests ...
});

describe("Library", () => {
  let library: Library;
  const sampleBook: Book = {
    id: "1",
    title: "Sample Book",
    author: "Author",
    isBorrowed: false,
  };

  beforeEach(() => {
    library = new Library();
    library.addBook(sampleBook);
  });

  test("can add a book", () => {
    const newBook: Book = {
      id: "2",
      title: "New Book",
      author: "New Author",
      isBorrowed: false,
    };
    library.addBook(newBook);
    expect(library.listBooks()).toContainEqual(newBook);
  });

  test("can remove a book", () => {
    library.removeBook(sampleBook.id);
    expect(library.listBooks()).not.toContainEqual(sampleBook);
  });

  test("can borrow a book", () => {
    library.borrowBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(true);
  });

  test("can return a borrowed book", () => {
    library.borrowBook(sampleBook.id);
    library.returnBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(false);
  });

  // ... Additional tests ...
});

describe("User", () => {
  let user: User;

  beforeEach(() => {
    user = new User("U1", "John Doe");
  });

  test("can borrow a book", () => {
    user.borrowBook("1");
    expect(user.listBorrowedBooks()).toContain("1");
  });

  test("can return a borrowed book", () => {
    user.borrowBook("1");
    user.returnBook("1");
    expect(user.listBorrowedBooks()).not.toContain("1");
  });

  // ... Additional tests ...
});

describe("Library", () => {
  let library: Library;
  const sampleBook: Book = {
    id: "1",
    title: "Sample Book",
    author: "Author",
    isBorrowed: false,
  };

  beforeEach(() => {
    library = new Library();
    library.addBook(sampleBook);
  });

  test("can add a book", () => {
    const newBook: Book = {
      id: "2",
      title: "New Book",
      author: "New Author",
      isBorrowed: false,
    };
    library.addBook(newBook);
    expect(library.listBooks()).toContainEqual(newBook);
  });

  test("can remove a book", () => {
    library.removeBook(sampleBook.id);
    expect(library.listBooks()).not.toContainEqual(sampleBook);
  });

  test("can borrow a book", () => {
    library.borrowBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(true);
  });

  test("can return a borrowed book", () => {
    library.borrowBook(sampleBook.id);
    library.returnBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(false);
  });

  // ... Additional tests ...
});

describe("User", () => {
  let user: User;

  beforeEach(() => {
    user = new User("U1", "John Doe");
  });

  test("can borrow a book", () => {
    user.borrowBook("1");
    expect(user.listBorrowedBooks()).toContain("1");
  });

  test("can return a borrowed book", () => {
    user.borrowBook("1");
    user.returnBook("1");
    expect(user.listBorrowedBooks()).not.toContain("1");
  });

  // ... Additional tests ...
});

describe("Library", () => {
  let library: Library;
  const sampleBook: Book = {
    id: "1",
    title: "Sample Book",
    author: "Author",
    isBorrowed: false,
  };

  beforeEach(() => {
    library = new Library();
    library.addBook(sampleBook);
  });

  test("can add a book", () => {
    const newBook: Book = {
      id: "2",
      title: "New Book",
      author: "New Author",
      isBorrowed: false,
    };
    library.addBook(newBook);
    expect(library.listBooks()).toContainEqual(newBook);
  });

  test("can remove a book", () => {
    library.removeBook(sampleBook.id);
    expect(library.listBooks()).not.toContainEqual(sampleBook);
  });

  test("can borrow a book", () => {
    library.borrowBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(true);
  });

  test("can return a borrowed book", () => {
    library.borrowBook(sampleBook.id);
    library.returnBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(false);
  });

  // ... Additional tests ...
});

describe("User", () => {
  let user: User;

  beforeEach(() => {
    user = new User("U1", "John Doe");
  });

  test("can borrow a book", () => {
    user.borrowBook("1");
    expect(user.listBorrowedBooks()).toContain("1");
  });

  test("can return a borrowed book", () => {
    user.borrowBook("1");
    user.returnBook("1");
    expect(user.listBorrowedBooks()).not.toContain("1");
  });

  // ... Additional tests ...
});

describe("Library", () => {
  let library: Library;
  const sampleBook: Book = {
    id: "1",
    title: "Sample Book",
    author: "Author",
    isBorrowed: false,
  };

  beforeEach(() => {
    library = new Library();
    library.addBook(sampleBook);
  });

  test("can add a book", () => {
    const newBook: Book = {
      id: "2",
      title: "New Book",
      author: "New Author",
      isBorrowed: false,
    };
    library.addBook(newBook);
    expect(library.listBooks()).toContainEqual(newBook);
  });

  test("can remove a book", () => {
    library.removeBook(sampleBook.id);
    expect(library.listBooks()).not.toContainEqual(sampleBook);
  });

  test("can borrow a book", () => {
    library.borrowBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(true);
  });

  test("can return a borrowed book", () => {
    library.borrowBook(sampleBook.id);
    library.returnBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(false);
  });

  // ... Additional tests ...
});

describe("User", () => {
  let user: User;

  beforeEach(() => {
    user = new User("U1", "John Doe");
  });

  test("can borrow a book", () => {
    user.borrowBook("1");
    expect(user.listBorrowedBooks()).toContain("1");
  });

  test("can return a borrowed book", () => {
    user.borrowBook("1");
    user.returnBook("1");
    expect(user.listBorrowedBooks()).not.toContain("1");
  });

  // ... Additional tests ...
});

describe("Library", () => {
  let library: Library;
  const sampleBook: Book = {
    id: "1",
    title: "Sample Book",
    author: "Author",
    isBorrowed: false,
  };

  beforeEach(() => {
    library = new Library();
    library.addBook(sampleBook);
  });

  test("can add a book", () => {
    const newBook: Book = {
      id: "2",
      title: "New Book",
      author: "New Author",
      isBorrowed: false,
    };
    library.addBook(newBook);
    expect(library.listBooks()).toContainEqual(newBook);
  });

  test("can remove a book", () => {
    library.removeBook(sampleBook.id);
    expect(library.listBooks()).not.toContainEqual(sampleBook);
  });

  test("can borrow a book", () => {
    library.borrowBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(true);
  });

  test("can return a borrowed book", () => {
    library.borrowBook(sampleBook.id);
    library.returnBook(sampleBook.id);
    expect(library.findBookByTitle("Sample Book")?.isBorrowed).toBe(false);
  });

  // ... Additional tests ...
});

describe("User", () => {
  let user: User;

  beforeEach(() => {
    user = new User("U1", "John Doe");
  });

  test("can borrow a book", () => {
    user.borrowBook("1");
    expect(user.listBorrowedBooks()).toContain("1");
  });

  test("can return a borrowed book", () => {
    user.borrowBook("1");
    user.returnBook("1");
    expect(user.listBorrowedBooks()).not.toContain("1");
  });

  // ... Additional tests ...
});

