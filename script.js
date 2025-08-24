const form = document.getElementById("uploadForm");
const fileInput = document.getElementById("fileInput");
const gallery = document.getElementById("gallery");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const file = fileInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    const img = document.createElement("img");
    img.src = reader.result;
    gallery.appendChild(img);
  };
  reader.readAsDataURL(file);
});
