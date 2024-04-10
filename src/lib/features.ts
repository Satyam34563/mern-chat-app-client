const fileFormat = (url:any) =>{
    const ext = url.split(".").pop();
    if(ext==="mp4"||ext==="webm"||ext==="ogg")
        return "video";
    if (ext === "mp3" || ext === "wav" ) return "audio";
    if (ext === "png" || ext === "jpg" || ext === "jpeg" || ext === "gif")
      return "image";

    return "file";
}
type Props={
  url:string,
  width?:number
}
const transformImage = ({url, width}:Props) => url;
export { fileFormat, transformImage };