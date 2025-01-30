import Image from 'next/image';
import * as Unicons from '@iconscout/react-unicons';
import Blog from '@/app/component/Blog';

const BlogDetails = () => {
    return (
        <div>
            <section className="py-28 w-full table relative bg-[url('/images/bg/auth.jpg')] bg-top bg-no-repeat">
                <div className="absolute inset-0 bg-slate-950/80"></div>

                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h3 className="mb-3 font-medium leading-normal text-3xl mt-10 text-white">
                            5 Trends Shaping the Future of Restaurants in 2025
                        </h3>

                        <ul className="list-none mt-6">
                            <li className="inline-block text-white/50 mx-5">
                                <span className="text-white block">Author:</span>
                                <span className="block">KoaCook</span>
                            </li>
                            <li className="inline-block text-white/50 mx-5">
                                <span className="text-white block">Date:</span>
                                <span className="block">30th January 2025</span>
                            </li>
                            <li className="inline-block text-white/50 mx-5">
                                <span className="text-white block">Time:</span>
                                <span className="block">8 Min Read</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="relative md:py-24 py-16">
                <div className="container">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-8 md:col-span-6">
                            <div className="p-6 rounded-md shadow dark:shadow-gray-800">
                                <Image
                                    src="/images/blog/1.jpg"
                                    className="rounded-md"
                                    alt=""
                                    width={688}
                                    height={430}
                                />

                                <div className="mt-6">
                                    <p className="text-slate-400">
                                        The most well-known dummy text is the 'Lorem Ipsum', which
                                        is said to have originated in the 16th century. Lorem Ipsum
                                        is composed in a pseudo-Latin language which more or less
                                        corresponds to 'proper' Latin. It contains a series of real
                                        Latin words. This ancient dummy text is also
                                        incomprehensible, but it imitates the rhythm of most
                                        European languages in Latin script.
                                    </p>
                                    <p className="text-slate-400 italic border-x-4 border-[#3b82f6]  rounded-ss-xl rounded-ee-xl mt-3 p-3">
                                        " There are many variations of passages of Lorem Ipsum
                                        available, but the majority have suffered alteration in some
                                        form, by injected humour, or randomised words which don't
                                        look even slightly believable. "
                                    </p>
                                    <p className="text-slate-400 mt-3">
                                        The advantage of its Latin origin and the relative
                                        meaninglessness of Lorum Ipsum is that the text does not
                                        attract attention to itself or distract the viewer's
                                        attention from the layout.
                                    </p>
                                </div>
                            </div>

                            <div className="p-6 rounded-md shadow dark:shadow-gray-800 mt-8">
                                <h5 className="text-lg font-semibold">Leave A Comment:</h5>

                                <form className="mt-8">
                                    <div className="grid lg:grid-cols-12 gap-6">
                                        <div className="lg:col-span-6">
                                            <input
                                                name="name"
                                                id="name"
                                                type="text"
                                                className="form-input"
                                                placeholder="Name :"
                                            />
                                        </div>

                                        <div className="lg:col-span-6">
                                            <input
                                                name="email"
                                                id="email"
                                                type="email"
                                                className="form-input"
                                                placeholder="Email :"
                                            />
                                        </div>

                                        <div className="lg:col-span-12">
                                            <textarea
                                                name="comments"
                                                id="comments"
                                                className="form-input textarea h-28"
                                                placeholder="Message :"
                                            ></textarea>
                                        </div>

                                        <div className="lg:col-span-12">
                                            <button
                                                type="submit"
                                                id="submit"
                                                name="send"
                                                className="btn bg-[#3b82f6] hover:bg-[#2563eb] border-[#3b82f6] hover:border-[#2563eb] text-white rounded-md h-11 justify-center flex items-center"
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="lg:col-span-4 md:col-span-6">
                            <div className="sticky top-20">
                                <h5 className="text-lg font-medium bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">
                                    Author
                                </h5>
                                <div className="text-center mt-8">
                                    <Image
                                        src="/images/client/04.jpg"
                                        className="h-24 w-24 mx-auto rounded-full shadow mb-4"
                                        alt=""
                                        width={96}
                                        height={96}
                                    />

                                    <div className="text-lg font-medium transition-all duration-500 ease-in-out h5">
                                        Cristina Romsey
                                    </div>
                                    <p className="text-slate-400">Content Writer</p>
                                </div>

                                <h5 className="text-lg font-medium bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">
                                    Social sites
                                </h5>
                                <ul className="list-none text-center mt-8 gap-1 flex justify-center">
                                    <li className="inline">
                                        <a
                                            href=""
                                            className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-[#3b82f6] hover:text-white hover:bg-[#3b82f6]"
                                        >
                                            <Unicons.UilLinkedin className="h-5 w-5" />
                                        </a>
                                    </li>
                                    <li className="inline">
                                        <a
                                            href=""
                                            className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-[#3b82f6] hover:text-white hover:bg-[#3b82f6]"
                                        >
                                            <Unicons.UilTwitter className="h-5 w-5" />
                                        </a>
                                    </li>
                                    <li className="inline">
                                        <a
                                            href=""
                                            className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-[#3b82f6] hover:text-white hover:bg-[#3b82f6]"
                                        >
                                            <Unicons.UilInstagram className="h-5 w-5" />
                                        </a>
                                    </li>
                                    <li className="inline">
                                        <a
                                            href=""
                                            className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-[#3b82f6] hover:text-white hover:bg-[#3b82f6]"
                                        >
                                            <Unicons.UilFacebookF className="h-5 w-5" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <Blog />

                <div className="container lg:mt-24 mt-16">
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-6 md:text-2xl text-xl font-medium">
                            Have Question? Get in touch!
                        </h3>

                        <p className="text-slate-400 max-w-xl mx-auto">
                            This is just a simple text made for this unique and awesome template,
                            you can replace it with any text.
                        </p>

                        <div className="mt-6">
                            <a
                                href="contactus.html"
                                className="py-2 px-5 inline-flex items-center font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-[#3b82f6] hover:bg-[#2563eb] border-[#3b82f6] hover:border-[#2563eb] text-white rounded-md"
                            >
                                <Unicons.UilEnvelope className="inline-block mr-1" /> Contact us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogDetails;
