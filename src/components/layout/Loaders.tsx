import { Grid } from "@mui/material";
import { Skeleton } from "../ui/skeleton";

export const LayoutLoader = () => {
  return (
    <Grid container height={"calc(100vh-4rem)"}>
      <Grid
        item
        sm={4}
        md={3}
        sx={{ display: { xs: "none", sm: "block" } }}
        height={"100%"}
      >
        <div className="px-2">
          {Array.from({ length: 12 }).map((_, index) => (
            <div className=" py-3">
              <div className="flex items-center space-x-4">
                <Skeleton key={index} className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Grid>
      <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
        <div className="px-2">
          {Array.from({ length: 12 }).map((_, index) => {
            return (
              <div className="py-3 relative">
                <div className=" py-2">
                  <div className="flex items-center space-x-2">
                    <Skeleton key={index} className="h-8 w-8 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[250px]" />
                    </div>
                  </div>
                </div>
                <div className="absolute right-0 bottom-0">
                  <div className="flex items-center space-x-2">
                    <div className="space-y-0">
                      <Skeleton className="h-4 w-[250px]" />
                    </div>
                    <Skeleton key={index} className="h-8 w-8 rounded-full" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Grid>
      <Grid
        item
        xs={4}
        md={4}
        lg={3}
        sx={{ display: { xs: "none", md: "block" } }}
        height={"100%"}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <div className=" py-3 px-6">
            <div className="flex items-center space-x-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          </div>
        ))}
      </Grid>
    </Grid>
  );
};
