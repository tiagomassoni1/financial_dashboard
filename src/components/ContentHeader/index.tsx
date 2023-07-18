import React, { PropsWithChildren } from "react";
import SelectInput from "../SelectInput";

import { Container, Title, Controllers } from "./style";

interface IContentHeaderProps {
    title: string;
    lineColor: string;
    controllers: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeaderProps> =({
    title, lineColor, controllers
}) => {

    const options = [
        {value: 'Teste A', label: 'Teste A'},
        {value: 'Teste B', label: 'Teste B'},
    ]

    return (
        <Container>
            <Title>
                <h2>{title}/h2>
            </Title>
            <Controllers>
                {controllers}
            </Controllers>
        </Container>
    )
}

export default ContentHeader