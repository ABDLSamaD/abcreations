// API Configuration
const API_BASE_URL = import.meta.env.VITE_BACKEND_URL_API;

export const API_ENDPOINTS = {
  CONTACT: `${API_BASE_URL}/api/contact`,
  //   HEALTH: `${API_BASE_URL}/api/health`,
};

// API Helper Functions
export const sendContactForm = async (formData) => {
  try {
    const response = await fetch(API_ENDPOINTS.CONTACT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

// export const checkAPIHealth = async () => {
//   try {
//     const response = await fetch(API_ENDPOINTS.HEALTH);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Health check failed:", error);
//     throw error;
//   }
// };
