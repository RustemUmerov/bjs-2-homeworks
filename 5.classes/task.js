class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  
  fix() {
    this.state *= 1.5;
  }
  
  set state(state) {
    if (state < 0) {
      this._state = 0;
    } else if (state > 100) {
      this._state = 100;
    } else {
      this._state = state;
    }
  }
  
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    return this.books.find((book) => book[type] === value) || null;
  }

  giveBookByName(bookName) {
    const bookIndex = this.books.findIndex((book) => book.name === bookName);
    if (bookIndex !== -1) {
      const [book] = this.books.splice(bookIndex, 1);
      return book;
    }
    return null;
  }
}
class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      return; // валидация оценки
    }

    if (!this.marks[subject]) {
      this.marks[subject] = [];
    }

    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    const marks = this.marks[subject];

    if (!marks || marks.length === 0) {
      return 0; // если предмет отсутствует или нет оценок, возвращаем 0
    }

    const sum = marks.reduce((acc, mark) => acc + mark, 0);
    const average = sum / marks.length;

    return average;
  }

  getAverage() {
    const subjects = Object.keys(this.marks);

    if (subjects.length === 0) {
      return 0; // если нет предметов, возвращаем 0
    }

    const sum = subjects.reduce((acc, subject) => {
      const average = this.getAverageBySubject(subject);
      return acc + average;
    }, 0);

    const average = sum / subjects.length;
    return average;
  }
}
