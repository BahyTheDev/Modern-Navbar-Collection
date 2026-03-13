'use client';

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { triageItems } from "../data/triage-items";
import TriageItemDetails from "./TriageItemDetails";

export default function Triage() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleViewClick = (item) => {
    setSelectedItem(item);
    setIsDialogOpen(true);
  };

  return (
    <main className="flex-1 container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Triage</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Priority</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Source</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {triageItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.priority}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.source}</TableCell>
              <TableCell>
                <Button variant="outline" onClick={() => handleViewClick(item)}>
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TriageItemDetails
        item={selectedItem}
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
      />
    </main>
  );
}
