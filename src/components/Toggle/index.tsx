import React from "react";
import { Container, ToggleLabel, ToggleSelector} from "./styles";

const Toggle: React.FC = () => (
    <Container>
        <ToggleLabel>Light</ToggleLabel>
        <ToggleSelector
            checked
            checkedIcon={false}
            uncheckedIcon={false}
            onChange={() => console.log('mudou')}
        />
        <ToggleLabel>Dark</ToggleLabel>
    </Container>
)

export default Toggle;