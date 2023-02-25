import {
	Box,
	Button,
	ButtonGroup,
	Flex,
	Heading,
	Spacer,
} from "@chakra-ui/react";

const Header = ({ title }) => {
	return (
		<Flex minWidth="max-content" alignItems="center" gap="2" bg="gray.100">
			<Box p={2}>
				<Heading size="md">{title}</Heading>
			</Box>
			<Spacer />
			<ButtonGroup gap={2}>
				<Button colorScheme="teal" size="sm">Sign Up</Button>
				<Button colorScheme="">Log In</Button>
			</ButtonGroup>
		</Flex>
	);
};

export default Header;
