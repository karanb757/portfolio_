
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
      data-cal-link="karan-bodkhe-xelgqk/30min" // 👈 This must match your real event slug!
      data-cal-config='{"layout":"month_view","theme":"dark"}'
       className="backdrop-blur-sm  border border-white/10 rounded-full px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors duration-300 shadow-lg"
    >
      Schedule Meeting
    </button>
  );
}
