type ParagraphProps = {
    paragraph: string; 
};

export default function Paragraph({ paragraph }: ParagraphProps) {
    return (
        <div className="md:mx-0">
            <p className="text-sm font-light text-textGray md:text-[15px]">{paragraph}</p>
        </div>
    );
}
