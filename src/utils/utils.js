export const jobServices = [
  {
    service: "Front-End Development",
    description:
      "Create highly interactive front-end interfaces using frameworks like Vue.js, React.js, and Svelte.",
  },
  {
    service: "Progressive Web App Development",
    description:
      "Build efficient PWAs that function offline and provide app-like experiences.",
  },
  {
    service: "Back-End Development",
    description:
      "Create scalable server-side solutions for complex business requirements.",
  },
  {
    service: "Full-Stack Development",
    description:
      "Utilize frameworks like Angular, React, and Node.js for end-to-end development.",
  },
  {
    service: "JavaScript-Based CMS Development",
    description:
      "Develop dynamic CMS platforms tailored to business requirements.",
  },
  {
    service: "Mobile Development",
    description: "Upgrade legacy systems to modern JavaScript frameworks.",
  },
  {
    service: "Custom JavaScript Development",
    description:
      "Develop tailored applications to meet specific business needs.",
  },
  {
    service: "JavaScript Debugging and Testing",
    description:
      "Ensure applications are error-free with robust debugging and testing.",
  },

  {
    service: "JavaScript Security Enhancements",
    description: "Protect applications with advanced security measures.",
  },
];

export async function convertImageToDataURI(imagePath) {
  console.log("imagePath", imagePath);
  
  const response = await fetch(imagePath);
  if (!response.ok) {
    throw new Error(`Failed to fetch image: ${response.statusText}`);
  }
  const blob = await response.blob();
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
