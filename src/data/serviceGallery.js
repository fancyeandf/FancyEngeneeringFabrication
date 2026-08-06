// Hand-picked, per-service picks from the real project photo gallery
// (public/gallery/images/project-NN.jpg), chosen by matching each photo's
// actual subject to the closest service. Categories with few real matches
// (e.g. railings, barricading) intentionally show fewer than 5 rather than
// padding with unrelated photos.
const serviceGalleryNumbers = {
  "automatic-gates": [92, 99, 106, 11, 29],
  "railings-spiral": [8, 25, 27],
  "brass-railings": [8, 25],
  barricading: [18, 64],
  "structural-steel-work": [1, 4, 50, 64],
  "industrial-shed": [1, 5, 57, 64, 85],
  "warehouse-sheds": [5, 57, 71, 85],
  "roofing-shed": [5, 15, 71, 78],
  "peb-structure": [5, 78, 85, 50],
  "function-hall-sheds": [5, 57, 1],
};

export function getServiceGalleryImages(slug) {
  const numbers = serviceGalleryNumbers[slug] ?? [];
  return numbers.map((n) => {
    const padded = String(n).padStart(2, "0");
    return {
      id: `service-gallery-${slug}-${padded}`,
      src: `/gallery/images/project-${padded}.jpg`,
      alt: `Completed project photo`,
    };
  });
}
