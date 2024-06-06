"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { EnvelopeOpenIcon, InstagramLogoIcon, ReloadIcon, RocketIcon } from "@radix-ui/react-icons";


export default function Page() {
  return (
    <div className="grid grid-cols-3 gap-2">
      <Button>Default</Button>
      <Button variant="destructive">Default</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="success" onClick={() => { console.log("action complete") }}>Success Button</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button disabled>Disable</Button>
      <Button onClick={() => { console.log("clicked!!") }}>Default</Button>
      <div className="grid grid-cols-2 gap-2">
        <h2 className="text-base font-medium text-right">Buttons w/icons</h2>
        <div className="grid gris-cols-2 gap-2">
          <Button variant="success" size="icon">
            <RocketIcon className="h-6 w-4" />
          </Button>
          <Button variant="destructive" size="icon">
            <InstagramLogoIcon className="h-6 w-4" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <h2 className="text-base text-right font-medium">Other&apos;s Buttons</h2>
        <div className="grid gris-cols-2 gap-2">
          <Button disabled>
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            Loading
          </Button>
          <Button>
            <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
          </Button>
        </div>
      </div>

    </div>
  );
}