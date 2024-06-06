import { Box, Button, Container, Flex, Heading, Text, VStack, HStack, Image, useBreakpointValue } from "@chakra-ui/react";
import { FaRocket, FaCheckCircle, FaQuoteLeft } from "react-icons/fa";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            Llama 3
          </Heading>
        </Flex>
        <Box display={{ base: "block", md: "none" }} onClick={() => console.log("toggle menu")}>
          <svg fill="white" width="12px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>
        <HStack display={{ base: "none", md: "flex" }} spacing={8} align="center">
          <Button variant="ghost">Features</Button>
          <Button variant="ghost">Testimonials</Button>
          <Button variant="ghost">Contact</Button>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Flex
        align="center"
        justify="center"
        height="80vh"
        bgImage="url('https://via.placeholder.com/1920x1080')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        color="white"
        textAlign="center"
        p={8}
      >
        <VStack spacing={6}>
          <Heading as="h1" size="2xl">
            Welcome to Llama 3
          </Heading>
          <Text fontSize="xl">The next generation AI language model</Text>
          <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
            Get Started
          </Button>
        </VStack>
      </Flex>

      {/* Features Section */}
      <Box p={8} bg="gray.100">
        <Heading as="h2" size="xl" textAlign="center" mb={6}>
          Features
        </Heading>
        <Flex wrap="wrap" justify="space-around">
          <VStack spacing={4} maxW="sm" p={4} bg="white" borderRadius="md" boxShadow="md">
            <FaCheckCircle size="24px" />
            <Heading as="h3" size="md">
              Feature One
            </Heading>
            <Text textAlign="center">Description of feature one.</Text>
          </VStack>
          <VStack spacing={4} maxW="sm" p={4} bg="white" borderRadius="md" boxShadow="md">
            <FaCheckCircle size="24px" />
            <Heading as="h3" size="md">
              Feature Two
            </Heading>
            <Text textAlign="center">Description of feature two.</Text>
          </VStack>
          <VStack spacing={4} maxW="sm" p={4} bg="white" borderRadius="md" boxShadow="md">
            <FaCheckCircle size="24px" />
            <Heading as="h3" size="md">
              Feature Three
            </Heading>
            <Text textAlign="center">Description of feature three.</Text>
          </VStack>
        </Flex>
      </Box>

      {/* Testimonials Section */}
      <Box p={8}>
        <Heading as="h2" size="xl" textAlign="center" mb={6}>
          Testimonials
        </Heading>
        <Flex wrap="wrap" justify="space-around">
          <VStack spacing={4} maxW="sm" p={4} bg="gray.100" borderRadius="md" boxShadow="md">
            <FaQuoteLeft size="24px" />
            <Text textAlign="center">"Llama 3 has revolutionized our workflow!"</Text>
            <Text fontWeight="bold">- User One</Text>
          </VStack>
          <VStack spacing={4} maxW="sm" p={4} bg="gray.100" borderRadius="md" boxShadow="md">
            <FaQuoteLeft size="24px" />
            <Text textAlign="center">"An incredible AI model with amazing capabilities."</Text>
            <Text fontWeight="bold">- User Two</Text>
          </VStack>
          <VStack spacing={4} maxW="sm" p={4} bg="gray.100" borderRadius="md" boxShadow="md">
            <FaQuoteLeft size="24px" />
            <Text textAlign="center">"Llama 3 is a game-changer for our business."</Text>
            <Text fontWeight="bold">- User Three</Text>
          </VStack>
        </Flex>
      </Box>

      {/* Footer */}
      <Box bg="teal.500" color="white" p={4} textAlign="center">
        <Text>&copy; 2023 Llama 3. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;