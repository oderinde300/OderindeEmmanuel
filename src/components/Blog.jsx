import React from "react";
import Image from "@/components/Image";
import Navigation from "./layouts/Navigation";
import Link from "next/link";

const Blog = () => {
  const posts = [
    {
      title: "Getting Started",
      description:
        "Hi, I'm Oderinde Emmanuel a self-taught web developer and a Frontend Engineering student of AltSchoolAfrica. I have decided to document my tech journey and share some useful tips that have been helping",
      image:
        "https://res.cloudinary.com/emmatobiloba/image/upload/v1685996854/Portfolio/Getting_Started_yej4zf.png",
      link: "https://emma-tobiloba.hashnode.dev/getting-started",
    },
    {
      title: "How I Built My Pagination Project Using Random User API",
      description:
        "RandomMe API is a free, open-source API for generating random user data. Like Lorem Ipsum, but for people. In this project, I made use of RandomMe API to get a list of random users and then implemented backend pagination logic using the",
      image:
        "https://res.cloudinary.com/emmatobiloba/image/upload/v1685996853/Portfolio/Pagination_aap0kl.png",
      link: "https://emma-tobiloba.hashnode.dev/how-i-built-my-pagination-project-using-randomme-api-and-firebase-authentication",
    },
    {
      title: "Landing a Remote Job in 2023 with these Sites",
      description:
        "We Work Remotely (WWR): We Work Remotely is arguably the largest remote work community in the world With over 4.5M visitors. There are many tech-related remote work job opportunities here, from small startups to the biggest tech companies like Google.",
      image:
        "https://res.cloudinary.com/emmatobiloba/image/upload/v1685996855/Portfolio/Landing_a_Remote_Job_r3zaci.png",
      link: "https://emma-tobiloba.hashnode.dev/land-a-remote-job-in-2023-with-these-sites",
    },
  ];
  return (
    <main className="h-full md:h-screen w-full mt-12" id="blog">
      <div className="w-full flex justify-center mb-12">
        <div className="text-7xl uppercase font-[900] text-primary-black w-[15rem] tracking-widest">
          <span className="hidden sm:block">POSTS</span>
          <p className="text-4xl uppercase font-extrabold text-white flex justify-center items-center sm:relative z-50 bottom-14 left-[1rem] tracking-normal">
            My <span className=" text-primary-gold ml-2">Blog</span>
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className=" pl-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%]">
          {posts?.map((post, index) => (
            <Link href={`${post.link}`} passHref={true} key={index}>
              <div className="w-[90%] xs:w-[300px] h-[320px] hover:shadow-lg hover:shadow-primary-gold cursor-pointer">
                <Image
                  image={post.image}
                  width={300}
                  height={300}
                  styles="mr-4"
                />
                <div className="h-1 w-full bg-primary-gold"></div>
                <div className="p-4 font-semibold bg-primary-black h-[150px]">
                  <p>{post.title}</p>
                  <p className="mt-4 text-primary-gray text-sm overflow-clip text-ellipsis h-16 pb-auto">
                    {post.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Navigation />
      </div>
      {/* <Button>Material Ui</Button> */}
    </main>
  );
};

export default Blog;
