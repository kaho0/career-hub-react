// utils.js
export const getStoredApplication = () => {
  const storedApplication = localStorage.getItem("job-applications");
  if (storedApplication) {
    return JSON.parse(storedApplication);
  }
  return [];
};

export const saveJobApplication = (id) => {
  const storedApplication = getStoredApplication();
  const exists = storedApplication.find((jobId) => jobId === id);
  if (!exists) {
    storedApplication.push(id);
    localStorage.setItem("job-applications", JSON.stringify(storedApplication));
  }
};
