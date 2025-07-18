import { Container } from "../shared/Container";

export const Numbers = () => {
  return (
    <section className="relative mt-12 md:mt-16">
      <Container className="flex justify-center align-center">
        <div
          className="mx-auto lg:mx-0 p-5 sm:p-6 sm:py-8 max-w-5xl rounded-3xl bg-box-bg
                       shadow-[0_0_10px_4px_rgba(34,197,94,0.6)] 
                        grid grid-cols-3 md:grid-cols-7"
        >
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              {" "}
              1600+{" "}
            </h2>
            <p className="mt-2 text-heading-3">Participants</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              {" "}
              70+{" "}
            </h2>
            <p className="mt-2 text-heading-3"> Innovators</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              {" "}
              14+{" "}
            </h2>
            <p className="mt-2 text-heading-3"> Mentors</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              {" "}
              12+{" "}
            </h2>
            <p className="mt-2 text-heading-3"> Investors</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              {" "}
              5+{" "}
            </h2>
            <p className="mt-2 text-heading-3"> Events</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              {" "}
              3{" "}
            </h2>
            <p className="mt-2 text-heading-3"> Partnerships</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              {" "}
              1{" "}
            </h2>
            <p className="mt-2 text-heading-3"> Collabrations</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
