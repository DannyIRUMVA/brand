export default defineEventHandler((event) => {
    const { buttonId } = getQuery(event);
    const modalContents = {
      "1": "About us: BrandPlanet delivers creative branding, design, and printing solutions.",
      "2": "Services: We offer a variety of services from digital design to high-quality printing.",
      "3": "Contact: Get in touch with us via email or phone for your creative needs."
    };
    return modalContents[buttonId] || "Default modal content.";
  });