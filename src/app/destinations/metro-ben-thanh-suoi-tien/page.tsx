import Banner from "@/app/components/panorama/image-panorama";
import InfoSection from "@/app/components/panorama/info-section";
import { Images } from "@/components/shared";
import Image from "next/image";

export default function Page() {
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Nguyen+Van+Binh+Street,+Ben+Nghe,+District+1,+Ho+Chi+Minh+City";

  return (
    <>
      {/* Banner */}
      <div>
        <Banner
          images={[
            Images.destinations.duongsach1,
            Images.destinations.duongsach2,
            Images.destinations.duongsach3,
            Images.destinations.duongsach4,
            Images.destinations.duongsach5,
            Images.destinations.duongsach6,
          ]}
          text="Ho Chi Minh City's Book Street"
          address="Nguyen Van Binh Street, Ben Nghe, District 1, Ho Chi Minh City"
        />
      </div>

      {/* Info Section */}
      <InfoSection
        title="Ho Chi Minh City's Book Street"
        subtitle="A vibrant hub for book lovers, Ho Chi Minh City's Book Street is a must-visit destination."
        content={[
          "Located in the heart of the city, this charming street is lined with bookstores, coffee shops, and cultural events, making it a paradise for readers and literary enthusiasts.",
          "Whether you're looking for the latest bestsellers or rare editions, Book Street offers a diverse collection of books in various languages.",
        ]}
      />

      {/* Image Gallery */}
      {[Images.destinations.duongsach1, Images.destinations.duongsach2, Images.destinations.duongsach3, Images.destinations.duongsach4].map((image, index) => (
        <div key={index} className="mx-40 py-10">
          <Image
            src={image}
            layout="responsive"
            width={16}
            height={9}
            alt="Panorama"
            className="shadow-lg mb-6 rounded-lg"
          />
          <span className="md:text-xl text-gray-600">
            Right on the street is the Tet Book Fair with a variety of books and cultural products.
          </span>
        </div>
      ))}

      

      {/* Krpano */}
      <div className="pt-24 px-4 md:px-40">
        <div className="w-full">
          <iframe
            src="/panoramas/metro-benthanh-suoitien/tour.html"
            title="Con Dao 360 Tour"
            className="w-full shadow-lg rounded-lg"
            style={{ height: "calc(100vh - 96px)" }}
          />
        </div>
      </div>

      {/* Google Map Section */}
      <div className="mx-40 py-10">
        <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4019882227885!2d106.6996368!3d10.7804921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f37d724e605%3A0xb6a917ebe263b6b9!2zxJAuIE5ndXnhu4VuIFbEg24gQsOsbmgsIELhur9uIE5naMOpLCBRdeG6rW4gMSwgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1739117586917!5m2!1svi!2s"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 text-white text-lg font-semibold transition-opacity duration-300 hover:bg-opacity-20"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </>
  );
}
