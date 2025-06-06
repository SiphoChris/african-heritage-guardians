import { useCallback, useState } from 'react';
import { Controller } from 'react-hook-form';
import { Button, Text, Flex } from '@radix-ui/themes';
import { UploadIcon } from '@radix-ui/react-icons';
import { uploadAudioFile } from '@/services/FileService';

interface AudioUploadProps {
  name: string;
  label: string;
}

export const AudioUpload = ({ name, label }: AudioUploadProps) => {
  const [isUploading, setIsUploading] = useState(false);

  return (
    <Controller
      name={name}
      render={({ field }) => (
        <label className="block">
          <Text as="div" size="2" weight="medium" mb="1">
            {label}
          </Text>
          
          <Flex gap="2" align="center">
            <input
              type="file"
              accept="audio/*"
              onChange={async (e) => {
                if (e.target.files?.[0]) {
                  setIsUploading(true);
                  try {
                    const file = e.target.files[0];
                    const result = await uploadAudioFile(file);
                    const url = URL.createObjectURL(file);
                    field.onChange(url);
                  } catch (error) {
                    console.error('Upload failed:', error);
                  } finally {
                    setIsUploading(false);
                  }
                }
              }}
              className="hidden"
              id={`audio-upload-${name}`}
            />
            
            <Button
              variant="soft"
              as="label"
              htmlFor={`audio-upload-${name}`}
              disabled={isUploading}
            >
              <UploadIcon width="14" height="14" />
              Upload Audio
            </Button>
            
            {field.value && (
              <Text size="1" className="text-slate-500">
                Audio ready
              </Text>
            )}
          </Flex>
        </label>
      )}
    />
  );
};