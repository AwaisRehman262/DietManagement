import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>&copy; 2023 Diet Manager. All rights reserved.</p>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#9EB384',
        color: '#000000',
        textAlign: 'center',
        padding: '1rem',
        position: 'absolte',
        bottom: 0,
        width: '100%',
    },
};

export default Footer;

