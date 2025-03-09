// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Progress,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
  useColorModeValue,
  Badge,
  Icon,
  Tooltip,
  Divider,
  HStack,
  VStack,
  Image,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import LineChart from "components/Charts/LineChart";
import IconBox from "components/Icons/IconBox";
// Custom icons
import {
  DocumentIcon,
  ProfileIcon,
} from "components/Icons/Icons.js";
import React, { useEffect, useState } from "react";
// Variables
import {
  lineChartData,
  lineChartOptions,
} from "variables/charts";
// For Fi icons (Feather icons)
import { 
  FiInfo, 
  FiTrendingUp, 
  FiTrendingDown, 
  FiUsers, 
  FiMonitor, 
  FiDroplet, 
  FiSmartphone,
  FiMessageSquare, 
  FiCoffee, 
  FiBook, 
  FiBluetooth,
  FiWifi,
  FiActivity
} from "react-icons/fi";
// For Md icons (Material Design icons)
import { MdSpa, MdMood, MdFitnessCenter } from "react-icons/md";
// Import necessary components for carousel
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
// Import additional health-related icons from Material Design icons
import { FiThermometer } from "react-icons/fi";
// Import bed icon from Material Design icons
import { MdBed } from "react-icons/md";

export default function Dashboard() {
  // Chakra Color Mode
  const iconBlue = "blue.600"; // Penn Blue
  const iconRed = "red.600"; // Penn Red
  const iconBoxInside = "white";
  const textColor = useColorModeValue("gray.700", "white");
  const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textTableColor = useColorModeValue("gray.500", "white");
  const cardBg = "white";
  const cardShadow = "0 8px 16px rgba(1, 31, 91, 0.1)";
  const gradientBg = "linear-gradient(90deg, #011F5B 0%, #254AA1 100%)";
  
  const { colorMode } = useColorMode();

  // State for wellness tips carousel
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const wellnessTips = [
    {
      title: "Stress Relief",
      content: "Try deep breathing: Inhale for 4 counts, hold for 4, exhale for 6.",
      icon: MdSpa,
      color: "blue.500"
    },
    {
      title: "Stay Hydrated",
      content: "Remember to drink water regularly, especially while waiting.",
      icon: FiDroplet,
      color: "cyan.400"
    },
    {
      title: "Mindfulness",
      content: "Focus on the present moment to reduce anxiety during your wait.",
      icon: MdMood,
      color: "purple.400"
    },
    {
      title: "Stretch Break",
      content: "Gentle stretching can help reduce stiffness from sitting too long.",
      icon: MdFitnessCenter,
      color: "green.400"
    },
    {
      title: "Digital Detox",
      content: "Consider limiting screen time to reduce eye strain and mental fatigue.",
      icon: FiSmartphone,
      color: "orange.400"
    }
  ];

  // Auto-rotate wellness tips
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTipIndex((prevIndex) => 
        prevIndex === wellnessTips.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000); // Change tip every 8 seconds
    
    return () => clearInterval(interval);
  }, []);

  // Update chart options to use Penn colors
  const customLineChartOptions = {
    ...lineChartOptions,
    colors: ["#FF0000", "#FFD700", "#00FF00"], // Red for Acute Care, Yellow for Super Track, Green for Forward Flow
    fill: {
      ...lineChartOptions.fill,
      colors: ["#FF0000", "#FFD700", "#00FF00"], // Ensure fill colors match the line colors
      opacity: 0.7, // Slightly reduce opacity for better visibility
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'right',
      labels: {
        colors: '#fff',
        useSeriesColors: false
      }
    },
    stroke: {
      width: 2, // Make lines thicker
      curve: 'smooth'
    }
  };

  return (
    <Flex flexDirection='column' pt={{ base: "80px", md: "35px" }}>
      {/* Stats Cards */}
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px' mb='20px'>
        <Card minH='125px' bg={cardBg} boxShadow={cardShadow} borderRadius="16px" variant="stats">
          <Flex direction='column'>
            <Flex
              flexDirection='row'
              align='center'
              justify='center'
              w='100%'
              mb='25px'>
              <Stat me='auto'>
                <StatLabel
                  fontSize='xs'
                  color='gray.500'
                  fontWeight='bold'
                  textTransform='uppercase'>
                  Patient Admissions
                </StatLabel>
                <Flex alignItems="center">
                  <StatNumber fontSize='lg' color={textColor} fontWeight='bold'>
                    53
                  </StatNumber>
                  <Badge ml={2} colorScheme="blue" borderRadius="full" px={2}>
                    <Flex alignItems="center">
                      <Icon as={FiTrendingUp} mr={1} />
                      +3.48%
                    </Flex>
                  </Badge>
                </Flex>
              </Stat>
              <IconBox
                borderRadius='12px'
                as='box'
                h={"45px"}
                w={"45px"}
                bg={iconBlue}>
                <Icon as={FiThermometer} h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
            <Text color='gray.500' fontSize='sm'>
              Since yesterday
            </Text>
          </Flex>
        </Card>
        <Card minH='125px' bg={cardBg} boxShadow={cardShadow} borderRadius="16px" variant="stats">
          <Flex direction='column'>
            <Flex
              flexDirection='row'
              align='center'
              justify='center'
              w='100%'
              mb='25px'>
              <Stat me='auto'>
                <StatLabel
                  fontSize='xs'
                  color='gray.500'
                  fontWeight='bold'
                  textTransform='uppercase'>
                  Available Beds
                </StatLabel>
                <Flex alignItems="center">
                  <StatNumber fontSize='lg' color={textColor} fontWeight='bold'>
                    32
                  </StatNumber>
                  <Badge ml={2} colorScheme="red" borderRadius="full" px={2}>
                    <Flex alignItems="center">
                      <Icon as={FiTrendingDown} mr={1} />
                      -5.2%
                    </Flex>
                  </Badge>
                </Flex>
              </Stat>
              <IconBox
                borderRadius='12px'
                as='box'
                h={"45px"}
                w={"45px"}
                bg={iconRed}>
                <Icon as={MdBed} h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
            <Text color='gray.500' fontSize='sm'>
              Since yesterday
            </Text>
          </Flex>
        </Card>
        <Card minH='125px' bg={cardBg} boxShadow={cardShadow} borderRadius="16px" variant="stats">
          <Flex direction='column'>
            <Flex
              flexDirection='row'
              align='center'
              justify='center'
              w='100%'
              mb='25px'>
              <Stat me='auto'>
                <StatLabel
                  fontSize='xs'
                  color='gray.500'
                  fontWeight='bold'
                  textTransform='uppercase'>
                  Emergency Cases
                </StatLabel>
                <Flex alignItems="center">
                  <StatNumber fontSize='lg' color={textColor} fontWeight='bold'>
                    7
                  </StatNumber>
                  <Tooltip label="Current active cases">
                    <Icon as={FiInfo} ml={2} color="gray.400" />
                  </Tooltip>
                </Flex>
              </Stat>
              <IconBox
                borderRadius='12px'
                as='box'
                h={"45px"}
                w={"45px"}
                bg={iconBlue}>
                <Icon as={FiThermometer} h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
            <Text color='gray.500' fontSize='sm'>
              <Text as='span' color='blue.600' fontWeight='bold'>
                -2.82%{" "}
              </Text>
              Since last week
            </Text>
          </Flex>
        </Card>
        <Card minH='125px' bg={cardBg} boxShadow={cardShadow} borderRadius="16px" variant="stats">
          <Flex direction='column'>
            <Flex
              flexDirection='row'
              align='center'
              justify='center'
              w='100%'
              mb='25px'>
              <Stat me='auto'>
                <StatLabel
                  fontSize='xs'
                  color='gray.500'
                  fontWeight='bold'
                  textTransform='uppercase'>
                  Staff On Duty
                </StatLabel>
                <Flex alignItems="center">
                  <StatNumber fontSize='lg' color={textColor} fontWeight='bold'>
                    82
                  </StatNumber>
                </Flex>
              </Stat>
              <IconBox
                borderRadius='12px'
                as='box'
                h={"45px"}
                w={"45px"}
                bg={iconBlue}>
                <Icon as={FiUsers} h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
            <Text color='gray.500' fontSize='sm'>
              <Text as='span' color='blue.600' fontWeight='bold'>
                Full capacity{" "}
              </Text>
            </Text>
          </Flex>
        </Card>
      </SimpleGrid>

      {/* Wellness Tips Carousel */}
      <Card 
        mb='20px' 
        bg={cardBg} 
        boxShadow={cardShadow} 
        borderRadius="16px" 
        variant="primary"
        borderTopColor="green.400"
      >
        <Flex direction='column'>
          <Flex
            flexDirection='row'
            align='center'
            justify='space-between'
            w='100%'
            mb='15px'>
            <HStack spacing={2}>
              <Icon as={MdSpa} color="green.500" h="20px" w="20px" />
              <Text fontSize='lg' color={textColor} fontWeight='bold'>
                Wellness Tips
              </Text>
            </HStack>
            <HStack>
              <IconBox
                as="button"
                onClick={() => setCurrentTipIndex(prev => prev === 0 ? wellnessTips.length - 1 : prev - 1)}
                bg="gray.100"
                h="30px"
                w="30px"
                _hover={{ bg: "gray.200" }}
              >
                <ChevronLeftIcon color="gray.500" />
              </IconBox>
              <IconBox
                as="button"
                onClick={() => setCurrentTipIndex(prev => (prev + 1) % wellnessTips.length)}
                bg="gray.100"
                h="30px"
                w="30px"
                _hover={{ bg: "gray.200" }}
              >
                <ChevronRightIcon color="gray.500" />
              </IconBox>
            </HStack>
          </Flex>
          <Flex 
            p={4} 
            bg="gray.50" 
            borderRadius="lg" 
            align="center" 
            justify="flex-start"
            minH="100px"
          >
            <IconBox
              borderRadius='full'
              h={"60px"}
              w={"60px"}
              bg={wellnessTips[currentTipIndex].color}
              mr={4}
            >
              <Icon 
                as={wellnessTips[currentTipIndex].icon} 
                h={"28px"} 
                w={"28px"} 
                color={iconBoxInside} 
              />
            </IconBox>
            <VStack align="start" spacing={1}>
              <Text fontWeight="bold" fontSize="lg" color={textColor}>
                {wellnessTips[currentTipIndex].title}
              </Text>
              <Text color="gray.600">
                {wellnessTips[currentTipIndex].content}
              </Text>
            </VStack>
          </Flex>
          <Flex justify="center" mt={2}>
            {wellnessTips.map((_, index) => (
              <Box
                key={index}
                h="8px"
                w="8px"
                borderRadius="full"
                bg={index === currentTipIndex ? "green.500" : "gray.200"}
                mx={1}
                cursor="pointer"
                onClick={() => setCurrentTipIndex(index)}
              />
            ))}
          </Flex>
        </Flex>
      </Card>

      {/* Charts and Tables */}
      <Grid
        templateColumns={{ sm: "1fr", lg: "2fr 1fr" }}
        templateRows={{ lg: "repeat(2, auto)" }}
        gap='20px'>
        <Card
          bg={gradientBg}
          p='0px'
          maxW={{ sm: "320px", md: "100%" }}
          boxShadow={cardShadow}
          borderRadius="16px"
          variant="primary">
          <Flex direction='column' mb='40px' p='28px 0px 0px 22px'>
            <HStack spacing={2} mb={2}>
              <Icon as={FiActivity} color="white" />
              <Text color='#fff' fontSize='lg' fontWeight='bold'>
                Patient Admissions Overview
              </Text>
            </HStack>
            <Text color='#fff' fontSize='sm'>
              <Text as='span' color='blue.100' fontWeight='bold'>
                (+8) more{" "}
              </Text>
              in Acute Care in the last 24 hours
            </Text>
          </Flex>
          <Box minH='300px'>
            <LineChart
              chartData={lineChartData}
              chartOptions={customLineChartOptions}
            />
          </Box>
        </Card>
        <Card p='0px' maxW={{ sm: "320px", md: "100%" }} bg={cardBg} boxShadow={cardShadow} borderRadius="16px" variant="primary">
          <Flex direction='column'>
            <Flex align='center' justify='space-between' p='22px'>
              <HStack spacing={2}>
                <Icon as={DocumentIcon} color="blue.600" />
                <Text fontSize='lg' color={textColor} fontWeight='bold'>
                  Performance Metrics
                </Text>
              </HStack>
              <Button variant='primary' maxH='30px' bg="blue.600" color="white" _hover={{ bg: "blue.700" }}>
                VIEW ALL
              </Button>
            </Flex>
            <Divider borderColor="gray.200" />
            <Box overflow={{ sm: "scroll", lg: "hidden" }}>
              <Table>
                <Thead>
                  <Tr bg={tableRowColor}>
                    <Th color='gray.500' borderColor={borderColor}>
                      Metric
                    </Th>
                    <Th color='gray.500' borderColor={borderColor}>
                      Value
                    </Th>
                    <Th color='gray.500' borderColor={borderColor}>
                      Status
                    </Th>
                    <Th color='gray.500' borderColor={borderColor}>
                      Trend
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td color={textTableColor} fontSize='sm' fontWeight='bold' borderColor={borderColor}>
                      Avg. Wait Time (ESI Level 4 & 5)
                    </Td>
                    <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                      327 min
                    </Td>
                    <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                      <Badge colorScheme="green">Normal</Badge>
                    </Td>
                    <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                      <Icon as={FiTrendingDown} color="green.500" />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td color={textTableColor} fontSize='sm' fontWeight='bold' borderColor={borderColor}>
                      Avg. Wait Time (ESI Level 3)
                    </Td>
                    <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                      74 min
                    </Td>
                    <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                      <Badge colorScheme="yellow">Medium</Badge>
                    </Td>
                    <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                      <Icon as={FiTrendingUp} color="yellow.500" />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td color={textTableColor} fontSize='sm' fontWeight='bold' borderColor={borderColor}>
                      Avg. Wait Time (ESI Level 2)
                    </Td>
                    <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                      12 min
                    </Td>
                    <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                      <Badge colorScheme="yellow">Medium</Badge>
                    </Td>
                    <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                      <Icon as={FiTrendingUp} color="yellow.500" />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td color={textTableColor} fontSize='sm' fontWeight='bold' borderColor={borderColor}>
                      Length of Stay (Acute)
                    </Td>
                    <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                      4.2 hrs
                    </Td>
                    <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                      <Badge colorScheme="green">Normal</Badge>
                    </Td>
                    <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                      <Icon as={FiTrendingDown} color="green.500" />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td color={textTableColor} fontSize='sm' fontWeight='bold' borderColor={borderColor}>
                      Bed Occupancy Rate
                    </Td>
                    <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                      87%
                    </Td>
                    <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                      <Badge colorScheme="red">Critical</Badge>
                    </Td>
                    <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                      <Icon as={FiTrendingUp} color="red.500" />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td color={textTableColor} fontSize='sm' fontWeight='bold' borderColor={borderColor}>
                      Nurse-to-Patient Ratio
                    </Td>
                    <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                      1:4
                    </Td>
                    <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                      <Badge colorScheme="yellow">Medium</Badge>
                    </Td>
                    <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                      <Icon as={FiTrendingUp} color="yellow.500" />
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          </Flex>
        </Card>
        <Card p='0px' maxW={{ sm: "320px", md: "100%" }} bg={cardBg} boxShadow={cardShadow} borderRadius="16px" variant="primary">
          <Flex direction='column'>
            <Flex align='center' justify='space-between' p='22px'>
              <HStack spacing={2}>
                <Icon as={FiUsers} color="blue.600" />
                <Text fontSize='lg' color={textColor} fontWeight='bold'>
                  Staff Availability
                </Text>
              </HStack>
              <Button variant='primary' maxH='30px' bg="blue.600" color="white" _hover={{ bg: "blue.700" }}>
                VIEW ALL
              </Button>
            </Flex>
            <Divider borderColor="gray.200" />
            <Box overflow={{ sm: "scroll", lg: "hidden" }}>
              <Table>
                <Thead>
                  <Tr bg={tableRowColor}>
                    <Th color='gray.500' borderColor={borderColor}>
                      Staff Name
                    </Th>
                    <Th color='gray.500' borderColor={borderColor}>
                      Specialty
                    </Th>
                    <Th color='gray.500' borderColor={borderColor}>
                      Zone
                    </Th>
                    <Th color='gray.500' borderColor={borderColor}>
                      Status
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td color={textTableColor} fontSize='sm' fontWeight='bold' borderColor={borderColor}>
                      Dr. Sarah Johnson
                    </Td>
                    <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                      Cardiology
                    </Td>
                    <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                      Acute Care
                    </Td>
                    <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                      <Badge colorScheme="green">On Duty</Badge>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td color={textTableColor} fontSize='sm' fontWeight='bold' borderColor={borderColor}>
                      Dr. Michael Chen
                    </Td>
                    <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                      Neurology
                    </Td>
                    <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                      Forward Flow
                    </Td>
                    <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                      <Badge colorScheme="green">On Duty</Badge>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td color={textTableColor} fontSize='sm' fontWeight='bold' borderColor={borderColor}>
                      Nurse Lisa Rodriguez
                    </Td>
                    <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                      Emergency
                    </Td>
                    <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                      Super Track
                    </Td>
                    <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                      <Badge colorScheme="yellow">Break</Badge>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td color={textTableColor} fontSize='sm' fontWeight='bold' borderColor={borderColor}>
                      Dr. James Wilson
                    </Td>
                    <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                      Trauma
                    </Td>
                    <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                      Acute Care
                    </Td>
                    <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                      <Badge colorScheme="red">Off Duty</Badge>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td color={textTableColor} fontSize='sm' fontWeight='bold' borderColor={borderColor}>
                      Nurse Robert Taylor
                    </Td>
                    <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                      Emergency
                    </Td>
                    <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                      Forward Flow
                    </Td>
                    <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                      <Badge colorScheme="green">On Duty</Badge>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          </Flex>
        </Card>
        <Card p='0px' maxW={{ sm: "320px", md: "100%" }} bg={cardBg} boxShadow={cardShadow} borderRadius="16px" variant="primary">
          <Flex direction='column' mb='40px' p='28px 0px 0px 22px'>
            <HStack spacing={2} mb={2}>
              <Icon as={FiMonitor} color="blue.600" />
              <Text color='blue.600' fontSize='sm' fontWeight='bold' textTransform="uppercase">
                RESOURCE UTILIZATION
              </Text>
            </HStack>
            <Text color={textColor} fontSize='lg' fontWeight='bold'>
              Critical Resources Status
            </Text>
          </Flex>
          <Box px={6} pb={6}>
            <VStack spacing={6} align="stretch">
              <Box>
                <Flex justify="space-between" mb={2}>
                  <Text fontWeight="medium">ICU Beds</Text>
                  <Text fontWeight="bold" color={textColor}>78%</Text>
                </Flex>
                <Progress value={78} size="sm" colorScheme="yellow" borderRadius="full" />
              </Box>
              
              <Box>
                <Flex justify="space-between" mb={2}>
                  <Text fontWeight="medium">Ventilators</Text>
                  <Text fontWeight="bold" color={textColor}>45%</Text>
                </Flex>
                <Progress value={45} size="sm" colorScheme="green" borderRadius="full" />
              </Box>
              
              <Box>
                <Flex justify="space-between" mb={2}>
                  <Text fontWeight="medium">CT Scanners</Text>
                  <Text fontWeight="bold" color={textColor}>92%</Text>
                </Flex>
                <Progress value={92} size="sm" colorScheme="red" borderRadius="full" />
              </Box>
              
              <Box>
                <Flex justify="space-between" mb={2}>
                  <Text fontWeight="medium">Treatment Rooms</Text>
                  <Text fontWeight="bold" color={textColor}>85%</Text>
                </Flex>
                <Progress value={85} size="sm" colorScheme="yellow" borderRadius="full" />
              </Box>
              
              <Box>
                <Flex justify="space-between" mb={2}>
                  <Text fontWeight="medium">Emergency Vehicles</Text>
                  <Text fontWeight="bold" color={textColor}>60%</Text>
                </Flex>
                <Progress value={60} size="sm" colorScheme="green" borderRadius="full" />
              </Box>
            </VStack>
          </Box>
        </Card>
      </Grid>
      
      {/* Wellness Corner Integration */}
      <Card 
        mt='20px'
        mb='20px' 
        bg={cardBg} 
        boxShadow={cardShadow} 
        borderRadius="16px" 
        variant="primary"
        borderTopColor="purple.400"
      >
        <Flex direction='column'>
          <Flex
            flexDirection='row'
            align='center'
            justify='space-between'
            w='100%'
            mb='15px'>
            <HStack spacing={2}>
              <Icon as={FiCoffee} color="purple.500" h="20px" w="20px" />
              <Text fontSize='lg' color={textColor} fontWeight='bold'>
                Wellness Corner Amenities
              </Text>
            </HStack>
            <Button variant='primary' maxH='30px' bg="purple.500" color="white" _hover={{ bg: "purple.600" }}>
              VIEW MAP
            </Button>
          </Flex>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={4}>
            <Box p={4} borderRadius="lg" border="1px" borderColor="gray.200" bg="white">
              <VStack spacing={2} align="center">
                <Icon as={FiCoffee} h="40px" w="40px" color="brown.500" />
                <Text fontWeight="bold">Beverage Station</Text>
                <Text fontSize="sm" color="gray.600" textAlign="center">
                  Located near the main entrance. Water, tea, and coffee available.
                </Text>
                <Badge colorScheme="green">Available Now</Badge>
              </VStack>
            </Box>
            <Box p={4} borderRadius="lg" border="1px" borderColor="gray.200" bg="white">
              <VStack spacing={2} align="center">
                <Icon as={FiBook} h="40px" w="40px" color="orange.500" />
                <Text fontWeight="bold">Reading Materials</Text>
                <Text fontSize="sm" color="gray.600" textAlign="center">
                  Magazines, coloring books, and puzzles in the central waiting area.
                </Text>
                <Badge colorScheme="green">Available Now</Badge>
              </VStack>
            </Box>
            <Box p={4} borderRadius="lg" border="1px" borderColor="gray.200" bg="white">
              <VStack spacing={2} align="center">
                <Icon as={FiBluetooth} h="40px" w="40px" color="blue.500" />
                <Text fontWeight="bold">Charging Station</Text>
                <Text fontSize="sm" color="gray.600" textAlign="center">
                  USB and wireless charging available at each seating section.
                </Text>
                <Badge colorScheme="yellow">Limited Availability</Badge>
              </VStack>
            </Box>
            <Box p={4} borderRadius="lg" border="1px" borderColor="gray.200" bg="white">
              <VStack spacing={2} align="center">
                <Icon as={FiWifi} h="40px" w="40px" color="cyan.500" />
                <Text fontWeight="bold">Free Wi-Fi</Text>
                <Text fontSize="sm" color="gray.600" textAlign="center">
                  Connect to "PPMC-Guest" network. Password available at reception.
                </Text>
                <Badge colorScheme="green">Available Now</Badge>
              </VStack>
            </Box>
          </SimpleGrid>
        </Flex>
      </Card>

      {/* Patient Feedback Integration */}
      <Card 
        mb='20px' 
        bg={cardBg} 
        boxShadow={cardShadow} 
        borderRadius="16px" 
        variant="primary"
        borderTopColor="blue.400"
      >
        <Flex direction='column'>
          <Flex
            flexDirection='row'
            align='center'
            justify='space-between'
            w='100%'
            mb='15px'>
            <HStack spacing={2}>
              <Icon as={FiMessageSquare} color="blue.500" h="20px" w="20px" />
              <Text fontSize='lg' color={textColor} fontWeight='bold'>
                Patient Feedback
              </Text>
            </HStack>
          </Flex>
          <Flex 
            direction={{ base: "column", md: "row" }} 
            align="center" 
            justify="space-between"
            bg="gray.50"
            p={5}
            borderRadius="lg"
          >
            <VStack align="start" spacing={3} mb={{ base: 4, md: 0 }}>
              <Text fontSize="lg" fontWeight="bold">
                We Value Your Input
              </Text>
              <Text>
                Help us improve your experience by sharing your thoughts and suggestions.
              </Text>
              <HStack>
                <Button 
                  leftIcon={<FiMessageSquare />} 
                  colorScheme="blue" 
                  size="md"
                  as="a"
                  href="https://forms.gle/FLGpQcxxYEU42ic7A"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Submit Feedback
                </Button>
                <Button 
                  variant="outline" 
                  colorScheme="blue" 
                  size="md"
                  as="a"
                  href="https://www.pennmedicine.org/for-patients-and-visitors/penn-medicine-locations/penn-presbyterian-medical-center/patient-and-visitor-information"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Patient Information
                </Button>
              </HStack>
            </VStack>
            <Box 
              border="1px dashed" 
              borderColor="gray.300" 
              p={4} 
              borderRadius="md"
              bg="white"
              maxW={{ base: "100%", md: "200px" }}
            >
              <VStack spacing={2}>
                <Text fontWeight="medium" textAlign="center">Scan to provide feedback</Text>
                <Box 
                  h="150px" 
                  w="150px" 
                  borderRadius="md" 
                  display="flex" 
                  alignItems="center" 
                  justifyContent="center"
                >
                  <Image 
                    src="/PPMCFeedbackForm.png" 
                    alt="QR Code for Feedback Form"
                    maxH="150px"
                    maxW="150px"
                  />
                </Box>
              </VStack>
            </Box>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
}
