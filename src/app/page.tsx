"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-between p-24 ">
      <Button variant="outline" onClick={() => router.push("/login")} className="absolute top-10 left-10"> Click to see the Project</Button>
      <div className="space-y-4 p-6 columns-2">
        <div className="bg-app-primary text-white p-4 rounded">
          bg-app-primary
        </div>
        <div className="bg-app-bg text-black p-4 rounded">bg-app-bg</div>
        <div className="bg-app-heading text-white p-4 rounded">
          bg-app-heading
        </div>
        <div className="bg-app-table-header text-black p-4 rounded">
          bg-app-table-header
        </div>
        <div className="bg-app-table-heading text-white p-4 rounded">
          bg-app-table-heading
        </div>
        <div className="bg-app-form-label text-white p-4 rounded">
          bg-app-form-label
        </div>
        <div className="bg-app-form-placeholder text-black p-4 rounded">
          bg-app-form-placeholder
        </div>
        <div className="bg-app-form-field-border text-black p-4 rounded">
          bg-app-form-field-border
        </div>
        <div className="bg-app-form-bg text-black p-4 rounded">
          bg-app-form-bg
        </div>
        <div className="bg-app-form-validation-heading text-white p-4 rounded">
          bg-app-form-validation-heading
        </div>
        <div className="bg-app-form-validation-text text-white p-4 rounded">
          bg-app-form-validation-text
        </div>
        <div className="bg-app-breadcrumb-muted text-white p-4 rounded">
          bg-app-breadcrumb-muted
        </div>
        <div className="bg-app-active-bg text-white p-4 rounded">
          bg-app-active-bg
        </div>
      </div>
    </div>
  );
}
