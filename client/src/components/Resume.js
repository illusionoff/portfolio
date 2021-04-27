import React from 'react';



export const Resume = () => {
    return (
        <div>
            <h3 className="page-title white-text">Resume</h3>
            <div className="container">
                <p>
                    <a href="/Resume.docx" >
                        <i className="fa fa-file-text fa-fw fa-2x grey-text text-darken-2"></i>
                    </a>
                    <a href="/Resume.docx" >Resume.docx</a>
                </p>
                <p>
                    <a href="/Resume.pdf" >
                        <i className="fa fa-file-text fa-fw fa-2x grey-text text-darken-2"></i>
                    </a>
                    <a href="/Resume.pdf" >Resume.pdf</a>
                </p>
            </div>
        </div>
    )
}
