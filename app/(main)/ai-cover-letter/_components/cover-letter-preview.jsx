// "use client";

// import React from "react";
// import MDEditor from "@uiw/react-md-editor";

// const CoverLetterPreview = ({ content }) => {
//   return (
//     <div className="py-4">
//       <MDEditor
//         value={content}
//         preview="preview"
//         height={700}
//         style={{ whiteSpace: "pre-wrap" }}
//       />
//     </div>
//   );
// };

// export default CoverLetterPreview;

"use client";

import React from "react";
import MDEditor from "@uiw/react-md-editor";

const CoverLetterPreview = ({ content }) => (
  <div className="py-4">
    <MDEditor.Markdown source={content} style={{ whiteSpace: "pre-wrap" }} />
  </div>
);

export default CoverLetterPreview;
