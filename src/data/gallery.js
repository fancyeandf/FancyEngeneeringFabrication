const imageCount = 56;
const videoCount = 44;

export const galleryImages = Array.from({ length: imageCount }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    id: `image-${n}`,
    src: `/gallery/images/project-${n}.jpg`,
    alt: `Project #${n}`,
  };
});

export const galleryVideos = Array.from({ length: videoCount }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    id: `video-${n}`,
    src: `/gallery/videos/project-${n}.mp4`,
    title: `Project video ${i + 1}`,
  };
});
