import { Model, DataTypes, InferAttributes, InferCreationAttributes } from "sequelize";
import sequelize from "../config";
import { Models } from "@src/interfaces/db";

class StudentCertificate extends Model<
  InferAttributes<StudentCertificate>,
  InferCreationAttributes<StudentCertificate>
> {
  public studentId!: string;
  public courseId!: string;
  public certificateUrl?: string;
  public createdAt?: Date;
  public updatedAt?: Date;

  // The associate function to define relationships between models

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  public static associate(models: Models): void {
    // Relationships will go here in the future
  }
}

StudentCertificate.init(
  {
    studentId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING(60),
      references: {
        model: "students",
        key: "studentId",
      },
    },
    courseId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING(60),
      references: {
        model: "Courses",
        key: "CourseId",
      },
    },
    certificateUrl: { type: DataTypes.STRING(300) },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
  },
  {
    sequelize,
    modelName: "StudentCertificate",
    tableName: "studentCertificate",
  },
);

export default StudentCertificate;
