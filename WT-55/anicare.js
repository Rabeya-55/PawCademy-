const petSelect = document.getElementById("petSelect");
const videoList = document.getElementById("videoList");

const petVideos = {
  dog: [
    "https://www.youtube.com/embed/Zb3Wzs2FcFE",
    "https://www.youtube.com/embed/qhKJPktZmgg"
  ],
  cat: [
    "https://www.youtube.com/embed/tNu4-G0SmRU",
    "https://www.youtube.com/embed/iSAlzs7oYak"
  ],
  bird: [
    "https://www.youtube.com/embed/VnT7pT6zCcA", // Working bird video
    "https://www.youtube.com/embed/Wk5a7oUxF4E"  // Bonus: Bird care
  ]
};

function loadVideos(petType) {
  videoList.innerHTML = ""; // Clear existing videos
  petVideos[petType]?.forEach(url => {
    const iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.allowFullscreen = true;
    iframe.width = 360;
    iframe.height = 215;
    iframe.frameBorder = "0";
    iframe.classList.add("video-frame");
    videoList.appendChild(iframe);
  });
}

// Load default
loadVideos(petSelect.value);

// Change listener
petSelect.addEventListener("change", () => {
  loadVideos(petSelect.value);
});
