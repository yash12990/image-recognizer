export const submitImages = async ({ formData }) => {
  const response = await fetch(
    "https://ai-image-difference.onrender.com/image",
    {
      method: "POST",
      body: formData,
      headers: { "Content-Type": "application/json" },
    }
  );

  const data = await response.json();
  if (response.ok) {
    console.log("Upload successful", data);
  } else {
    console.error("Upload failed", data);
  }

  return data;
};
