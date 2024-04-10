import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import RenderAttachmentComponent from "./RenderAttachmentComponent";
import { fileFormat } from "@/lib/features";
const RenderAttachment = (attachments: any) => {
  const { attachment } = attachments;
  return (
    <Carousel className="w-[200px] max-w-xs">
      <CarouselContent>
        {attachment.map((att: any, index: number) => {
          return (
            <>
              <CarouselItem key={index}>
                <div className="my-1 p-0">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-0">
                      <a href={att.url} target="_blank">
                        <RenderAttachmentComponent
                          file={fileFormat(att.url)}
                          url={att.url}
                        />
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default RenderAttachment;
