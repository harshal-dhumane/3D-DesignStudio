import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Menu } from "lucide-react";
import ToolBar from "./ToolBar";
import TextToolBar from "./TextToolBar";
import LineToolBar from "./LineToolBar";

export function ToolsSidebar({ manualSync }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="lg:hidden fixed top-4 left-4 z-30 h-10 w-10"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[82vw] max-w-sm sm:w-[340px] p-4 sm:p-6"
      >
        <SheetHeader>
          <SheetTitle>Design Tools</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-140px)] mt-4">
          <div className="pr-2 sm:pr-6">
            <ToolBar manualSync={manualSync} />
            <TextToolBar manualSync={manualSync} />
            <LineToolBar manualSync={manualSync} />
          </div>
        </ScrollArea>
      </SheetContent>

      {/* Desktop version - always visible */}
      <div className="hidden lg:block">
        <div className="w-full min-w-[200px] max-w-[240px] rounded-2xl border bg-card/80 shadow-lg">
          <div className="p-4">
            <h2 className="font-semibold mb-4">Design Tools</h2>
            <ScrollArea className="max-h-[70vh]">
              <div className="pr-2">
                <ToolBar manualSync={manualSync} />
                <TextToolBar manualSync={manualSync} />
                <LineToolBar manualSync={manualSync} />
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </Sheet>
  );
}
