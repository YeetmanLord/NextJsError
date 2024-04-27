import React from "react";

export interface ComponentProps {
    children: React.ReactNode;
}

export default function TestComponent({children}: ComponentProps) {
    return (
        <main>
            <div>
                {children}
            </div>
        </main>
    )
}