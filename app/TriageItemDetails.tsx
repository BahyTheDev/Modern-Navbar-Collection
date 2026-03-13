'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function TriageItemDetails({ item, isOpen, setIsOpen }) {
  if (!item) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{item.title}</DialogTitle>
        </DialogHeader>
        <div>
          <p className="mb-2">
            <strong>Priority:</strong> {item.priority}
          </p>
          <p className="mb-2">
            <strong>Source:</strong> {item.source}
          </p>
          <p>{item.description}</p>
        </div>
        <DialogFooter>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
