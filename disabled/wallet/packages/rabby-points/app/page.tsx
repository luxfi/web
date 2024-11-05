import { LuxPointsReferral } from "@/components/lux-points";
import { Provider } from "jotai";
import { Suspense } from "react";
export default function Home() {
  return (
    <Provider>
      <Suspense>
        <LuxPointsReferral />
      </Suspense>
    </Provider>
  );
}
