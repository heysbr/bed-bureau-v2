import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <Button variant="outline">Hello World</Button>
      <div className="space-y-4 p-6">
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
