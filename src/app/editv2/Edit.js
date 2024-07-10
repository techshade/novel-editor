'use client'
import { Editor } from "novel-lightweight";
import { useState } from "react";

let apiKey = "clsh245tu17l7sprzt3oul"

export default function Edit() {
  const [data, setData] = useState("");

console.log(data);
  return (
    <Editor
      defaultValue={data}
      disableLocalStorage={true}
      onUpdate={(editor) => {
        setData(editor?.storage.markdown.getMarkdown());
      }}
      handleImageUpload={async (file) => {
        let image = await uploadImage(file);
        if(image.url) return image.url;
        return "www.example.com/failed-upload.png";
      }}
    />
  );
}



async function uploadImage(file, path, tags, apiKey = "9qhvnnzywbd6ddym4gvwn4") {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('path', path);
  formData.append('tags', tags);

  try {
    const response = await fetch('https://pics.shade.cool/api/upload', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`
      },
      body: formData
    });


    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
    console.log('Upload successful!', result);
  } catch (error) {
    console.error('Error uploading image:', error);
  }
}
