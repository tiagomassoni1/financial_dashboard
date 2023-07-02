import React from 'react';
import { Container, Header, LogImg, MenuContainer, MenuItemLink, Title } from './styles';
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md';


const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <Title>Financial Dashboard</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="#">
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>
                <MenuItemLink>
                <MdArrowUpward />
                    Inflow
                </MenuItemLink>
                <MenuItemLink>
                    <MdArrowDownward />
                    Outflow
                </MenuItemLink>
                <MenuItemLink>
                    <MdExitToApp />
                    Exit
                </MenuItemLink>


            </MenuContainer>
        </Container>
    )
}

export default Aside;