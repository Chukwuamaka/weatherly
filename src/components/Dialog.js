import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, Text, HStack, VStack, Divider } from "@chakra-ui/react";

export default function Dialog({isOpen, onClose, previousSearches, selectSearch}) {
    return (
        // Display user's previous searches as a list in a dialog
        <Modal isOpen={isOpen} onClose={onClose} isCentered size='lg' scrollBehavior="inside">
            <ModalOverlay>
                <ModalContent maxW={['90vw', '70vw']}>
                    <ModalHeader fontSize={['107%', '20px']} fontWeight='bold' mb={2}>
                        Previous Searches
                    </ModalHeader>

                    <ModalBody p={0}>
                        <VStack spacing={0} divider={<Divider bgColor='black' height={0.3} />}>
                            {
                                previousSearches.map((previousSearch, index) => (
                                    <HStack
                                        key={index+1}
                                        spacing={2}
                                        p={4}
                                        width='100%'
                                        cursor='pointer'
                                        fontSize={['smaller', null, '97%']}
                                        bgColor={index % 2 === 0 ? 'gray.100' : 'inherit'}
                                        onClick={() => selectSearch(previousSearch)}
                                    >
                                        <Text>Continent: {previousSearch.continent}</Text>
                                        <Text>Country: {previousSearch.country}</Text>
                                        <Text>City: {previousSearch.city}</Text>
                                    </HStack>
                                ))
                            }
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </ModalOverlay>
        </Modal>
    )
}
