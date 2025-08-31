import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function MyApp() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          dark: {
            "--cal-brand-color": "#000000",
          },
          light: {
            "--cal-brand-color": "#ffffff",
          },
        },
      })
    })();
  }, []);

  return (
    <button
      data-cal-namespace="30min"
      data-cal-link="karan-bodkhe-xelgqk/30min"
      data-cal-config='{"layout":"month_view","theme":"dark"}'
      className="backdrop-blur-sm border border-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-white hover:bg-white/10 transition-colors duration-300 shadow-lg"
    >
      <span className="hidden sm:inline cursor-pointer">Schedule Meeting</span>
      <span className="sm:hidden">Schedule</span>
    </button>
  );
}