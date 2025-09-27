import * as React from "react";
import { TabsList } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const MultilineTabsList = React.forwardRef<
  React.ElementRef<typeof TabsList>,
  React.ComponentPropsWithoutRef<typeof TabsList>
>(({ className, ...props }, ref) => (
  <TabsList
    ref={ref}
    className={cn("flex flex-wrap h-auto", className)}
    {...props}
  />
));
MultilineTabsList.displayName = "MultilineTabsList";

export { MultilineTabsList };