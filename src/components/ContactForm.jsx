function ContactForm() {
  return (
    <section className="container py-10">
      <div className="max-w-3xl mx-auto ">
        <h2 className="text-xl md:text-2xl font-bold mb-2 text-center md:text-left">
          Get In Touch with Us!
        </h2>
        <p className="text-gray-700 mb-6 text-center md:text-left md:w-3/4">
          Whether you have questions about our services, need help planning your
          event, or just want to say hello, we'd love to hear from you. Reach
          out using the form below or contact us directly.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block font-semibold">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#752626] outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold">Email Address</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#752626] outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold">Phone Number</label>
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#752626] outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold">Reason for Message</label>
            <input
              type="text"
              placeholder="Reason"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#752626] outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold">Message</label>
            <textarea
              placeholder="Message"
              className="w-full p-3 border rounded-md h-32 focus:ring-2 focus:ring-[#752626] outline-none"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button className="bg-[#752626] text-white font-semibold px-6 py-3 rounded-md transition duration-300 hover:bg-[#4a1515]">
              Send a Message
            </button>
          </div>
        </form>

        <div className="mt-8 text-center md:text-left">
          <h3 className="font-bold text-lg">Direct Contact Information:</h3>
          <p className="text-gray-700">
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> hello@yourbusiness.com
          </p>
          <p className="text-gray-700">
            <strong>Address:</strong> 123 Event Lane
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
