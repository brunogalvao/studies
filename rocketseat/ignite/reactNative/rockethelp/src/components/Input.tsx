import { Input as NativeBaseInput, IInputProps } from 'native-base';

export function Input({ ...rest } : IInputProps) {
  return (
    <NativeBaseInput
        bg="gray.700"
        h={14}
        size="md"
        borderWidth={0}
        fontSize="md"
        fontFamily="body"
        placeholderTextColor="gray.300"
        color="gray.100"
        _focus={{
            borderWidth: 1,
            borderColor: 'green.500',
            bg: "gray.700"
        }}
        { ...rest }
    />
  )
}