'use client'

import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";


export default function NewsLetter() {
    const {isOpen, onOpen, onClose} = useDisclosure();

    React.useEffect(() => {
      onOpen();
    }, []);

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Newsletter</ModalHeader>
              <ModalBody>
                <Input type="email" label="Email" placeholder="Enter your email" />
                <p className="text-md text-gray-700 font-medium">Subscribe to the mailing list to recieve updates on new arrivals, special offers and other.</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}