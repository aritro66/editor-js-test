// tools.js
import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import List from "@editorjs/list";
import Paragraph from "@editorjs/paragraph";
import Warning from "@editorjs/warning";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Image from "@editorjs/image";
import Raw from "@editorjs/raw";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import SimpleImage from "@editorjs/simple-image";

export const EDITOR_JS_TOOLS = {
  // NOTE: Paragraph is default tool. Declare only when you want to change paragraph option.
  // paragraph: Paragraph,
  embed: Embed,
  table: Table,
  list: List,
  warning: Warning,
  code: Code,
  linkTool: LinkTool,
  image: {
    class: Image,
    config: {
      uploader: {
        uploadByFile(file) {
          // your own uploading logic here
          const form_data = new FormData();
          form_data.append("img_upload", file);
          console.log(file);
          return fetch("http://localhost:4001/api/v1/image/upload", {
            // headers: {
            //   // Accept: "application/json",
            //   "Content-Type": "multipart/form-data",
            // },
            method: "POST",
            body: form_data,
          })
            .then((req) => req.json())
            .then((val) => {
              return {
                success: 1,
                file: {
                  url: `http://localhost:4001/api/v1/image/${val.data}`,
                  // any other image data you want to store, such as width, height, color, extension, etc
                },
              };
            });
        },
      },
    },
  },
  raw: Raw,
  header: Header,
  quote: Quote,
  marker: Marker,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
};
