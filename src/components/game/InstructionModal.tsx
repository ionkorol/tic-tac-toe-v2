import { modalsShowInstructions } from "lib/modals";
import { Modal, Text } from "native-base";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux-store/store";

const InstructionModal = () => {
  const show = useSelector((state: RootState) => state.modals.instructions);
  return (
    <Modal isOpen={show} onClose={() => modalsShowInstructions(false)}>
      <Modal.Content bgColor="secondary.500">
        <Modal.CloseButton />
        <Modal.Header>Game Instructions</Modal.Header>
        <Modal.Body>
          <Text>- Each player has 6 pieces.</Text>
          <Text>
            - Each piece is valued differently with their value displayed on top
          </Text>
          <Text>
            - You can place a higer value piece on top of your opponent's piece,
            effectively controlling the square
          </Text>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default InstructionModal;
