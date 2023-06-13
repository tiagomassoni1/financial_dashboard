import React, { useMemo } from 'react';
import { Container, Profile, Welcome, UserName } from './styles';
import emojis from '../../utils/emojis'
const MainHeader: React.FC = () => {
    
    const emoji = useMemo (() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    }, []);
    
    return (
 
        <Container>
            <h1>MainHeader</h1>

            <Profile>
                <Welcome>Ola,  {emoji}</Welcome>
                <UserName>Tiago Massoni</UserName>
            </Profile>
        </Container>
    )
}

export default MainHeader;