export const Resume = ({file_url = "Kesav_resume.pdf"})=>{
    console.log(file_url,"url")
    return (
        <div className="flex-container" style={{marginBottom:"15px"}}>
            <button
            className="download-btn"
            onClick={() => {
                const link = document.createElement("a");
                link.href = `${process.env.PUBLIC_URL}/files/${file_url}`;
                link.download = "resume.pdf";
                link.click();
            }}
            >
                Download Resume
            </button>
        </div>
    )
}