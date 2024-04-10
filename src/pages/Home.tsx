import AppLayout from "@/components/layout/AppLayout";

function Home() {
  return (
    <div className=" w-[100%] h-[90vh]">
      <div className=" self-center align-middle absolute top-[20%] left-[40%]">
        <h3 className="text-center scroll-m-20 text-2xl font-semibold tracking-tight">
          Your new chat destination
        </h3>
        <h1 className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
          Select a friend to chat
        </h1>
      </div>
    </div>
  );
}

export default AppLayout()(Home);
