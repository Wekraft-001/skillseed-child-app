// Extract YouTube video ID from various URL formats
export const getYouTubeVideoId = (url) => {
  if (!url) return null;

  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\?\/]+)/,
    /^([a-zA-Z0-9_-]{11})$/, // Direct video ID
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
};

// Convert YouTube URL to embed format
export const getYouTubeEmbedUrl = (url) => {
  const videoId = getYouTubeVideoId(url);
  if (!videoId) return url;

  return `https://www.youtube.com/embed/${videoId}`;
};

// Get YouTube thumbnail URL
// Quality options: maxresdefault (1280x720), sddefault (640x480), hqdefault (480x360), mqdefault (320x180), default (120x90)
export const getYouTubeThumbnail = (url, quality = "hqdefault") => {
  const videoId = getYouTubeVideoId(url);
  if (!videoId) {
    return "https://via.placeholder.com/480x360/1A73E8/ffffff?text=Video";
  }

  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
};
