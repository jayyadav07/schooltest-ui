export class Student {
  studentId: number;
  schoolId: number;
  firstName: string;
  lastName: string;
  dob: Date;
  aadharNumber: string;
  birthCertificateNumber: string;
  tcNumber: string;
  gender: string;
  addressId: number;
  fatherName: string;
  motherName: string;
  guardianName?: string;
  guardianPhone?: string;
  classId: number;
  rollNumber: string;
  email: string;
  phoneNumber: string;
  emergencyContact: string;
  emergencyContactNo: string;
  admissionDate: Date;
  status: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    studentId: number,
    schoolId: number,
    firstName: string,
    lastName: string,
    dob: Date,
    aadharNumber: string,
    birthCertificateNumber: string,
    tcNumber: string,
    gender: string,
    addressId: number,
    fatherName: string,
    motherName: string,
    guardianName: string,
    guardianPhone: string,
    classId: number,
    rollNumber: string,
    email: string,
    phoneNumber: string,
    emergencyContact: string,
    emergencyContactNo: string,
    admissionDate: Date,
    status: string,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.studentId = studentId;
    this.schoolId = schoolId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.aadharNumber = aadharNumber;
    this.birthCertificateNumber = birthCertificateNumber;
    this.tcNumber = tcNumber;
    this.gender = gender;
    this.addressId = addressId;
    this.fatherName = fatherName;
    this.motherName = motherName;
    this.guardianName = guardianName;
    this.guardianPhone = guardianPhone;
    this.classId = classId;
    this.rollNumber = rollNumber;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.emergencyContact = emergencyContact;
    this.emergencyContactNo = emergencyContactNo;
    this.admissionDate = admissionDate;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
