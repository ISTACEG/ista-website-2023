export const BASE_URL =
  "https://ista-backend-fmdgc9exdxa6cpe7.centralindia-01.azurewebsites.net";
export function timeAgo(timestamp) {
  const now = new Date();
  console.log(typeof timestamp);
  console.log(timestamp);
  const past = new Date(timestamp);
  const diffInSeconds = Math.floor((now - past) / 1000);
  if (diffInSeconds < 60) {
    return "";
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minutes ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hours ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return `${diffInDays} days ago`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} months ago`;
  }

  const diffInYears = Math.floor(diffInMonths / 12);
  if (isNaN(diffInYears)) return "";
  return `${diffInYears} years ago`;
}
