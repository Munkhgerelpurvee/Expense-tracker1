"use client";

import React, { useState } from "react";
import { IconSelector } from "../components/Icon-selecter";
import axios from "axios";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component in ui directory

export const AddCategory = ({
  open,
  categoryName,
  setCategoryName,
  categoryIcon,
  setCategoryIcon,
  createCategory,
  isOpen,
  setIsOpen,
}) => {
  return (
    <Dialog open={isOpen}>
      <DialogTrigger
        className="w-full flex justify-start pl-8 pb-2 pt-2 border-b-2 border-[#D1D5DB] hover:bg-[#D1D5DB] "
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <h6 className="text-sm">{open}</h6>
      </DialogTrigger>
      <DialogContent className="w-[494px] h-[236px]">
        <DialogHeader className="flex flex-row items-center justify-between w-full">
          <DialogTitle>Add Category</DialogTitle>
          <Button
            className="w-fit"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            x
          </Button>
        </DialogHeader>
        <div className="flex flex-row items-center justify-between gap-x-4">
          <IconSelector
            categoryIcon={categoryIcon}
            setCategoryIcon={setCategoryIcon}
          />
          <input
            type="text"
            value={categoryName}
            placeholder="Name"
            className="w-full p-2 border rounded "
            onChange={(event) => {
              setCategoryName(event.target.value);
            }}
          />
        </div>
        <Button onClick={createCategory}>Add Category</Button>
      </DialogContent>
    </Dialog>
  );
};
2;
