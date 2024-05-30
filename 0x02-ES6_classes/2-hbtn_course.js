export default class HolbertonCourse {
  constructor(name, length, students) {
    // Verify the types of attributes
    if (
      typeof name !== "string" ||
      typeof length !== "number" ||
      !Array.isArray(students)
    ) {
      throw new Error("Invalid attribute types");
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== "string") {
      throw new Error("Invalid type for name");
    }
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== "number") {
      throw new Error("Invalid type for length");
    }
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw new Error("Invalid type for students");
    }
    this._students = newStudents;
  }
}
