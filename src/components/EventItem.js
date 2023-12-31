import React from 'react';
import { Box, Text, Circle } from '@chakra-ui/react';

const EventItem = ({ eventName, targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const TimeCircle = ({ label, time }) => (
    <Box alignItems="center" display="inline-flex" flexDirection="column" margin="0">
      <Circle size="80px" bg="orange" color="white" fontWeight="bold">
        {time}
      </Circle>
      <Text color="whiteAlpha.700" mt={2}>
        {label}
      </Text>
    </Box>
  );

  return (
    <Box textAlign="center" mb={6}>
      <Text mb={4} fontSize="xl" color="white" fontWeight="bold">
        {eventName}
      </Text>
      <Box display="inline-flex" alignItems="center">
        <TimeCircle label="DAYS" time={timeLeft.days - 1} />
        <Text color="white" mx={2}>:</Text>
        <TimeCircle label="HOURS" time={timeLeft.hours} />
        <Text color="white" mx={2}>:</Text>
        <TimeCircle label="MINUTES" time={timeLeft.minutes} />
        <Text color="white" mx={2}>:</Text>
        <TimeCircle label="SECONDS" time={timeLeft.seconds} />
      </Box>
    </Box>
  );
};

export default EventItem;
