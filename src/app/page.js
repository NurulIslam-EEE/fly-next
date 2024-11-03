import Banner from "@/components/Banner";
import BookingForm from "@/components/Home/BookingForm";
import TravelAllWorld from "@/components/Home/TravelAllWorld";
import LoaderPlane from "@/components/LoaderPlane";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <BookingForm />
      <LoaderPlane />
      <TravelAllWorld />
    </main>
  );
}
