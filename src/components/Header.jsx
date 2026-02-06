import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-2 rounded-2xl bg-card/80 border shadow-sm">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-slate-900 text-white grid place-items-center font-semibold dark:bg-white dark:text-slate-900">
          DC
        </div>
        <div className="leading-tight">
          <p className="text-sm text-muted-foreground">Design Cloud</p>
          <p className="font-semibold text-foreground">Mockups & 3D Studio</p>
        </div>
        <div className="flex items-center gap-1 text-sm text-amber-500 ml-2">
          <span></span>
          <span className="font-semibold text-foreground"></span>
          <span className="text-muted-foreground"></span>
        </div>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Header;
