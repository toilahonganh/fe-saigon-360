

export default function InfoSection({ title, subtitle, content }: InfoSectionProps) {
    return (
        <div className="mx-40 py-20">
            <h2 className="text-4xl font-bold text-gray-900 border-b pb-2">{title}</h2>
            <p className="mt-2 text-xl font-semibold text-gray-700">{subtitle}</p>
            {content.map((paragraph, index) => (
                <p key={index} className="md:text-xl mt-4 text-gray-600">
                    {paragraph}
                </p>
            ))}
        </div>
    );
}