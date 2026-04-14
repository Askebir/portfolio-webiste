import Image from "next/image";

type Props = {
  name: string;
  role: string;
  image: string;
};
const ClientReviewCard = ({ name, role, image }: Props) => {
  return (
    <div className="m-2">
      <Image
        src={image}
        alt="client"
        width={60}
        height={60}
        className="rounded-full"
      />
      <p className="mt-6 text-base text-gray-200 font-medium">
        &quot;Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Consectetur rem facere, veniam soluta illum laudantium dolorem vero
        neque. Quasi rem ut esse cumque voluptatibus unde ratione ipsam sunt
        excepturi delectus. &quot;
      </p>
      <h1 className="mt-6 text-xl font-bold text-cyan-200">{name}</h1>
      <p className="mt-1 text-white">{role}</p>
    </div>
  );
};

export default ClientReviewCard;
