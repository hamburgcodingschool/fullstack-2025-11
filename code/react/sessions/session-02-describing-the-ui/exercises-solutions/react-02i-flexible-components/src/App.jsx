import './App.css';
import { Button, ChakraProvider } from '@chakra-ui/react';

export function App() {
  return (
    <ChakraProvider>
      <Button>Click me</Button>
      <hr />
      <Button size="xs">Click me</Button>
      <Button size="sm">Click me</Button>
      <Button size="lg">Click me</Button>
      <hr />
      <Button variant="solid">Click me</Button>
      <Button variant="outline">Click me</Button>
      <Button variant="ghost">Click me</Button>
      <hr />
      <Button colorScheme="orange">Click me</Button>
      <Button colorScheme="cyan">Click me</Button>
      <Button colorScheme="pink">Click me</Button>
      <hr />
      <Button size="sm" variant="ghost" colorScheme="cyan">
        Click me
      </Button>
      <Button size="lg" variant="outline" colorScheme="pink">
        Click me
      </Button>
      <Button size="xs" variant="solid" colorScheme="orange">
        Click me
      </Button>
    </ChakraProvider>
  );
}
