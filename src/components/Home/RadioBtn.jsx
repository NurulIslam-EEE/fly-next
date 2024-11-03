"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function RadioBtn() {
  const radioValue = (e) => {
    console.log(e);
  };
  return (
    <RadioGroup
      defaultValue="comfortable"
      className="flex mb-4"
      onChange={(e) => radioValue(e.target.value)}
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="default"
          id="r1"
          className="text-[#00026e] border-[#00026e]"
        />
        <Label htmlFor="r1" className="text-[#00026e]">
          One way
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="comfortable"
          id="r2"
          className="text-[#00026e] border-[#00026e]"
        />
        <Label htmlFor="r2" className="text-[#00026e]">
          Round way
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="compact"
          id="r3"
          className="text-[#00026e] border-[#00026e]"
        />
        <Label htmlFor="r3" className="text-[#00026e]">
          Multi city
        </Label>
      </div>
    </RadioGroup>
  );
}
