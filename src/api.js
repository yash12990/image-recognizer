export const uploadImages = async (formData) => {
  const response = await fetch(
    "https://ai-image-difference.onrender.com/uploadImage",
    {
      method: "POST",
      body: formData,
    }
  );
  return response.json();
};

export const submitImages = async (payload) => {
  const response = await fetch(
    "https://ai-image-difference.onrender.com/image/difference",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );
  const data = await response.json();
  return data;
};
