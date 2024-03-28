import { IonSegment, IonSegmentButton, IonText } from "@ionic/react";
import { SEGMENT_BUTTONS } from "../../constant/constants";
import { useState } from "react";

interface LateralMenuListProps {
  selectedButton: string;
  setSelectedButton: React.Dispatch<React.SetStateAction<string>>;
}

function LateralMenuList({
  setSelectedButton,
  selectedButton,
}: LateralMenuListProps) {
  const handleButtonClick = (path: string) => {
    console.log(path);
    
    setSelectedButton(path);
  };

  return (
    <>
      <IonSegment
        scrollable={true}
        value={selectedButton}
        selectOnFocus={true}
        swipeGesture={true}
      >
        {SEGMENT_BUTTONS.map((b) => (
          <IonSegmentButton
            autoFocus={false}
            key={b.value}
            value={b.value}
            onClick={() => handleButtonClick(b.path)}
          >
            <IonText>{b.label}</IonText>
          </IonSegmentButton>
        ))}
      </IonSegment>
    </>
  );
}

export default LateralMenuList;