"use client";

import { useState } from "react";
import {
  Dialog,
  Button,
  TextField,
  Select,
  Flex,
  Text,
  TextArea,
  Card,
  Grid,
} from "@radix-ui/themes";
import { MagnifyingGlassIcon, PlusIcon } from "@radix-ui/react-icons";
import { SUPPORTED_LANGUAGES } from "@/constants";
import { DictionaryFormData, CustomProperty } from "@/types";



function Main() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState<DictionaryFormData>({
    name: "",
    displayName: "",
    language: "",
    languageCode: "",
    description: "",
    customProperties: [],
  });

  const [customProperties, setCustomProperties] = useState<CustomProperty[]>(
    []
  );

  const handleLanguageChange = (languageCode: string) => {
    const selectedLang = SUPPORTED_LANGUAGES.find(
      (lang) => lang.code === languageCode
    );
    if (selectedLang) {
      setFormData((prev) => ({
        ...prev,
        language: selectedLang.name,
        languageCode: selectedLang.code,
        displayName: selectedLang.displayName,
      }));
    }
  };

  const addCustomProperty = () => {
    const newProperty: CustomProperty = {
      id: `prop_${Date.now()}`,
      name: "",
      localizedName: "",
      type: "string",
      required: false,
      description: "",
    };
    setCustomProperties([...customProperties, newProperty]);
  };

  const updateCustomProperty = (
    id: string,
    field: keyof CustomProperty,
    value: string | boolean
  ) => {
    setCustomProperties((prev) =>
      prev.map((prop) => (prop.id === id ? { ...prop, [field]: value } : prop))
    );
  };

  const removeCustomProperty = (id: string) => {
    setCustomProperties((prev) => prev.filter((prop) => prop.id !== id));
  };

  const handleSubmit = async () => {
    // Here you would:
    // 1. Create dictionary record in Appwrite
    // 2. Create collection schema with custom properties
    // 3. Use Node.js SDK to add dynamic attributes to collection

    console.log("Dictionary Data:", {
      ...formData,
      customProperties,
    });

    // Close dialog and redirect or refresh
    setOpen(false);
  };

  return (
    <main className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h4 className="font-bold text-2xl text-slate-700">Dictionaries</h4>

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger>
            <Button className="px-4 py-2 bg-amber-400 hover:bg-amber-500 text-slate-800 font-medium rounded-lg flex items-center gap-2">
              <PlusIcon width="18" height="18" />
              Create Dictionary
            </Button>
          </Dialog.Trigger>

          <Dialog.Content
            maxWidth="800px"
            className="max-h-[90vh] overflow-y-auto"
          >
            <Dialog.Title className="text-xl font-bold text-slate-800 mb-2">
              Create New Dictionary
            </Dialog.Title>
            <Dialog.Description size="2" mb="4" className="text-slate-600">
              Set up a new dictionary for an African indigenous language with
              custom properties.
            </Dialog.Description>

            <Flex direction="column" gap="4">
              {/* Basic Dictionary Information */}
              <Card className="p-4">
                <Text
                  size="3"
                  weight="bold"
                  className="block mb-3 text-slate-700"
                >
                  Basic Information
                </Text>

                <Grid columns="2" gap="3" className="mb-3">
                  <label>
                    <Text as="div" size="2" mb="1" weight="medium">
                      Dictionary Name *
                    </Text>
                    <TextField.Root
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      placeholder="e.g., Comprehensive IsiXhosa Dictionary"
                    />
                  </label>

                  <label>
                    <Text as="div" size="2" mb="1" weight="medium">
                      Language *
                    </Text>
                    <Select.Root
                      value={formData.languageCode}
                      onValueChange={handleLanguageChange}
                    >
                      <Select.Trigger placeholder="Select language" />
                      <Select.Content>
                        {SUPPORTED_LANGUAGES.map((lang) => (
                          <Select.Item key={lang.code} value={lang.code}>
                            {lang.displayName} ({lang.name})
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select.Root>
                  </label>
                </Grid>

                <label className="block mb-3">
                  <Text as="div" size="2" mb="1" weight="medium">
                    Description
                  </Text>
                  <TextArea
                    value={formData.description}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    placeholder="Brief description of this dictionary's purpose and scope..."
                    rows={3}
                  />
                </label>
              </Card>

              {/* Custom Properties Section */}
              <Card className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <Text size="3" weight="bold" className="text-slate-700">
                    Custom Properties
                  </Text>
                  <Button
                    variant="soft"
                    onClick={addCustomProperty}
                    className="text-sm"
                  >
                    <PlusIcon width="14" height="14" />
                    Add Property
                  </Button>
                </div>

                <Text size="1" className="text-slate-500 mb-3 block">
                  Define language-specific properties (e.g., "isenzo" for verb
                  in isiXhosa)
                </Text>

                {customProperties.map((property, index) => (
                  <Card key={property.id} className="p-3 mb-3 bg-slate-50">
                    <Grid columns="3" gap="2" className="mb-2">
                      <TextField.Root
                        placeholder="English name (e.g., verb)"
                        value={property.name}
                        onChange={(e) =>
                          updateCustomProperty(
                            property.id,
                            "name",
                            e.target.value
                          )
                        }
                      />
                      <TextField.Root
                        placeholder="Local name (e.g., isenzo)"
                        value={property.localizedName}
                        onChange={(e) =>
                          updateCustomProperty(
                            property.id,
                            "localizedName",
                            e.target.value
                          )
                        }
                      />
                      <Select.Root
                        value={property.type}
                        onValueChange={(value) =>
                          updateCustomProperty(property.id, "type", value)
                        }
                      >
                        <Select.Trigger />
                        <Select.Content>
                          <Select.Item value="string">Text</Select.Item>
                          <Select.Item value="array">List</Select.Item>
                          <Select.Item value="boolean">Yes/No</Select.Item>
                          <Select.Item value="integer">Number</Select.Item>
                        </Select.Content>
                      </Select.Root>
                    </Grid>

                    <div className="flex justify-between items-center">
                      <TextField.Root
                        placeholder="Description of this property..."
                        value={property.description}
                        onChange={(e) =>
                          updateCustomProperty(
                            property.id,
                            "description",
                            e.target.value
                          )
                        }
                        className="flex-1 mr-2"
                      />
                      <Button
                        variant="soft"
                        color="red"
                        onClick={() => removeCustomProperty(property.id)}
                        size="1"
                      >
                        Remove
                      </Button>
                    </div>
                  </Card>
                ))}

                {customProperties.length === 0 && (
                  <div className="text-center py-4 text-slate-400 border-2 border-dashed border-slate-200 rounded">
                    No custom properties added yet. Click "Add Property" to get
                    started.
                  </div>
                )}
              </Card>
            </Flex>

            <Flex gap="3" mt="6" justify="end">
              <Dialog.Close>
                <Button variant="soft" color="gray">
                  Cancel
                </Button>
              </Dialog.Close>
              <Button
                onClick={handleSubmit}
                className="bg-amber-400 hover:bg-amber-500 text-slate-800"
              >
                Create Dictionary
              </Button>
            </Flex>
          </Dialog.Content>
        </Dialog.Root>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon
              width="18"
              height="18"
              className="text-slate-400"
            />
          </div>
          <input
            type="text"
            placeholder="Search dictionaries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
          />
        </div>
      </div>

      {/* Dictionary List - Placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* This would be populated with actual dictionary cards */}
        <Card className="p-4 hover:shadow-md transition-shadow">
          <Text size="3" weight="bold" className="block mb-2">
            IsiXhosa Dictionary
          </Text>
          <Text size="2" className="text-slate-600 mb-3">
            Comprehensive isiXhosa language dictionary
          </Text>
          <div className="flex justify-between items-center">
            <Text size="1" className="text-slate-400">
              1,247 words
            </Text>
            <Button variant="soft" size="1">
              Manage
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
}

export default Main;
