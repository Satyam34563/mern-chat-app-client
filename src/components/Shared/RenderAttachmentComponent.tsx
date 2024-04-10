import { transformImage } from "@/lib/features";
import { FileOutputIcon } from "lucide-react";

const RenderAttachmentComponent = (file: any, url: any) => {
  switch (file.file) {
    case "video":
      return <video src={url} preload="none" width={"200px"} controls />;
    case "audio":
      return <audio src={url} preload="none" controls></audio>;
    case "image":
      return (
        <img
          src={transformImage({ url: file.url, width: 200 })}
          alt="Attachment"
          width={"200px"}
          style={{ objectFit: "contain" }}
        />
      );
    default:
      <FileOutputIcon />;
  }
};

export default RenderAttachmentComponent;
