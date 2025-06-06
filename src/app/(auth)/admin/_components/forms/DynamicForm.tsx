import { useForm, FormProvider, useFieldArray, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button, Flex, TextField, Select, Text, Card, Grid, TextArea } from '@radix-ui/themes';
import { PlusIcon, Cross2Icon } from '@radix-ui/react-icons';

interface DynamicFormProps {
  schema: z.ZodObject<any>;
  defaultValues?: any;
  onSubmit: (data: any) => void;
  dictionary: any;
  children: React.ReactNode;
}

export const DynamicForm = ({ 
  schema, 
  defaultValues, 
  onSubmit, 
  dictionary,
  children 
}: DynamicFormProps) => {
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues
  });

  const { handleSubmit, control, watch } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {children}
        
        <Flex gap="3" justify="end" mt-6>
          <Button type="submit" className="bg-amber-400 hover:bg-amber-500 text-slate-800">
            Submit
          </Button>
        </Flex>
      </form>
    </FormProvider>
  );
};

interface DynamicFieldProps {
  name: string;
  label: string;
  type?: 'text' | 'select' | 'textarea' | 'checkbox' | 'array';
  options?: { value: string; label: string }[];
  localizedLabel?: string;
  required?: boolean;
}

export const DynamicField = ({ 
  name, 
  label, 
  type = 'text', 
  options = [], 
  localizedLabel,
  required = false 
}: DynamicFieldProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <label className="block">
          <Flex gap="2" align="center" mb="1">
            <Text as="div" size="2" weight="medium">
              {label}
            </Text>
            {localizedLabel && (
              <Text as="div" size="1" className="text-slate-500">
                ({localizedLabel})
              </Text>
            )}
            {required && <span className="text-red-500">*</span>}
          </Flex>
          
          {type === 'text' && (
            <TextField.Root
              {...field}
              placeholder={label}
              className="w-full"
            />
          )}
          
          {type === 'textarea' && (
            <TextArea
              {...field}
              placeholder={label}
              className="w-full"
            />
          )}
          
          {type === 'select' && (
            <Select.Root 
              value={field.value} 
              onValueChange={field.onChange}
            >
              <Select.Trigger className="w-full" />
              <Select.Content>
                {options.map((option) => (
                  <Select.Item key={option.value} value={option.value}>
                    {option.label}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          )}
          
          {error && (
            <Text as="div" size="1" color="red" mt="1">
              {error.message}
            </Text>
          )}
        </label>
      )}
    />
  );
};

interface DynamicArrayFieldProps {
  name: string;
  label: string;
  itemSchema: z.ZodObject<any>;
  defaultItemValue: any;
  renderItem: (index: number) => React.ReactNode;
}

export const DynamicArrayField = ({ 
  name, 
  label, 
  itemSchema, 
  defaultItemValue, 
  renderItem 
}: DynamicArrayFieldProps) => {
  const { fields, append, remove } = useFieldArray({
    name,
  });

  return (
    <div className="space-y-4">
      <Text as="div" size="2" weight="medium" mb="2">
        {label}
      </Text>
      
      {fields.map((field, index) => (
        <Card key={field.id} className="p-3 bg-slate-50">
          <Flex justify="end" mb="2">
            <Button
              variant="soft"
              color="red"
              size="1"
              onClick={() => remove(index)}
            >
              <Cross2Icon width="12" height="12" />
            </Button>
          </Flex>
          
          {renderItem(index)}
        </Card>
      ))}
      
      <Button
        variant="soft"
        onClick={() => append(defaultItemValue)}
        className="text-sm"
      >
        <PlusIcon width="14" height="14" />
        Add Item
      </Button>
    </div>
  );
};