import bg from "../../../Public/background/contact-background.png";
import Form from "./Form";
import HomeBtn from "../../Components/HomeBtn";

export default function Contact() {
  return (
    <>
      <HomeBtn />
      <img
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center"
      />

      <article className="relative md:w-full w-11/12 mx-auto min-h-screen flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            summon the wizard
          </h1>
          <p className="text-center font-light text-sm xs:text-base text-foreground">
            Step into the circle of enchantment and weave your words into the
            fabric of the cosmos. Whether you seek to conjure collaborations,
            unlock mysteries, or simply share tales of adventure, your messages
            are treasured scrolls within this realm. Use the form below to send
            your missives through the ethereal network, and await the whisper of
            magic in response.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
