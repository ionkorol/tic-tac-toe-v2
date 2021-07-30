import { Heading, Modal, Circle, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux-store/store";

const ResultModal = () => {
  const { winner } = useSelector((state: RootState) => state.game);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (winner) {
      setShow(true);
    }
  }, [winner]);

  return (
    <Modal size="md" isOpen={show} onClose={() => setShow(false)}>
      <Modal.Content bgColor="secondary.500">
        <Modal.Body>
          <VStack space={5} alignItems="center">
            {winner === "draw" ? (
              <React.Fragment>
                <Heading>Draw</Heading>
                <Circle size={50} bgColor="muted.500" />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Heading>Winner is</Heading>
                <Circle size={50} bgColor={`${winner}.500`} />
              </React.Fragment>
            )}
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default ResultModal;
