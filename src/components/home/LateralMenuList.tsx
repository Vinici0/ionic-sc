import { IonSegment, IonSegmentButton, IonText } from "@ionic/react";
import { SEGMENT_BUTTONS } from "../../constant/constants";
import { useState } from "react";

interface LateralMenuListProps {
  selectedButton: string;
  setSelectedButton: React.Dispatch<React.SetStateAction<string>>;
}

export const LateralMenuList: React.FC<LateralMenuListProps> = ({
  setSelectedButton,
  selectedButton,
}) => {
  // const [selectedSegment, setSelectedSegment] = useState(selectedButton);

  const handleButtonClick = (path: string) => {
    setSelectedButton(path);
  };

  return (
    <>
      <IonSegment
        scrollable={true}
        value={selectedButton}
        selectOnFocus={true}
        swipeGesture={true}
        // disabled={true}
      >
        {SEGMENT_BUTTONS.map((b) => (
          <IonSegmentButton
            //  false
            autoFocus={false}
            key={b.value}
            value={b.value}
            // style={
            //   b.path === selectedButton
            //     ? { background: "var(--ion-color-primary)" }
            //     : {}
            // }
            onClick={() => handleButtonClick(b.path)}
          >
            <IonText>{b.label}</IonText>
          </IonSegmentButton>
        ))}
      </IonSegment>
    </>
  );
};
