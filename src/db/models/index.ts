import Batches from "./batches";
import ClassCancellationRequests from "./classCancellationRequests";
import ClassScheduler from "./classScheduler";
import CourseByOrderId from "./courseByOrderId";
import CoursePrice from "./coursePrice";
import Courses from "./courses";
import GlimpseClassInfo from "./glimpeClassInfo";
import ImpartusSession from "./impartusSession";
import Orders from "./orders";
import Parents from "./parents";
import StudentBatchJoinedInfo from "./studentBatchJoinedInfo";
import StudentCertificate from "./studentCertificate";

// Import other models here

const models = {
  Batches,
  ClassCancellationRequests,
  ClassScheduler,
  CourseByOrderId,
  CoursePrice,
  Courses,
  GlimpseClassInfo,
  ImpartusSession,
  Orders,
  Parents,
  StudentBatchJoinedInfo,
  StudentCertificate,
};

// Initialize associations
Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

export default models;
