import BlogCard from "@components/BlogCard";
import LayoutButton from "@components/LayoutButton";
import ToggleButton from "@components/ToggleButton";

const ComponentTesting = () => {
  return (
    <div className="bg-yellow grid h-full w-full place-content-center bg-yellow-400 text-black">
      {/* card */}
      <div className="mb-4 flex gap-8">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <ToggleButton />
      <LayoutButton className="mt-2" />
    </div>
  );
};

export default ComponentTesting;
