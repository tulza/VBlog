import BlogCard from "@components/BlogCard";
import ToggleButton from "@components/ToggleButton";

const TestPage = () => {
  return (
    <div className="bg-yellow grid h-full w-full place-content-center bg-yellow-400 text-black">
      {/* card */}
      <div className="mb-4 flex gap-8">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <ToggleButton />
    </div>
  );
};

export default TestPage;
