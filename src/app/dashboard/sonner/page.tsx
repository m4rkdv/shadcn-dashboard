'use client';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Page() {
  return (
    <div>
      <Button
        variant="default"
        onClick={() =>
          toast("Event has been created", {
            duration:1000,
            description:`${new Date()}`,
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </Button>

      <Button
        variant="secondary"
        onClick={() =>
          toast.success("Event has been created", {
            className:`bg-green-500 text-white`,
            position:"top-right",
            duration:1000,
            description:`${new Date()}`,
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show success
      </Button>
    </div>
  );
}