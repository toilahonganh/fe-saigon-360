type HeadingProps = {
    title: string; 
};

export default function Heading({ title }: HeadingProps) {
    return (
        <>
            <span className="text-5xl font-bold text-white md:text-7xl">{title}</span>
        </>
    );
}
