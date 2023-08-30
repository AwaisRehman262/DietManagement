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
        backgroundColor: '#2e1747',
        color: '#fff',
        textAlign: 'center',
        padding: '1rem',
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
};

export default Footer;
