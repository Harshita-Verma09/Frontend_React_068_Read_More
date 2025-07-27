import React, { useState } from 'react';

const MoreRead = () => {
    const [isOpen, setOpen] = useState<boolean>(false);

    const handleOpenToggle = (): void => {
        setOpen(prevState => !prevState);
    };

    return (
        <div
            style={{
                backgroundColor: '#121212',
                color: '#ffffff',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Arial, sans-serif',
                padding: '20px',
            }}
        >
            <div
                style={{
                    backgroundColor: '#1e1e1e',
                    padding: '30px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                    maxWidth: '600px',
                    width: '100%',
                }}
            >
                <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>React + TypeScript Intro</h2>

                <p style={{ lineHeight: '1.6', fontSize: '16px' }}>
                    React is a popular JavaScript library for building user interfaces. TypeScript adds static typing to JavaScript,
                    helping developers catch errors early. Using React with TypeScript improves code reliability and developer experience.
                    It supports components, props, and state with type safety. Together, they make modern frontend development more scalable.
                </p>

                {isOpen && (
                    <p style={{ lineHeight: '1.6', fontSize: '16px', marginTop: '10px' }}>
                        TypeScript helps catch bugs at compile time, and when combined with React, it allows for safer and cleaner component design.
                        Developers can define custom types, interfaces, and take advantage of autocompletion in IDEs.
                    </p>
                )}

                <div style={{ textAlign: 'center' }}>
                    <button
                        onClick={handleOpenToggle}
                        style={{
                            marginTop: '20px',
                            padding: '10px 25px',
                            backgroundColor: '#272727',
                            color: '#ffffff',
                            border: '1px solid #444',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseOver={(e) => {
                            (e.target as HTMLButtonElement).style.backgroundColor = '#3a3a3a';
                        }}
                        onMouseOut={(e) => {
                            (e.target as HTMLButtonElement).style.backgroundColor = '#272727';
                        }}
                    >
                        {isOpen ? 'Read Less' : 'Read More...'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MoreRead;
