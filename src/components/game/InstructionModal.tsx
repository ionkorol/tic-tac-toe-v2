import { Heading, Modal, Text } from "native-base";
import React from "react";
import { showInstructionsModal } from "redux-store/slices/modalSlice";
import { useAppDispatch, useAppSelector } from "redux-store/store";

const InstructionModal = () => {
  const show = useAppSelector((state) => state.modals.instructions);
  const dispatch = useAppDispatch();
  return (
    <Modal isOpen={show} onClose={() => dispatch(showInstructionsModal(false))}>
      <Modal.Content bgColor="secondary.500">
        <Modal.CloseButton />
        <Modal.Header>Game Instructions</Modal.Header>
        <Modal.Body>
          <Heading>Goal</Heading>
          <Text>
            - Place three of your marks in a diagonal, horizontal, or vertical
            row first.
          </Text>
          <Heading>Rules</Heading>
          <Text>- Each player has 6 pieces.</Text>
          <Text>
            - Each piece is valued differently with their value displayed on top
          </Text>
          <Text>
            - You can place a higher value piece on top of your opponent's
            piece, effectively controlling the square
          </Text>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default InstructionModal;
