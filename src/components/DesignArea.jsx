import { useSelector, useDispatch } from "react-redux";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TSHIRT_TYPES } from "../constants/designConstants";
import TshirtCanvasFront from "./TshirtCanvasFront";
import TshirtCanvasBack from "./TshirtCanvasBack";
import { setSelectedView } from "../features/tshirtSlice";
import { useCanvas } from "@/hooks/useCanvas";

const DesignArea = () => {
  // Get values from Redux store
  const dispatch = useDispatch();
  const selectedType = useSelector((state) => state.tshirt.selectedType);
  const selectedView = useSelector((state) => state.tshirt.selectedView);
  const { activeCanvas, setSelectedObject } = useCanvas();

  const getSvgPath = (view) => {
    const tshirtType = TSHIRT_TYPES[selectedType];
    return view === "front" ? tshirtType.frontPath : tshirtType.backPath;
  };

  const handleViewChange = (view) => {
    if (view !== selectedView) {
      // Clear selected object before switching views
      if (activeCanvas) {
        activeCanvas.discardActiveObject();
        activeCanvas.renderAll();
      }
      setSelectedObject(null);
      dispatch(setSelectedView(view));
    }
  };

  const isCap = selectedType === "cap";

  return (
    <div className="flex flex-col gap-4">
      <Card className="border-0 shadow-none bg-transparent">
        <CardContent className="p-0">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Design surface
            </div>
            <div className="flex gap-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">● Guides</span>
              <span className="flex items-center gap-1">● Layers</span>
              <span className="flex items-center gap-1">● Sync</span>
            </div>
            <div className="flex gap-2 ml-auto">
              <Button
                size="sm"
                variant={selectedView === "front" ? "default" : "outline"}
                onClick={() => handleViewChange("front")}
                className="rounded-full px-4"
              >
                Front
              </Button>
              {!isCap && (
                <Button
                  size="sm"
                  variant={selectedView === "back" ? "default" : "outline"}
                  onClick={() => handleViewChange("back")}
                  className="rounded-full px-4"
                >
                  Back
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="rounded-2xl border bg-card/80 shadow-xl backdrop-blur-sm p-3 sm:p-4">
        <div className="rounded-xl border bg-muted/40 p-3 sm:p-4 grid gap-4">
          {(selectedView === "front" || isCap) && (
            <Card className="border-0 bg-transparent shadow-none">
              <CardContent className="p-0">
                <div className="canvas-frame">
                  <TshirtCanvasFront svgPath={getSvgPath("front")} />
                </div>
              </CardContent>
            </Card>
          )}
          {!isCap && selectedView === "back" && (
            <Card className="border-0 bg-transparent shadow-none">
              <CardContent className="p-0">
                <div className="canvas-frame">
                  <TshirtCanvasBack svgPath={getSvgPath("back")} />
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesignArea;
