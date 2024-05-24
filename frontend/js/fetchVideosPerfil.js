document.addEventListener("DOMContentLoaded", async function () {
    try {
      const response = await fetch("http://localhost:8080/video/lista/0?limit=6");
      const data = await response.json();
  
      const videosContainer = document.querySelector(".videos");
  
      for (let i = 0; i < Math.min(data.content.length, 5); i++) {
        const videoData = data.content[i];
        const videoContainer = document.createElement("div");
        videoContainer.classList.add("video-container");
  
        const videoElement = document.createElement("iframe");
        videoElement.setAttribute("src", videoData.url);
        videoElement.setAttribute("title", videoData.titulo);
        videoElement.setAttribute("frameborder", "0");
        videoElement.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
        videoElement.setAttribute("allowfullscreen", "");
  
        videoContainer.appendChild(videoElement);
        videosContainer.appendChild(videoContainer);
      }
    } catch (error) {
      console.error("Error fetching videos:", error);
      alert("Erro ao carregar os vídeos.");
    }
  });
