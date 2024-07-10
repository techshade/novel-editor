// app/edit/EditorCompo.js


'use client'
import { Editor } from "novel-lightweight";
import { useState } from "react";

export default function EditorCompo(...props) {
  const [data, setData] = useState("");
  console.log("data",data);
  return (
    <Editor
      {...
        props
      }
      defaultValue={data}
      disableLocalStorage={true}
      onUpdate={(editor) => {
        setData(editor?.storage.markdown.getMarkdown());
      }}
      handleImageUpload={async (file) => {
        const image = await uploadImage(file);
        if (image.url) {
          return image.url;
        }
        return "www.example.com/failed-upload.png";
      }}
    />
  );
}

async function uploadImage(
  file,
  path,
  tags,
  apiKey = "9qhvnnzywbd6ddym4gvwn4"
) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("path", path);
  formData.append("tags", tags);

  try {
    const response = await fetch("https://pics.shade.cool/api/upload", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      body: formData,
    });
    return await response.json();

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const result = await response.json();
    console.log("Upload successful!", result);
  } catch (error) {
    console.error("Error uploading image:", error);
  }
}
