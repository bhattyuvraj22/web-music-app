const audio = document.getElementById("player");
const rawUrl = "https://bhattyuvraj22.github.io/web-music-app/son";

// fetch as blob then play
async function loadAndPlay() {
  try {
    const res = await fetch(rawUrl);
    if (!res.ok) throw new Error("Failed to fetch: " + res.status);
    const blob = await res.blob();
    const objectUrl = URL.createObjectURL(blob);
    audio.src = objectUrl;
    // audio.play(); // requires user gesture to autoplay on most browsers
  } catch (err) {
    console.error(err);
  }
}

loadAndPlay();
