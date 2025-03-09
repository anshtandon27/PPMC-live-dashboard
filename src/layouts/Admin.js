// Chakra imports
import {
  Box,
  useColorMode,
  Flex,
  Text,
  Heading,
  Icon,
  HStack,
  Spinner,
  VStack
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "views/Dashboard/Dashboard.js";
// Custom components
import MainPanel from "../components/Layout/MainPanel";
import PanelContainer from "../components/Layout/PanelContainer";
import PanelContent from "../components/Layout/PanelContent";
import bgAdmin from "assets/img/admin-background.png";
import { ClockIcon } from "components/Icons/Icons.js";

export default function AdminLayout() {
  const { colorMode } = useColorMode();
  const titleColor = "white";
  const bgGradient = "linear-gradient(90deg, #011F5B 0%, #254AA1 100%)"; // Penn Blue gradient
  const [isLoading, setIsLoading] = useState(true);
  
  // Penn Blue overlay for the background image
  const overlayColor = "rgba(1, 31, 91, 0.5)"; // Penn Blue with opacity

  // Add state for current date and time
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  
  // Update the time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 60000);
    
    // Clear the interval when component unmounts
    return () => clearInterval(timer);
  }, []);
  
  // Format the date and time
  const formattedDate = currentDateTime.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
  
  const formattedTime = currentDateTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box>
      {/* Background Image with Penn Blue Overlay */}
      <Box
        minH='40vh'
        w='100%'
        position='absolute'
        bgImage={colorMode === "light" ? bgAdmin : "none"}
        bgSize='cover'
        top='0'
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: overlayColor,
          zIndex: 0
        }}
      />
      
      {/* Hospital Title Banner */}
      <Flex 
        position="relative" 
        zIndex="1" 
        justifyContent="space-between" 
        alignItems="center"
        w="100%" 
        py={{ base: 4, md: 5 }}
        px={6}
        bg={bgGradient}
        boxShadow="0 4px 20px rgba(0, 0, 0, 0.15)"
      >
        {/* Empty flex to balance the layout */}
        <Box flex="1" />
        
        {/* Centered title */}
        <Heading 
          as="h1" 
          fontSize={{ base: "3xl", md: "4xl" }}
          color={titleColor} 
          fontWeight="bold"
          letterSpacing="wide"
          textShadow="0 2px 4px rgba(0, 0, 0, 0.2)"
          textAlign="center"
        >
          Penn Presbyterian Medical Center
        </Heading>
        
        {/* Date and Time Display - takes up the same space as the empty Box */}
        <Box flex="1" display="flex" justifyContent="flex-end">
          <HStack spacing={4} bg="rgba(255,255,255,0.1)" p={2} borderRadius="md">
            <VStack align="flex-end" spacing={0}>
              <Text fontSize="sm" fontWeight="medium" color="white">{formattedDate}</Text>
              <Text fontSize="lg" fontWeight="bold" color="white">{formattedTime}</Text>
            </VStack>
            <Icon as={ClockIcon} h="24px" w="24px" color="white" />
          </HStack>
        </Box>
      </Flex>
      
      <MainPanel w="100%" mt="0">
        <PanelContent>
          <PanelContainer>
            {isLoading ? (
              <Flex justify="center" align="center" h="70vh">
                <Spinner 
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="#011F5B"
                  size="xl"
                />
              </Flex>
            ) : (
              <Switch>
                <Route path="/live-status" component={Dashboard} />
                <Route path="/" component={Dashboard} />
              </Switch>
            )}
          </PanelContainer>
        </PanelContent>
      </MainPanel>
    </Box>
  );
}
