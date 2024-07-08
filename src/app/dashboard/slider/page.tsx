'use client';
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export default function Page() {
  const [sliderValue, setSliderValue] = useState(10);
  const [rangeValue, setrangeValue] = useState([10,20]);
  return (
    <div className="grid grid-cols-1 gap-3">
      <span>Slider Value:{sliderValue}</span>
      <Slider
      defaultValue={[sliderValue]}
      onValueChange={(value)=> setSliderValue(value[0])}
      max={100}
      step={1}
    />
    <span>Slider Range Value:{rangeValue.join(',')}</span>
      <Slider
      defaultValue={rangeValue}
      onValueChange={setrangeValue}
      max={100}
      step={1}
    />
    </div>
  );
}