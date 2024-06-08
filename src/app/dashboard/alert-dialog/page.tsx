'use client';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button";
import { useState } from "react";


export default function Page() {
  const [openDialog, setOpenDialog] = useState(false)
  return (
    <div className="grid grid-cols-2 gap-4">
      <AlertDialog
        open={openDialog}
        onOpenChange={setOpenDialog}>
        <AlertDialogTrigger asChild><Button variant="outline">Open dialog</Button></AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => console.log("cancel pressed")}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => console.log("continue pressed")}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Button onClick={() => setOpenDialog(true)}>Open</Button>
    </div>
  );
}