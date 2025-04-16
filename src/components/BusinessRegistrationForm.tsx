import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Props {
  prefillType?: string;
}

const registrationTypes = [
  "Private Limited Company",
  "One Person Company (OPC)",
  "Partnership Firm",
  "MSME Registration",
  "IEC Code",
  "PSARA License",
  "CE Certification",
  "NBFC Registration",
  "Plastic Waste Authorization",
  "GST Registration",
];

const BusinessRegistrationForm: React.FC<Props> = ({ prefillType }) => {
  const [selectedType, setSelectedType] = useState(prefillType || "");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    businessName: "",
    registrationType: prefillType || "",
  });

  useEffect(() => {
    if (prefillType) {
      setFormData((prev) => ({ ...prev, registrationType: prefillType }));
    }
  }, [prefillType]);

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Integrate with Nhost / Hasura here
  };

  return (
    <Card className="p-6 shadow-xl rounded-2xl">
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Full Name</Label>
            <Input placeholder="Your name" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} />
          </div>

          <div>
            <Label>Email</Label>
            <Input type="email" placeholder="you@example.com" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} />
          </div>

          <div>
            <Label>Mobile</Label>
            <Input type="tel" placeholder="10-digit mobile" value={formData.mobile} onChange={(e) => handleChange("mobile", e.target.value)} />
          </div>

          <div>
            <Label>Business Name</Label>
            <Input placeholder="Your company name" value={formData.businessName} onChange={(e) => handleChange("businessName", e.target.value)} />
          </div>

          <div>
            <Label>Registration Type</Label>
            <Select value={formData.registrationType} onValueChange={(val) => {
              setSelectedType(val);
              handleChange("registrationType", val);
            }}>
              <SelectTrigger>
                <SelectValue placeholder="Select a type" />
              </SelectTrigger>
              <SelectContent>
                {registrationTypes.map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full mt-4">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default BusinessRegistrationForm;
