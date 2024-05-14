const Blogs = () => {
  return (
    <div>
      <section className="bg-gray-800 dark:bg-gray-100 bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800 text-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          {/* <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
            How it works
          </p> */}
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Our Blogs
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700 dark:divide-gray-300 divide-gray-700 dark:divide-gray-300">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What is an access token and refresh token? How do they work and
                where should we store them on the client side?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Access tokens serve as credentials for client applications to
                  access protected resources, while refresh tokens provide a
                  means for obtaining new access tokens when the current ones
                  expire. Access tokens are used with each request to access
                  protected resources, and they typically have limited
                  lifetimes. Refresh tokens, on the other hand, are long-lived
                  and are used to obtain new access tokens without requiring the
                  user to log in again. <br /> <br /> On the client side, access
                  tokens are usually stored in memory or secure storage
                  mechanisms like browser localStorage or mobile device
                  keychain. They should be sent with each request to access
                  protected resources. Refresh tokens, being more sensitive,
                  need to be stored securely. They are often stored in locations
                  inaccessible to client-side JavaScript, such as secure HTTP
                  cookies or backend session storage, to minimize the risk of
                  theft through security vulnerabilities like XSS attacks.{" "}
                  <br /> <br /> By securely storing both access and refresh
                  tokens, applications can maintain user sessions and access
                  protected resources efficiently while mitigating security
                  risks.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What is express js? What is Nest JS (google it)? <br /> Explain your
                code.
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Express.js is a minimalist web application framework for
                  Node.js, designed for building web applications and APIs. It
                  provides a robust set of features for web and mobile
                  applications, including routing, middleware support, template
                  engines, and handling HTTP requests and responses. NestJS is a
                  progressive Node.js framework for building efficient,
                  reliable, and scalable server-side applications. It is built
                  with TypeScript and heavily inspired by Angular, providing a
                  modular and organized structure for developing backend
                  applications. NestJS utilizes Express under the hood but adds
                  a layer of abstraction and additional features such as
                  dependency injection, middleware, decorators, and an intuitive
                  module system.
                  <p>
                    
                  </p>
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
