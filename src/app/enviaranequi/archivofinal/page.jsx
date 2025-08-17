import { Suspense } from "react";
import ArchivoFinal from "./ArchivoFinal";

export default function ArchivoFinalPage() {
  return (
    <Suspense fallback={<p>Cargando...</p>}>
      <ArchivoFinal />
    </Suspense>
  );
}
