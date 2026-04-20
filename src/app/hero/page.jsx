import { Button } from '@heroui/react';
import React from 'react';

const HeroPage = () => {
    return (
        <div>
            <h2>Hero Page</h2>
            <Button >Hero Button</Button>
            <Button variant='secondary'>Hero Button</Button>
            <Button variant='ghost'>Hero Button</Button>
            <Button variant='danger-soft'>Hero Button</Button>
        </div>
    );
};

export default HeroPage;