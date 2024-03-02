import React, { FC } from "react";

interface ContentProps {
    title: string;
    content: string;
}

const Content: FC<ContentProps> = ({ title, content }) => {
    return (
        <section className="flex flex-col items-center">
            <h2>{title}</h2>
            <p className="w-5/6">
                {content}
                <br />
                NextLevel Food is a place to discover new dishes, and to connect
                with other food lovers.
            </p>
        </section>
    );
};

export default Content;
