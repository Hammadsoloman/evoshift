import { groq } from "next-sanity";
import Image from "next/image";
import { client } from "../../../../lib/sanity.client";
import MainService from "./mainService";

export const metadata = {
  title: "EvoShift - Software Development & Digital Marketing Agency",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

type Props = {
  params: {
    slug: string;
  };
};

const query = groq`*[_type == "service"][slug.current == $slug][0] {
  
      ...,      
     
  }`;

const servicesquery = groq`
  *[_type=='service'] {
    ...,
   
  } | order(_createdAt asc)
`;

const contactquery = groq`
  *[_type=='contact'] {
    ...,
    
    
  } | order(_createdAt desc)
`;

const ServiceDetailPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const service = (await client.fetch(query, { slug })) || [];
  const services = await client.fetch(servicesquery);
  const contact = await client.fetch(contactquery);

  return (
    <div>
      <MainService contact={contact[0]} data={service} services={services} />
      
    </div>
  );
};

export default ServiceDetailPage;
