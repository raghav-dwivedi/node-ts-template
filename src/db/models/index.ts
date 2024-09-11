import StudentCertificate from "./studentCertificate";

// Import other models here

const models = {
  StudentCertificate,
};

// Initialize associations
Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

export default models;
