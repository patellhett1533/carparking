import Image from "next/image";
import React from "react";
import Gallery from "../_components/Gallery";
import Client from "../_components/Client";
import Testimonials from "../_components/Testimonials";
import Contact from "../_components/Contact";

const page = () => {
  return (
    <div className="">
      <div className="mt-10 lg:px-20 md:px-12 px-6">
        <p className="thin mb-4">November 14, 2023</p>
        <h1 className="lg:text-[2.5rem] text-2xl lg:leading-[3rem] text-sky font-bold tracking-wider">
          The top 5 headaches when it comes to running a carpark!
        </h1>
        <div className="h-1 w-2/5 bg-sky mt-6"></div>
        <p className="thin mt-4">News, Service</p>
      </div>
      <div className="w-full aspect-[3/2] my-12 lg:px-20 md:px-12 px-6">
        <Image
          src="/images/blog1.jpeg"
          width={1680}
          height={1000}
          alt=""
          className="w-full aspect-[3/2]"
        />
      </div>
      <div className="lg:px-20 md:px-12 px-6">
        <p className="thin text-lg">
          Operating a car park might seem like a straightforward business, but
          behind the scenes, there are numerous challenges that parking facility
          managers face daily. From technology glitches to customer
          satisfaction, the complexities of managing a car park go beyond simply
          collecting fees. We’ve gained valuable insights for nearly ten years,
          and worked across different industries. We have discovered solving
          issues requires an understanding of the problems. In this blog post,
          we’ll explore the top five challenges in running a car park.
        </p>
        <ol className="mt-8 thin gap-8 flex flex-col">
          <li className="flex even:lg:flex-row-reverse max-lg:flex-col gap-5">
            <div className="aspect-[15/9]">
              <Image
                src="/images/blog-data.jpg"
                width={1000}
                height={600}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="regular">
                1. Unskilled staff resulting in poor customer experience
              </h1>
              <p>
                Whilst we hire people who love people and customer service –
                which is a great starting point, we find they almost always need
                training. A few years ago, we launched the First Class Valet
                Academy, which provided training for our own team, however some
                of our clients use the academy to outsource their training needs
                as well. We’ve also worked with clients to create bespoke
                training modules that are tailored to individual sites and
                assets.
              </p>
              <p>
                The overall customer experience is a pivotal factor in the
                success of any business, and car parks are no exception. If
                safety, clear communication, friendly staff, and responsive
                customer service are achieved, it greatly improves the overall
                customer experience. When customers pay for valet parking they
                expect an exceptional service experience. When the service
                provided is exceptionally good, customers come back as return
                customers and tell people about the excellent service.
              </p>
            </div>
          </li>
          <li className="flex even:lg:flex-row-reverse max-lg:flex-col gap-5">
            <div className="aspect-[15/9]">
              <Image
                src="/images/blog-data.jpg"
                width={1000}
                height={600}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="regular">2. To outsource or not to outsource</h1>
              <p>
                Some say it’s the best thing they have ever done! To resource
                the operations of car park or car park services can be a complex
                task. Our advice is to look at long-term outcomes and your goals
                to then match them to your strategy. The bottom line is always
                going to be important, but every asset and company looks at what
                they want to achieve differently. Over many years of operating,
                we’ve found every client has different needs.
              </p>
              <p>
                Some elements, such as technology, are outsourced, and in other
                cases, the team, management, and mid management are outsourced
                to us, which allows our clients to clients to focus on their
                core business and not have to worry about the day to day, nitty
                gritty operations of a carpark. We also work with clients on
                commercialising their car park to achieve the best financial
                outcomes.
              </p>
            </div>
          </li>
          <li className="flex even:lg:flex-row-reverse max-lg:flex-col gap-5">
            <div className="aspect-[15/9]">
              <Image
                src="/images/blog-data.jpg"
                width={1000}
                height={600}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="regular">3. Claims, risk, and technology</h1>
              <p>
                The technology a car park uses is usually put in place for a
                better experience, but more importantly to reduce claims and
                risk. One of the biggest pain points for car park management is
                managing claims and false claims. In today’s digital age, car
                parks rely heavily on technology for tasks such as ticketing,
                payment processing, and security. Implementing and maintaining
                these systems can be a significant challenge. Frequent
                technological issues, such as malfunctioning ticket machines or
                payment processing errors, can lead to frustrated customers and
                huge operational disruptions if contingency plans are not in
                place and ready for immediate deployment if needed.
              </p>
              <p>
                Our valet technology using mobile-based systems is an example of
                significantly reducing the number of claims our clients
                experience. It also produces reports so you can measure
                reductions and identify areas of risk. Regular maintenance and
                staying abreast of technological advancements are crucial to
                ensure a smooth parking experience
              </p>
            </div>
          </li>
          <li className="flex even:lg:flex-row-reverse max-lg:flex-col gap-5">
            <div className="flex flex-col gap-4">
              <h1 className="regular">4. Low Net Promoter Scores (NPS)</h1>
              <p>
                Believe us, car parks and the associated service industry don’t
                have the best reputation. Ineffective operations, unclear
                signage, poor cleanliness and inadequate customer service can
                lead to frustration and dissatisfaction among users.
                Implementing mobile apps for parking information, real-time
                availability updates, and convenient payment options can
                significantly improve customer satisfaction. Pre-arrival
                information on websites should be easy to use and informative.
                Our First Class Valet technology is the only one available in
                Australia that is paperless and seamless. The mobile technology
                resonates with customers, as all is controlled from their mobile
                phones. Our clients (like they should) measure Net Promoter
                Scores consistently, especially in the hospitality, hotel and
                retail industries. Carpark operators should consider offering
                auxiliary services such as concierge services. For example, a
                laundromat drop off and pick up, car washing, valet services,
                even managing catering and uber orders.
              </p>
              <p>
                Running a car park involves more than just providing a space for
                vehicles. It is a true extension of an establishment. Navigating
                the challenges of technology integration, security, risk and
                customer experience requires a proactive and strategic approach.
                By addressing these challenges head-on, car park operators can
                create a seamless and efficient parking experience for users
                while staying ahead in an ever-evolving industry.
              </p>
            </div>
          </li>
        </ol>
        <p className="thin text-lg">
          Give the First Class Valet team a call for a free operational review
          or discussion, contact us here
        </p>
      </div>
      <Gallery />
      <Client />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default page;
